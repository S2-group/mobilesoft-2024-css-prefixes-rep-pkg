import { zephr } from '@forbes/fbs-tracking';
import { isMobile, isTablet } from './is-mobile';
import { adObservable } from './adInsertion';
import {
	channelName,
	channelColor,
	isProd,
	listLander,
	premiumPage,
} from './clientConfigService';
import { handleEnterClick } from './keyboardUtils';
import Observable from './Observable';
import './globalHeader';
import { getIsNewsletterPage } from './trackingUtils';
import { getNewsLetterSubscriptionsComponent } from '../../../shared/newsLetterSubscriptions';

const svgs = require('@forbes/fbs-icons/dist/index');

const userDataObservable = new Observable();
const scrollbarWidth = window.innerWidth - document.body.clientWidth;
const headerDivider = document.querySelectorAll('.header__divider');

/**
* Applies channel color to header.
* @param {Object} headerChannelItems querySelector of header items.
*/
function applyColor(headerChannelItems) {
	if ((headerChannelItems || []).length) {
		headerChannelItems.forEach((channel) => {
			if (channel.querySelector('.header__title').innerText === channelName) {
				channel.classList.add('header__current');
			}
		});
	}
}

/**
 * log out a user
 * @param {function} callback check if article has openWeb modal or not
 */
function handleSignOut(callback) {
	zephr.logout(callback);
}

document.addEventListener('fbs-zephr-init', (e) => {
	console.log('fbs-zephr-init returned! Proxying temporarily...', e.detail);
	document.dispatchEvent(new CustomEvent('fbs-piano-init'));
});

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const headerNav = document.querySelector('.header__nav');
	const hamburgerIcon = header.querySelector('.icon--hamburger');
	const exploreText = header.querySelector('.explore-text');
	const closeIcon = header.querySelector('.icon--close');
	const headerNavOpenClass = 'header__nav--is-open';
	const headerNavCloseClass = 'header__nav--is-closed';
	const loginButton = header.querySelector('.login');
	const channelLiElements = [...document.querySelectorAll('.header__channel')];
	const sectionLiElements = [...document.querySelectorAll('.header__section')];
	const headerSubnavElements = [...document.querySelectorAll('.header__subnav')];
	const channelAnchorSpanElements = [...document.querySelectorAll('.header__title')];
	const loginMenu = header.querySelector('.login__menu');
	const subscribeButton = header.querySelector('.subscribe');
	let hasRetrievedUserStatus = false;
	let dropDownDivider;

	const subscribeToNewsletterWrapper = document.querySelector('.global-header__subscribe_to_newsletters');

	const subnav = document.querySelector('.header__subnav');

	const searchIcon = header.querySelector('.icon--search');
	const lastChannel = document.querySelector('.header__channels')?.lastChild;

	const headerChannelLinkOpen = 'header__channel--is-open';
	const headerChannelLinkClose = 'header__channel--is-closed';

	const body = document.querySelector('body');
	const bodyPreventScrolling = 'body__prevent-scrolling';
	let scrollPosition;

	const { showOpenWeb } = window.forbes['simple-site'];

	loginButton.addEventListener('click', () => {
		zephr.showLogin();
	});

	subscribeButton.addEventListener('click', () => {
		try {
			window.fbq('track', 'InitiateCheckout');
			window.gtag('event', 'conversion', {
				send_to: 'AW-10801493403/xbiFCIeOwZkYEJvrxp4o',
			});
		} catch (err) {
			console.error('Error loading pixels');
		}
	});

	/**
	 * Hydrates newsletter subscription UI so tracking calls can work
	 */
	function hydrateNewsLetterSubscriptionComponent() {
		if (subscribeToNewsletterWrapper) {
			getNewsLetterSubscriptionsComponent().hydrate(subscribeToNewsletterWrapper);
		}
	}

	/**
	 * Builds the sign in span
	 * @returns {HTMLElement} dropdown to append content
	*/
	function buildDropdownElement() {
		const dropdown = document.createElement('span');
		dropdown.classList.add('loggedin-dropdown', 'signed-in');
		dropdown.innerHTML = `<span class="login-icon ${window.getComputedStyle(searchIcon).display === 'none' ? '' : 'justify-with-search'}">${svgs.avatar}</span>`;
		return dropdown;
	}

	/**
	 * Builds greeting span for login menu to append dropdown content
	 * @param {String} userFirstName User's name from zephr (if available)
	 * @returns {HTMLElement} dropdown to append content
	*/
	function buildGreetingElement(userFirstName) {
		const addressSpan = document.createElement('span');
		addressSpan.classList.add('greeting-text');
		addressSpan.textContent = ` Hello${userFirstName ? `, ${userFirstName}` : '!'}`;
		return addressSpan;
	}

	/**
	 * Builds premium member span for login menu to append dropdown content
	 * @returns {HTMLElement} dropdown to append content
	*/
	function buildPremiumMemberElement() {
		const addressSpan = document.createElement('span');
		addressSpan.classList.add('premium-member-text');
		addressSpan.textContent = 'PREMIUM MEMBER';

		return addressSpan;
	}

	/**
	 * Builds a div with a class name to be inserted into the header dropdown element
	 * @param {String} className The class name we want to add to the new div
	 * @returns {HTMLElement} a div to be inserted into the dropdown menu
	 */
	function buildHeaderDiv(className = '') {
		const headerDiv = document.createElement('div');
		headerDiv.classList.add(className);
		return headerDiv;
	}

	/**
	 * Builds signout button for login menu
	 * @returns {HTMLElement} signoutButton
	*/
	function buildSignoutButton() {
		const signoutContainer = document.createElement('div');
		signoutContainer.classList.add('signout-container');

		const signoutButton = document.createElement('button');
		signoutButton.classList.add('signout-button');
		signoutButton.innerText = 'Sign Out';

		signoutContainer.appendChild(signoutButton);
		return signoutContainer;
	}

	/**
	 * Builds new link buttons for login menu
	 * @param {String} newLinkButtonName string passed to create href, innerText, and className
	 * @returns {HTMLElement} helpButton
	*/
	function buildLinkButton(newLinkButtonName) {
		const newLinkButton = document.createElement('a');
		newLinkButton.classList.add(`${newLinkButtonName}-button`);
		newLinkButton.href = `https://${isProd ? '' : 'staging-'}account.forbes.com/${newLinkButtonName}`;
		newLinkButton.target = '_blank';
		newLinkButton.rel = 'noopener noreferrer';

		// profile and contact preferences buttons differ from routes/classNames
		if (newLinkButtonName === 'account') {
			newLinkButton.innerText = 'Account';
			newLinkButton.href = `https://${isProd ? '' : 'staging-'}account.forbes.com/profile`;
		} else if (newLinkButtonName === 'profile') {
			newLinkButton.innerText = 'Profile';
			newLinkButton.href = `https://${isProd ? '' : 'staging-'}account.forbes.com/${newLinkButtonName}/list`;
		} else if (newLinkButtonName === 'preferences') {
			newLinkButton.innerText = 'Preferences';
			newLinkButton.href = `https://${isProd ? '' : 'staging-'}account.forbes.com/profile`;
		} else if (newLinkButtonName === 'for-you') {
			newLinkButton.innerText = 'MyForbes';
		} else {
			newLinkButton.innerText = `${newLinkButtonName.replace(/-/g, ' ').replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())}`;
		}

		return newLinkButton;
	}

	/**
	 * Toggles dropdown menu open and closed
	 * @param {HTMLElement} dropdownContent The dropdown content that is displayed/hidden on toggle
	*/
	function toggleDropdown(dropdownContent) {
		dropdownContent.classList.toggle('show');
		document.querySelector('.loggedin__border')?.classList.toggle('show');
		if ((isMobile) || (isTablet)) {
			headerNav?.classList.remove(headerNavOpenClass);
			headerNav?.classList.add(headerNavCloseClass);
		}
	}

	/**
	 * handle sign out button functionality
	 * @param {String} signoutButton sign out button
	*/
	function signOutButtonClick(signoutButton) {
		signoutButton.addEventListener('click', () => {
			handleSignOut(() => {
				// handel sign out if there is an open web modal on the page.
				if (showOpenWeb) {
					window.SPOTIM.logout();
				}
			});
			// TODO: After UEM-470 is out and approved by David
			// set this cookie with expiration before you reload the page.
			// var d = new Date(); d.setTime(d.getTime() + 5 * 1000);
			// expires 5 seconds from now
			// document.cookie = "lastPagePath={{Page Path}};" + " expires=" + d.toUTCString() + "; path=/";
		});
	}

	/**
	 * Renders login menu with dropdown and functionality if user is logged in
	 * @param {String} userFirstName Comes from stored zephr custom fields object
	*/
	function renderLoginMenu(userFirstName = '') {
		const dropdown = buildDropdownElement();

		const greetingBlock = buildHeaderDiv('greeting-block');
		const greeting = buildGreetingElement(userFirstName);
		const dropdownContent = buildHeaderDiv('dropdown-content');
		const loggedInBorder = buildHeaderDiv('loggedin__border');

		const signoutButton = buildSignoutButton();

		const containerLogIn = document.querySelector('.header__right');
		containerLogIn?.classList.add('isLogged-in');

		loginMenu.appendChild(dropdown);
		dropdown.appendChild(dropdownContent);
		dropdown.appendChild(loggedInBorder);

		greetingBlock.appendChild(greeting);
		dropdownContent.appendChild(greetingBlock);

		if (!zephr.shouldHideForbesServices()) {
			const forYouButton = buildLinkButton('for-you');
			const preferencesButton = buildLinkButton('preferences');
			dropdownContent.appendChild(forYouButton);
			dropdownContent.appendChild(preferencesButton);
		} else {
			const accountButton = buildLinkButton('account');
			dropdownContent.appendChild(accountButton);
		}

		if (zephr.shouldShowListProfile()) {
			const profileButton = buildLinkButton('profile');
			dropdownContent.appendChild(profileButton);
		}

		dropdownContent.appendChild(signoutButton);

		dropdown.addEventListener('click', () => {
			toggleDropdown(dropdownContent);
		});

		signOutButtonClick(signoutButton);
	}

	function renderMembershipLabels() {
		const greetingBlock = document.getElementsByClassName('greeting-block')[0];

		if (zephr.doesUserHaveProduct(zephr.unlimitedSubscriptionProducts)) {
			const premiumLabel = buildPremiumMemberElement();
			greetingBlock.prepend(premiumLabel);
		}

		const shouldShowBtn = !getIsNewsletterPage()
			&& !zephr.doesUserHaveProduct(zephr.unlimitedSubscriptionProducts)
			&& !zephr.doesUserHaveProduct(zephr.clientSubscriptionProducts);
		if (shouldShowBtn) {
			subscribeButton?.classList.add('show');
		} else {
			subscribeButton?.classList.remove('show');
		}
	}

	/**
	 * Hides the dropdown menu when ever we click anywhere else on the page
	 * @param {Object} event THe event that fired the onClick on the document
	 */
	function hideDropdownMenu(event) {
		const loginMenuNode = document.querySelector('.login__menu');

		if (loginMenuNode && !loginMenuNode.contains(event.target)) {
			const dropdownMenu = document.querySelector('.dropdown-content');
			const loggedInBorder = document.querySelector('.loggedin__border');

			if (dropdownMenu) {
				dropdownMenu.classList.remove('show');
				loggedInBorder?.classList.remove('show');
			}
		}
	}

	/**
	 * Hides or shows the sign-in button
	 * @param {boolean} visible true to show, false to hide
	 */
	function toggleLoginButton(visible) {
		[loginButton, loginButton.parentElement].forEach((element) => {
			if (visible) {
				if (window.getComputedStyle(searchIcon).display === 'none') {
					loginMenu.classList.add('login-button-margin');
				}
				element.classList.remove('hidden');
			} else {
				loginMenu.classList.remove('login-button-margin');
				element.classList.add('hidden');
			}
		});
	}

	/**
	 * Updates UI to show buttons for a non-authenticated user
	*/
	const displayBtnsForSignedOutState = () => {
		const loggedInNode = document.querySelector('.loggedin-dropdown');
		// paranoid check to ensure .loggedin-dropdown does not render after having been created in renderLoginMenu
		if (loggedInNode) {
			loggedInNode.parentNode.removeChild(loggedInNode);
		}
		renderMembershipLabels();
		toggleLoginButton(true);
	};

	document.addEventListener('fbs-zephr-init', (e) => {
		hasRetrievedUserStatus = true;
		const zephrData = e.detail;
		userDataObservable.notify(zephrData?.user);
		if (zephrData?.user) {
			renderLoginMenu(zephrData.user['first-name']);
			toggleLoginButton(false);
		} else {
			displayBtnsForSignedOutState();
		}

		dropDownDivider = document.querySelector('.loggedin__border');
		document.addEventListener('click', hideDropdownMenu);
	});

	const listener = () => {
		document.removeEventListener('zephr.browserDecisionsFinished', listener);
		renderMembershipLabels();
	};
	document.addEventListener('zephr.browserDecisionsFinished', listener);

	setTimeout(() => {
		if (!hasRetrievedUserStatus) {
			displayBtnsForSignedOutState();
			userDataObservable.notify(window.Zephr?.user || {});
		}
	}, 5000);

	function handleDropDownDivider() {
		if (dropDownDivider) {
			dropDownDivider.classList.toggle('hidden');
		}
	}

	function handleOpenHamburger() {
		handleDropDownDivider();
		headerNav?.classList.remove(headerNavCloseClass);
		headerNav?.classList.add(headerNavOpenClass);
		body.classList.add(bodyPreventScrolling);
		if (window.innerWidth > 1025) {
			const haFullAd = document.querySelector('.ha__main');
			const haRibbon = document.querySelector('.ha__ribbon');
			headerDivider.forEach((devider) => {
				devider.style.width = `calc(-${scrollbarWidth}px + 100%)`;
			});
			body.style.paddingRight = `${scrollbarWidth}px`;
			header.style.width = `calc(-${scrollbarWidth}px + 100%)`;
			if (haRibbon) haRibbon.style.marginRight = `${scrollbarWidth}px`;
			if (haFullAd) haFullAd.style.marginRight = `${scrollbarWidth}px`;
		}
		scrollPosition = window.pageYOffset;
	}

	if (hamburgerIcon) {
		hamburgerIcon.addEventListener('click', () => {
			handleOpenHamburger();
		});

		handleEnterClick(hamburgerIcon, handleOpenHamburger);
	}

	if (exploreText) {
		exploreText.addEventListener('click', () => {
			handleOpenHamburger();
		});
	}

	function handleCloseIcon() {
		handleDropDownDivider();
		const haFullAd = document.querySelector('.ha__main');
		const haRibbon = document.querySelector('.ha__ribbon');
		headerNav?.classList.remove(headerNavOpenClass);
		headerNav?.classList.add(headerNavCloseClass);
		body.classList.remove(bodyPreventScrolling);
		if (window.innerWidth > 1025) {
			body.style.removeProperty('padding-right');
			header.style.removeProperty('width');
			if (haRibbon) haRibbon.style.removeProperty('margin-right');
			if (haFullAd) haFullAd.style.removeProperty('margin-right');
			headerDivider.forEach((devider) => devider.style.removeProperty('width'));
		}
		window.scrollTo(0, scrollPosition);
	}

	if (closeIcon) {
		closeIcon.addEventListener('click', () => {
			handleCloseIcon();
		});

		handleEnterClick(closeIcon, handleCloseIcon);
	}

	function handleChannelLinkClick(e) {
		const openItem = document.querySelector(`.${headerChannelLinkOpen}`);
		const link = e.target.classList.contains('header__title') ? e.target.parentNode : e.target;
		const isChannel = link.classList.contains('header__channel');

		if (openItem && isChannel && !openItem.isSameNode(link)) {
			openItem.classList.remove(headerChannelLinkOpen);
		}

		if (link.classList.contains(headerChannelLinkOpen)) {
			link.classList.remove(headerChannelLinkOpen);
			link.classList.add(headerChannelLinkClose);
			link.setAttribute('data-ga-track', `U20 - Channel: ${link.dataset.title} - Position ${link.dataset.position} - Channel Expanded`);
			subnav.setAttribute('aria-hidden', 'true');
		} else {
			link.classList.remove(headerChannelLinkClose);

			// hide divider and subnav if there are no section links for channel
			if ([...link.querySelectorAll('.header__section')].length > 1) {
				link.classList.add(headerChannelLinkOpen);
			} else {
				link.classList.add('header__channel--no-sections');
			}

			link.removeAttribute('data-ga-track');
			subnav.setAttribute('aria-hidden', 'false');
		}
	}

	if (isMobile || isTablet) {
		channelLiElements.forEach((link) => {
			// handles tapping channels on mobile
			link.setAttribute('data-ga-track', `U20 - Channel: ${link.dataset.title} - Position ${link.dataset.position} - Channel Expanded`);
			link.addEventListener('click', (e) => {
				handleChannelLinkClick(e);
			});
		});
	} else {
		/**
		 * trigger hover states only on desktop using a class
		 * so that click events don't trigger hover styles on devices
		 */
		channelLiElements.forEach((link) => {
			// hide divider and subnav if there are no section links for channel
			if (link.classList.contains('header__channel')) {
				if ([...link.querySelectorAll('.header__section')].length > 1) {
					link.classList.add('header__hoverable');
				} else {
					link.classList.add('header__channel--no-sections');
				}
			} else {
				link.classList.add('header__hoverable');
			}

			// handles case when user is tabbing and then hovers on different item
			link.addEventListener('mouseenter', () => {
				const openItem = document.querySelector(`.${headerChannelLinkOpen}`);
				if (openItem) {
					openItem.classList.remove(headerChannelLinkOpen);
					document.activeElement.blur();
				}
			});
		});

		sectionLiElements.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				const previouslySelected = document.querySelector('.mouse__enter');
				if (previouslySelected) {
					previouslySelected.classList.remove('mouse__enter');
				}
				link.classList.add('mouse__enter');
			});
		});

		headerSubnavElements.forEach((sub) => {
			sub.addEventListener('mouseleave', () => {
				const previouslySelected = document.querySelector('.mouse__enter');
				if (previouslySelected) {
					previouslySelected.classList.remove('mouse__enter');
				}
			});

			/* handles safari browser problem which is caused by back-forward cache
			we check the persisted property of the onpageshow event
			this property returns true if the page is cached by the browser, and false otherwise
			*/
			window.onpageshow = (event) => {
				if (event.persisted) {
					handleCloseIcon();
				}
			};
		});

		channelAnchorSpanElements.forEach((link) => {
			// handles focus events/tabbing for accessibility on non devices
			link.addEventListener('focus', (e) => {
				handleChannelLinkClick(e);
			});
		});

		if (searchIcon) {
			searchIcon.addEventListener('focus', () => {
				lastChannel?.classList.remove(headerChannelLinkOpen);
			});
		}
	}

	const topAdWrapper = document.querySelector('.fbs-ad--top-wrapper');
	const topAdStickyClass = 'fbs-ad--top-wrapper--sticky';
	const mainContentBodyBlock = document.querySelector('.main-content--body');
	const subnavContainer = document.querySelector('.container__subnav--outer');
	// If subnav exists we assume it is fixed to the top of the viewport right below the main header
	// We use the subnav's bottom position to know where to position the sticky top ad
	const subnavContainerBottomPosition = subnavContainer?.getBoundingClientRect()?.bottom;

	function unstickyAd() {
		mainContentBodyBlock?.classList.remove('main-content__body--animating');
		mainContentBodyBlock.style.paddingTop = 0;
		if (topAdWrapper && !premiumPage) {
			topAdWrapper.classList.remove(topAdStickyClass);
			if (subnavContainer) {
				topAdWrapper.style.top = 'auto';
			}
			topAdWrapper.style.height = 'auto';
		}
	}

	function updateNormalAndFluidAds(height) {
		if (topAdWrapper && !premiumPage && !listLander) {
			mainContentBodyBlock?.classList.add('main-content__body--animating');
			mainContentBodyBlock.style.paddingTop = `${height}px`;
			topAdWrapper.classList.add(topAdStickyClass);
			if (subnavContainer) {
				topAdWrapper.style.top = `${subnavContainerBottomPosition}px`;
			}

			topAdWrapper.style.height = `${height}px`;
		}
	}

	const takeOverAdHeight = 7;
	let firstRun = true;

	function updateAdHeight(params) {
		const {
			height,
			isFluidAd,
			size = [],
		} = params;

		const parentElementId = topAdWrapper.parentElement.id;
		const isNotSticky = topAdWrapper?.classList.contains('fbs-ad--top-wrapper--dont-stick');

		if (!parentElementId.match(/article-container-\d+/)) {
			if (height !== takeOverAdHeight && firstRun && size[0] !== takeOverAdHeight) {
				firstRun = false;
				const newHeight = isFluidAd ? height : height + 20;

				if (isNotSticky) {
					topAdWrapper.style.height = `${newHeight}px`;
					setTimeout(() => {
						topAdWrapper.style.height = 'auto';
					}, 5000);
				} else {
					updateNormalAndFluidAds(newHeight);
					setTimeout(() => {
						unstickyAd();
					}, 5000);
				}
			}
		}
	}
	adObservable.subscribe(updateAdHeight);

	if (isMobile) {
		mainContentBodyBlock.style.paddingTop = 0;
	} else if (topAdWrapper && !premiumPage) {
		topAdWrapper.classList.add('fbs-ad--top-wrapper--desktop');
	}

	/**
	 * Highlight current channel color and removes color on hover and re-applies it on hover out.
	 */
	function handleHeaderHighlight() {
		if (!(channelName && channelColor)) {
			return;
		}

		const headerChannelItems = document.querySelectorAll('.header__channels .header__channel');

		headerChannelItems.forEach((channel) => {
			channel.addEventListener('mouseover', () => {
				const headerCurrentElement = document.querySelector('.header__current');
				if (headerCurrentElement) {
					headerCurrentElement.classList.remove('header__current');
				}
			});
			channel.addEventListener('mouseout', () => applyColor(headerChannelItems));
		});

		applyColor(headerChannelItems);
	}

	handleHeaderHighlight();
	hydrateNewsLetterSubscriptionComponent();
});

export {
	userDataObservable,
	applyColor,
	handleSignOut,
};
