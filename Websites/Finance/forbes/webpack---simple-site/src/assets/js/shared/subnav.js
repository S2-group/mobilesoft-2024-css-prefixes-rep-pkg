import { serverData } from './clientConfigService';
import { isMobile } from './is-mobile';
import { fireGAEvent } from './tracking';
import hydrateFdaSubnav from './fdaSubnav';

const docWindow = window.forbes['simple-site'];
const isNewsletter = docWindow.isNewsletter;
const overlay = document.querySelector('.overlay__subnav');
const subnav = document.querySelector('.container__subnav--inner');
const subnavOuter = document.querySelector('.container__subnav--outer');
const subnavMenuItem = document.querySelectorAll('.subnav__item');
const dropdownItem = document.querySelectorAll('.subnav__dropdown-item');
const subnavMobileMenuItem = document.querySelectorAll('.mobile-subnav-menu');
const subnavDesktopMenuItem = document.querySelectorAll('.desktop-subnav-menu');
const isArticlePage = document.querySelector('.article-header');
const mobileActive = 'mobile-active';
const desktopActive = 'desktop-active';
let subnavItemSelected = '';

/** Closes all active menus on resize */
const closeAllActiveMenus = () => {
	const activeMenus = document.querySelectorAll('.mobile-active');
	if ((activeMenus || []).length > 0) {
		if (overlay?.classList.contains('overlay__subnav--show')) {
			overlay.classList.remove('overlay__subnav--show');
		}
		activeMenus.forEach((menu) => menu.classList.remove(mobileActive));
	}
};

/**
 * Fires GA event when main subnav item is clicked
 * @param {number} [position=0] subnav position
 * @param {string} [trigger=''] subnav item
 * @param {string} [dropdownOption=''] subnav item dropdown option
 */
const fireGAEventOnSubnav = (position = 0, trigger = '', dropdownOption = '') => {
	const isVetted = docWindow.isVetted || docWindow.tracking.primaryChannel === 'Shopping' || docWindow.isForbesFinds;
	const hoverItem = dropdownOption ? ` - ${dropdownOption}` : '';

	let subEventLabel;
	if (isNewsletter) {
		subEventLabel = 'Investing Newsletter Nav';
	} else if (isVetted) {
		subEventLabel = 'Vetted Nav - Position';
	} else {
		subEventLabel = 'Insights Nav - Position';
	}
	const GAData = {
		eventCategory: 'Template Area Interaction',
		eventAction: 'click',
		eventLabel: `${subEventLabel} ${position} - ${trigger}${hoverItem}`,
	};

	fireGAEvent(GAData);
};

/**
 * Underlines and sets active state to subnav item
 * @param {NodeListOf<Element>} [subNavItem=[]] node list of ul
 * @param {MouseEvent} [event={}] type to listen for
 * @param {string} [viewport=''] - current viewport
 */
function highlightSubnavMenuButton(subNavItem = [], event = {}, viewport = '') {
	subNavItem.forEach((menu) => {
		// Condition to show the targeted dropdown menu and keep the others hidden.
		if (event.target.dataset.dropdownmenu === menu.id) {
			if (subnavItemSelected === event.target.textContent) {
				overlay?.classList.remove('overlay__subnav--show');
			} else {
				overlay?.classList.add('overlay__subnav--show');
				subnavItemSelected = event.target.textContent;
			}
			fireGAEventOnSubnav(event.target.dataset.menuItemPosition, subnavItemSelected);
			menu.classList.toggle(viewport);
		} else {
			menu.classList.remove(viewport);
		}
	});
}

/**
 * Closes menu on outside click
 * @param {MouseEvent} [event={}] type to listen for
 */
function outsideClick(event = {}) {
	if (subnav && event.target !== subnav && !subnav.contains(event.target)) {
		overlay?.classList.remove('overlay__subnav--show');
		subnavMobileMenuItem.forEach((menu) => menu.classList.remove(mobileActive));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	// to check if the subnav in chansec or article
	const streamIndex = (serverData || {}).tracking.streamPosition;
	if (isArticlePage && isMobile && subnavOuter && streamIndex === 0 && isNewsletter) {
		subnavOuter.style.position = 'sticky';
	}
	// this is needed to handel a very corner case for MacOs not taking the margin Properly
	const checkMacOs = navigator.platform.indexOf('Mac') !== -1;
	if (checkMacOs) {
		const freeNewsletter = document.querySelector('.free-newsletter-spacing');
		if ((freeNewsletter || {}).classList) {
			freeNewsletter.classList.add('mac-spacing');
		}
	}

	subnavMenuItem.forEach((menu) => menu.addEventListener('click', (event) => {
		highlightSubnavMenuButton(subnavMobileMenuItem, event, mobileActive);
		highlightSubnavMenuButton(subnavDesktopMenuItem, event, desktopActive);
	}, false));

	dropdownItem.forEach((dropdownMenuItem) => {
		dropdownMenuItem.addEventListener('click', (e) => {
			overlay?.classList.remove('overlay__subnav--show');
			fireGAEventOnSubnav(e.target.dataset.dropdownPosition, e.target.dataset.subnavMenuItem, e.target.textContent);
			subnavItemSelected = '';
		});
	});

	window.addEventListener('click', outsideClick, false);
	if (!isMobile) {
		window.addEventListener('resize', closeAllActiveMenus, false);
	}

	hydrateFdaSubnav();
});
