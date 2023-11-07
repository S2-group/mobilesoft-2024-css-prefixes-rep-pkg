import { updateElementClass } from '../../shared/domUtilities';
import { primeInviewEvent } from '../../shared/tracking';

/**
 * Adds the correct colors to the carousel buttons.
 * @param {HTMLElement} context The element to use as context.
 * @param {Object} embedStyles The syles passed serverside for the dynamic values of the premium article.
 */
const updateCarousel = (context = document, carouselStyles = {}) => {
	const leftArrow = context.querySelector('.fbs-slider__control-left');
	const rightArrow = context.querySelector('.fbs-slider__control-right');
	const anchorNavElement = context.querySelector('.anchor-navbar__wrapper');

	[leftArrow, rightArrow].forEach((arrow) => {
		if (!arrow) {
			return;
		}

		arrow.style.color = carouselStyles.navbarArrow;
		arrow.style.backgroundColor = carouselStyles.navbarArrowCircle;

		arrow.addEventListener('mouseover', () => {
			arrow.style.opacity = 0.5;
		});

		arrow.addEventListener('mouseout', () => {
			arrow.style.opacity = 1;
		});
	});

	primeInviewEvent(anchorNavElement, 'Premium Anchor Link - In-View');
};

/**
 * Update to hide or show the nav bar.
 * @param {Element} element The base element.
 * @param {String} action To show or hide action.
 */
const updateAnchorNav = (element = {}, action) => {
	const anchorNavElement = element.querySelector('.anchor-navbar__wrapper');

	if (anchorNavElement) {
		updateElementClass(anchorNavElement, 'anchor-navbar__wrapper--hidden', action);
	}
};

export {
	updateAnchorNav,
	updateCarousel,
};
