// @TODO AR-5030 refactor ticket for this file.
import '@forbes/fbs-ads/dist/main';
import { isMobile } from './is-mobile';
import { userGaveFullConsent } from './ketchUtils';
import { runAfterMeterVerified } from './paywallUtils';
import {
	adZone,
	adExperience,
	retracted,
	relativeVideo,
	tracking,
} from './clientConfigService';
import throttle from './throttle';
import Observable from './Observable';
import { checkArticleIsPremiumOrMasthead } from './stream-share';

const progressiveAds = [];
const adConfig = new Map();

/**
 * Sets if the ad is a blocked ad or not
 * @param {number[]} sizes The ad sizes from Google Ad Manager
 * @returns {boolean} True if serving blocked ad
 */
export const isBlockedAd = (sizes = []) => ((Array.isArray(sizes) ? sizes : [])[0] === 1 && sizes[1] === 1);

/**
 * checks if the ad is topx and in a preimum or masthead type for the 970x600 topx ad to load earlier
 * @param {FbsAd} ad the ad to check
 * @returns {boolean} is the current page is premium or masthead
 */
function checkIfAdIsTopxAndInPremiumOrMasthead(ad) {
	return ad.getAttribute('position') === 'topx' && checkArticleIsPremiumOrMasthead();
}

/**
 * Check position of ad to see if it is close enough to load
 * @param {FbsAd} ad The ad to check
 * @return {boolean} is the ad in view (or close enough - 25% of window height away) that it should be loaded
 */
function progressiveAdShouldLoad(ad) {
	// TODO(iingato): Check that the ad slot is available at this point.
	const PROGRESSIVE_LOAD_PERCENTAGE = ad.getAttribute('data-double-progressive') || checkIfAdIsTopxAndInPremiumOrMasthead(ad) ? 1 : 0.25;
	const { bottom } = ad.getBoundingClientRect();
	const editoolsOpen = document.documentElement.classList.contains('et-on');

	return !editoolsOpen && ad.div && (bottom - window.innerHeight < (window.innerHeight * PROGRESSIVE_LOAD_PERCENTAGE));
}

/**
 * Displays ad that is in view or adds to progressiveAds collection to
 * be displayed on scroll
 * @param {FbsAd} ad The ad to insert
 */
function insertProgressiveAd(ad) {
	if (progressiveAdShouldLoad(ad) && ad.div) {
		if (typeof ad.display !== 'function') {
			// Since we're rendering these ads server side,
			// there is sometimes a timing issue where if the ad is progressive
			// but is in the viewport and should load
			// the ad hasn't finished bootstrapping.
			const bootstrapCallback = () => {
				ad.display();
				ad.removeEventListener('bootstrapped', bootstrapCallback);
			};

			ad.addEventListener('bootstrapped', bootstrapCallback);
		} else {
			ad.display();
		}
	} else if (progressiveAds.indexOf(ad) < 0) {
		progressiveAds.push(ad);
	}
}

/**
 * Handler for window.scroll event to check if any progressive ads are ready to display
 */
function progressiveAdScrollHandler() {
	progressiveAds.forEach((ad) => {
		if (progressiveAdShouldLoad(ad)) {
			ad.display();
			progressiveAds.splice(progressiveAds.indexOf(ad), 1);

			if (ad.hasAttribute('data-double-progressive') && progressiveAds.length) {
				progressiveAds[0].display();
				progressiveAds.shift();
			}
		}
	});
}

/**
 * Registers fbs-ad elements with the progressive attribute
 * to progressively load
 * @param {Array} adsToLoad Array of progressive fbs-ads
 * @TODO: Use this function to register all progressive ads once the insertAd() function
 * is completely removed
 */
export function registerProgressiveAds(adsToLoad) {
	if (!adsToLoad || !adsToLoad.length) {
		return;
	}

	adsToLoad.forEach((ad) => {
		if (['inread', 'artbottom'].indexOf(ad.getAttribute('position')) < 0) {
			insertProgressiveAd(ad);
		}
	});
}

/**
 * Grabs all progressive ads on the page and registers them
 * in the progressive queue for loading
 *
 * NOTE: If you would like more granular control over progressive ads,
 * (rather than just grabbing ALL progressive ads on the page)
 * you can use registerProgressiveAds and pass it an array of fbs-ad elements that
 * you define
 */
export function bootstrapProgressiveAds() {
	const adsToRegister = Array.from(document.querySelectorAll('fbs-ad[progressive]'));
	registerProgressiveAds(adsToRegister);
}

window.addEventListener('scroll', throttle(progressiveAdScrollHandler));

// Add tabIndex attribute to ad iframe to skip the ad by tab key - Accessibility
function addTabindex(ad, position) {
	if (position === 'ntv-home' || position === 'ntv-deskchannel') {
		return;
	}
	let counter = 0;
	const iframeInterval = setInterval(() => {
		const adiframe = ad.querySelector('iframe');
		let modified = false;
		if (adiframe && !adiframe.hasAttribute('tabindex')) {
			adiframe.setAttribute('tabindex', '-1');
			modified = true;
		}
		if (!modified && (adiframe || counter++ < 100)) {
			clearInterval(iframeInterval);
		}
	}, 100);
}

/**
 * Injects medianet ad into specified position.
 * @param {String} position Position name for the parent wrapper
 * @param {String} size Medianet create sizes to request
 * @param {String} crid Tag ID to request from medianet
 */
export function insertMedianet(position, size = '300x250', crid = '311139641') {
	const wrapper = document.querySelector(`.fbs-ad--${position}-wrapper`);
	const currentArticleIndex = position.split('')[position.split('').length - 1];

	if (wrapper) {
		const ad = document.createElement('div');
		ad.setAttribute('id', position);
		wrapper.appendChild(ad);
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = `
			try {
				window._mNHandle.queue.push(() => {
					window._mNDetails.loadTag('${position}', '${size}', '${crid}');
				});
				window._mNHandle.queue.push(() => {
					const adInterval = setInterval(() => {
						const mnetIframe = document.querySelector('.fbs-ad--${position}-wrapper').querySelector('iframe');

						if (mnetIframe) {
							mnetIframe.setAttribute('tabindex', '-1');
							mnetIframe.setAttribute('aria-hidden', 'true');
							mnetIframe.setAttribute('title', 'MediaNetIframe');
							clearInterval(adInterval);

							if((mnetIframe.style || {}).display === 'none') {
								const articleBody = document.querySelector('#article-stream-${currentArticleIndex}')
								const adLabel = articleBody.querySelector('.footer-ad-labeling');
								adLabel?.classList.add('medianet-disabled');
							}
						}
					}, 500);
				});
			} catch (error) {}
		`;

		// in next.js, the medianet.js is part of the bundle, and is likely not to be loaded yet - wait for it
		// eslint-disable-next-line no-underscore-dangle
		if (!window._mNHandle) {
			setTimeout(() => wrapper.appendChild(script));
			return;
		}

		wrapper.appendChild(script);
	}
}

export const adObservable = new Observable(); // needs to be exported for ad logic in universal-header.js

/**
 * Handles logic for top ad onRender event
 * @param {Event} event
 */
function topAdRenderCallback(event) {
	const { detail: { size = [], isEmpty = false } = {} } = event;

	const adWrapper = document.querySelector('.fbs-ad--top-wrapper');

	if (!adWrapper) {
		return;
	}

	const ad = document.querySelector('fbs-ad[position="top"]');
	const mainContent = document.querySelector('.main-content');
	const header = document.querySelector('.header');
	const paddingTopBottom = 24;
	const isPremium = (tracking.templateType === 'premium');
	const parentElementId = adWrapper.parentElement.id;
	const isArticleAd = parentElementId.match(/article-container-\d+/);
	const isProfileListuserAd = adWrapper.parentElement.classList.contains('listuser-leadspace__hero');

	// no ad targeted or empty ad received
	if (isEmpty || size.every((pos) => pos === 1)) {
		adWrapper.style.height = 0;
		mainContent.style.paddingTop = `${header.clientHeight}px`;

		return;
	}

	// takeover ad
	if (size[0] === 7) {
		adWrapper.classList.add('fbs-ad--top-wrapper--takeover');
	}

	// fluid ad
	if (!isPremium && !isProfileListuserAd && size.every((pos) => pos === 0)) {
		const initialAdHeight = 134;

		ad?.classList.add('fbs-ad--fluid-top');
		if (!adWrapper.classList.contains('contributor-leaderboard-ad') && !isArticleAd) {
			adWrapper.classList.add('fbs-ad--top-wrapper-with-label');
		}

		const interval = setInterval(() => {
			if (ad.clientHeight !== 0 && ad.clientHeight !== initialAdHeight) {
				adObservable.notify({
					height: ad.clientHeight,
					isFluidAd: true,
					size,
				});
				clearInterval(interval);
			}
		}, 100);
	}

	// regular ads
	if (!isPremium && !isProfileListuserAd && size.every((pos) => (pos !== 0 && pos !== 1))) {
		if (adWrapper && !adWrapper.classList.contains('contributor-leaderboard-ad') && size[0] !== 7 && !isArticleAd) {
			adWrapper.classList.add('fbs-ad--top-wrapper-with-label');
		}
		adObservable.notify({
			height: size[1] + paddingTopBottom,
			isFluidAd: false,
			size,
		});
	}
}

/**
 * Handles logic for spon-logo ad onRender event
 * @param {Event} event
 */
function sponLogoRenderCallback(event) {
	const { detail: { size = [], isEmpty = false } = {} } = event;
	const modalContent = document.querySelector('.modal__content');

	if (modalContent) {
		if (!isEmpty && size && size[0] && size[0] !== 1) {
			const sponsor = modalContent.querySelector('.sponsor');
			if (sponsor) {
				sponsor.classList.add('sponsor--loaded');
			}
			modalContent.classList.add('modal__content--has-sponsor');
		} else {
			modalContent.classList.remove('modal__content--has-sponsor');
		}
	}
}

/**
 * Handles the logic in creating the X button above the fluid ad
 * @param {HTMLElement} adContainer the ad container
 * @param {HTMLElement} footerContainer the footer html element
 * @param {String} footerMobileClass the mobile footer class
 * @returns {HTMLElement} The X button to be appended to the ad container
 */
function createFluidAdButton(adContainer, footerContainer, footerMobileClass) {
	const adClose = document.createElement('button');
	const adCloseX = document.createElement('span');

	adCloseX.innerHTML = 'x';
	adCloseX.classList.add('close');
	adClose.append(adCloseX);
	adClose.classList.add('fbs-ad--mobile-close');
	adClose.onclick = () => {
		if (adClose.classList.contains('show')) {
			// Add expand-height class to prevent space from appearing between the header and the bottom of the page
			const headerBlock = document.querySelector('.header__channels');
			headerBlock?.classList.add('expand-height');
		}
		adContainer?.classList.add('fbs-ad--mobile-hidden');
		footerContainer?.classList.remove(footerMobileClass, `${footerMobileClass}-fluid`);
		adClose.classList.remove('show');
	};

	return adClose;
}

/**
 * Handles the fluid ad container changes whenevr a fluid ad is shown on the page
 * @param {HTMLElement} ad the sticky mobile ad element
 * @param {String} footerMobileClass the mobile footer class
 * @param {String} fbsAdMobileClass the ad mobile class
 * @param {HTMLElement} footerContainer the footer html element
 * @param {HTMLElement} closeButton the close button html element
 */
function handleFluidAd(ad, footerMobileClass, fbsAdMobileClass, footerContainer, closeButton) {
	const adContainer = document.querySelector(`.${fbsAdMobileClass}-wrapper`);
	ad?.classList.add(`${fbsAdMobileClass}-fluid`);
	footerContainer?.classList.add(`${footerMobileClass}-fluid`);

	if (!closeButton) {
		const adClose = createFluidAdButton(adContainer, footerContainer, footerMobileClass);
		adContainer?.append(adClose);

		setTimeout(() => {
			adClose.classList.add('show');
		}, 5000);
	}
}

/**
 * Handles the normal ad container changes whenevr one is shown on the page
 * @param {HTMLElement} ad the sticky mobile ad element
 * @param {String} footerMobileClass the mobile footer class
 * @param {String} fbsAdMobileClass the ad mobile class
 * @param {HTMLElement} footerContainer the footer html element
 * @param {HTMLElement} closeButton the close button html element
 */
function handleNormalAd(ad, footerMobileClass, fbsAdMobileClass, footerContainer, closeButton) {
	// Add expand-height class to prevent space from appearing between the ad and the header
	const headerBlock = document.querySelector('.header__channels');
	headerBlock?.classList.add('expand-height');

	if (closeButton) {
		ad?.classList.remove(`${fbsAdMobileClass}-fluid`);
		footerContainer?.classList.remove(`${footerMobileClass}-fluid`);
		closeButton.remove();
	}

	ad?.classList.add(fbsAdMobileClass);
}

/**
 * Handles logic for mobile sticky ad onRender event
 * @param {Event} event
 */
function mobileStickyRenderCallback(event) {
	const { detail: { size = [], isEmpty = false } = {} } = event;
	const ad = document.querySelector('fbs-ad[position="mobile"]');
	if (isEmpty) {
		return;
	}

	if (size[0] !== 7) {
		const footerContainer = document.querySelector('.footer');
		const footerMobileClass = 'footer--mobile';
		const fbsAdMobileClass = 'fbs-ad--mobile';
		const closeButton = document.querySelector(`.${fbsAdMobileClass}-close`);

		if (footerContainer) {
			footerContainer.classList.add(footerMobileClass);
		}

		if (size[1] === 0) {
			handleFluidAd(ad, footerMobileClass, fbsAdMobileClass, footerContainer, closeButton);
		} else {
			handleNormalAd(ad, footerMobileClass, fbsAdMobileClass, footerContainer, closeButton);
		}
	} else if (size[0] === 7) {
		const adWrapper = document.querySelector('.fbs-ad--top-wrapper');
		if (adWrapper) {
			adWrapper.classList.add('fbs-ad--top-wrapper--takeover');
		}
	}
}

/**
 * Handles logic for moreon ad onRender event
 * @param {Object} event The render event object
 */
const moreonAdRenderCallback = (event) => {
	const { detail = {} } = event || {};

	if (!Object.keys(detail || {}).length) {
		return;
	}

	const ad = document.getElementById(`${detail.slot.getSlotElementId()}`);
	const wrapper = ad.closest('.fbs-ad--moreon-wrapper');

	if (wrapper) {
		wrapper.classList[isBlockedAd(detail.size) ? 'add' : 'remove']('blocked-ad');
	}
};

/**
 * Maps ad positions to their render callback
 */
const renderCallbackMap = {
	top: topAdRenderCallback,
	'spon-logo': sponLogoRenderCallback,
	mobile: mobileStickyRenderCallback,
	'mobile-sticky': mobileStickyRenderCallback,
	moreon: moreonAdRenderCallback,
};

/**
 * Adds render listener to ads that have render event callbacks
 * @param {FbsAd} ad
 * @param {string} position
 */
function addRenderEventCallback(ad, position) {
	if (renderCallbackMap[position] && ad) {
		ad.addEventListener('render', renderCallbackMap[position]);
	}
}

/**
 * Corrects the config the Recx ad should be called with
 * @todo: This changes the zone when a new article is inserted or a new recx loads in.
 * @todo: This really needs cleaned up for readability and complexity reasons - The flow is unclear
 * @param {number} articleIndex current article location in the stream
 */
export function changeAdConfig(articleIndex = 0) {
	/* eslint-disable-next-line no-underscore-dangle */
	window.fbsads._config.ad_unit_path = adConfig.get(`${articleIndex}`);
}

/**
 * Adds a config to the ad config array whenever a new one is found
 * @param {number} streamIndex current stream index
 * @param {string} config the ad config of the article
 */
export function addNewConfig(streamIndex = 0, config = '') {
	if (config !== '') {
		adConfig.set(`${streamIndex}`, config);
	}
}

/**
 * Injects all ads of a type into the page.
 * You can optionally pass in a context.
 * @param {String} position The ad position name.
 * @param {Object} [context]  Optional DOM node to narrow scope.
 * @param {String} customAdId ID to pass to component child
 */
export function insertAd(position, context = document, customAdId) {
	const { classList } = context;
	const isArticleAdRail = classList && classList.contains('ad-rail');
	const wrapperName = isArticleAdRail ? customAdId : position;
	const wrappers = context.querySelectorAll(`.fbs-ad--${wrapperName}-wrapper`);

	for (let i = 0; i < wrappers.length; i++) {
		const ad = document.createElement('fbs-ad');

		['progressive', 'batched'].forEach((type) => {
			if (wrappers[i].classList.contains(`fbs-ad--${type}`)) {
				ad.setAttribute(type, true);
			}
		});

		// Give ads that are already in view a chance to load before displaying
		// Batched ad calls will be handled by their respective pages
		// @TODO remove this logic and possibly just use bootstrapProgressiveAds
		if (ad.getAttribute('progressive') && !ad.getAttribute('batched')) {
			setTimeout(() => {
				insertProgressiveAd(ad);
			}, 100);
		}

		ad.setAttribute('position', position);

		if (wrappers[i].dataset.customTargeting) {
			ad.setAttribute('custom-targeting', wrappers[i].dataset.customTargeting);
		}

		if (customAdId) {
			ad.setAttribute('ad-id', customAdId);
		}

		addTabindex(ad, position);
		// Add aria-hidden attribute to the wrapper - Accessibility
		if (!position === 'ntv-home' && !position === 'ntv-deskchannel') {
			if (!wrappers[i].hasAttribute('aria-hidden')) {
				wrappers[i].setAttribute('aria-hidden', 'true');
				wrappers[i].setAttribute('role', 'presentation');
			}
		}

		addRenderEventCallback(ad, position);

		wrappers[i].appendChild(ad);
	}
}

// @TODO we should just have the ads component render in the template on pug instead of using JS to insert each ad
// inside divs with certain class names.
function init() {
	// TODO: This will go away somehow
	// still want add the mobile ad logic for mobile preview
	if (isMobile || window.location.pathname.indexOf('preview/mobile') > -1) {
		const forceStickyAdTemplateTypes = [
			'topline',
			'standard',
			'live',
		];

		// this is mainly for AMP Plus, when landing on an AMP Plus article with a relativeVideo,
		// we cannot insert a sticky ad at the bottom of the article. Super specific use case but
		// I don't know where else to put it. **shrug**.
		// Also, for adExperiences' we need to not init the ad on the first article.

		if ((!relativeVideo || forceStickyAdTemplateTypes.includes(tracking.templateType)) && adExperience !== 'none') {
			insertAd('mobile', document, 'mobile-sticky');
		}
		insertAd('mobilex');
		insertAd('mobilerec');
		insertAd('ntv-mobhome');
		insertAd('mobsearch');
		insertAd('qotd-mob');
		if (userGaveFullConsent()) {
			insertMedianet('mobile-medianet');
		}
	} else {
		insertAd('text');
		insertAd('ntv-home');
		insertAd('bottom');
		insertAd('qotd');
		insertMedianet('body-medianet');

		const topAd = document.querySelector('fbs-ad[position="top"]');
		if (topAd) {
			addRenderEventCallback(topAd, 'top');
		}
	}

	const sponLogo = document.querySelector('fbs-ad[position="spon-logo"]');
	if (sponLogo) {
		addRenderEventCallback(sponLogo, 'spon-logo');
	}

	const moreonAd = document.querySelector('fbs-ad[position="moreon"]');
	if (moreonAd) {
		addRenderEventCallback(moreonAd, 'moreon');
	}
}

const initAdsObservable = new Observable();
initAdsObservable.subscribe(init);

if (!retracted) {
	if ((adZone || '').startsWith('article')) {
		runAfterMeterVerified([initAdsObservable]);
	}
	initAdsObservable.notify();
	/**
	 * Comment out the init() and uncomment below for locally testing the hero ad.
	 */
	// setTimeout(() => {
	// 	const iframe = document.createElement('iframe');
	// 	iframe.src = 'http://fbs.forbes.com/hero-ad/';
	// 	const adWrapper = document.querySelector('.fbs-ad--top-wrapper');
	// 	adWrapper.classList.add('fbs-ad--top-wrapper--takeover');
	// 	adWrapper.append(iframe);
	// }, 1000);
}

document.addEventListener('fbs-ad-render', (event) => {
	const { detail } = event;
	const adId = detail.slot.getSlotElementId();

	if (adId === 'mobile-sticky') {
		mobileStickyRenderCallback(event);
	}
});
