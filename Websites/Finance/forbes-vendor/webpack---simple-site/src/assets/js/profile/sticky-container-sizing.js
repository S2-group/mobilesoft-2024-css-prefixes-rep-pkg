import throttle from '../shared/throttle';

let stickWrappers;
let minHeight;
let firstStickyWrapper;
let secondStickyWrapper;
let streamStart;
let streamArticleAd;
let teamsProfile;

/**
* Sets the height for the first sticky ad's wrapper
*/
const setFirstContainerHeight = () => {
	if (!teamsProfile) {
		minHeight = streamStart.getBoundingClientRect().top - firstStickyWrapper.getBoundingClientRect().top;
	} else {
		minHeight = streamArticleAd.getBoundingClientRect().bottom - firstStickyWrapper.getBoundingClientRect().top;
	}
	firstStickyWrapper.setAttribute('style', `min-height: ${minHeight}px`);
};

/**
 * Sets the height for the second sticky ad's wrapper
 */
const setSecondContainerHeight = () => {
	if (!teamsProfile && secondStickyWrapper) {
		minHeight = streamArticleAd.getBoundingClientRect().bottom - streamStart.getBoundingClientRect().top;
		secondStickyWrapper.setAttribute('style', `min-height: ${minHeight + 3}px`);
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const profileStickyContainer = document.querySelector('.profile-sidebar__sticky-container');
	const subNav = document.querySelector('.container__subnav--outer');
	let stickyTopOffset = 70;

	streamStart = document.querySelector('.profile-news');
	streamArticleAd = document.querySelector('.fbs-ad--moreon-wrapper, .fbs-ad--mobile-medianet-wrapper');
	stickWrappers = document.querySelectorAll('.fbs-ad--recx--sticky');

	if (subNav) {
		stickyTopOffset += subNav.clientHeight;
	}

	if (profileStickyContainer) {
		profileStickyContainer.style.setProperty('--stickyTopOffset', `${stickyTopOffset}px`);
	}

	teamsProfile = document.querySelector('.team-valuations');
	firstStickyWrapper = stickWrappers[0];
	secondStickyWrapper = stickWrappers[1];

	if (firstStickyWrapper || secondStickyWrapper) {
		window.addEventListener('scroll', throttle(setFirstContainerHeight, 100));
		window.addEventListener('scroll', throttle(setSecondContainerHeight, 100));
	}

	if (stickWrappers.length) {
		setFirstContainerHeight();
	}

	if (streamArticleAd) {
		setSecondContainerHeight();
	}
});
