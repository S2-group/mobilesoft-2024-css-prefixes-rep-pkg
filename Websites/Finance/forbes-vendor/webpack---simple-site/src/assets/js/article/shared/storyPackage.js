import { updateElementClass } from '../../shared/domUtilities';
import { showLeftCarouselArrow, truncateCarouselTitles } from '../../shared/carouselUtilities';
import { primeInviewEvent } from '../../shared/tracking';

/**
 * Change to show or hide the article story pacakge navigation bar.
 * @param {HTMLElement} element article container element.
 * @param {String} action action to add or remove classname.
 */
const articleStoryNavHide = (element = {}, action) => {
	const storyNavElement = element.querySelector('.story-package__nav-wrapper');
	updateElementClass(storyNavElement, 'story-package__nav-wrapper--hidden', action);
};

/**
 * Animate arrow button, show/hide story carousel block and update the click tracking attribute value.
 * @param {Object} arrowElement DOM element for arrow button.
 * @param {Object} storyBlockElement DOM element for story carousel.
 */
const toggleNavbarArrow = (arrowElement, storyBlockElement) => {
	updateElementClass(arrowElement, 'story-package__arrow--rotate', 'toggle');

	const topAdContainer = document.querySelector('.top-ad-container');
	if (document.documentElement.scrollTop === 0 && window.dataLayer[0]?.templateType === 'standard' && !(storyBlockElement.classList.contains('story-package__block--visible') && !topAdContainer?.classList.contains('paddingTopAdContainer'))) {
		topAdContainer?.classList.toggle('paddingTopAdContainer');
	} else topAdContainer?.classList.remove('paddingTopAdContainer');

	updateElementClass(storyBlockElement, 'story-package__block--visible', 'toggle');

	const clickValue = storyBlockElement?.classList.contains('story-package__block--visible') ? 'Collapse' : 'Expand';
	arrowElement.setAttribute('data-ga-track', `Story Package Nav - ${clickValue}`);
};

/**
 * Toggle classes and attributes on the expand and collapse element of the mobile story package navbar.
 * @param {HTMLElement} navElement The nav element to toggle classes and attributes on.
 */
const toggleMobileNavbarArrow = (navElement) => {
	if (!navElement) {
		return;
	}

	updateElementClass(navElement, 'story-package__title--expanded', 'toggle');

	const eventType = navElement.classList.contains('story-package__title--expanded') ? 'Collapse' : 'Expand';
	navElement.setAttribute('data-ga-track', `Story Package Nav - ${eventType}`);
};

/**
 * Adds the correct colors to the carousel buttons.
 * @param {HTMLElement} context The element to use as context.
 * @param {Object} embedStyles The syles passed serverside for the dynamic values of the premium article.
 */
const addDynamicStyles = (context = document, storyStyles = {}) => {
	const leftArrow = context.querySelector('.fbs-slider__control-left');
	const rightArrow = context.querySelector('.fbs-slider__control-right');
	const storyDates = context.querySelectorAll('.story-package__block-date');

	if (storyDates.length && storyStyles.carouselDateColor) {
		storyDates.forEach((date) => { date.style.color = storyStyles.carouselDateColor; });
	}

	[leftArrow, rightArrow].forEach((arrow) => {
		if (!arrow) {
			return;
		}

		arrow.style.color = '#FFF';
		arrow.style.backgroundColor = '#33333366';

		arrow.addEventListener('mouseover', () => {
			arrow.style.color = storyStyles.carouselArrowColor;
			arrow.style.backgroundColor = storyStyles.carouselArrowBackground;
		});

		arrow.addEventListener('mouseout', () => {
			arrow.style.color = '#FFF';
			arrow.style.backgroundColor = '#33333366';
		});
	});
};

/**
 * Initialize story package navigation bar for articles.
 * @param {HTMLElement} element article container element.
 * @param {Object} storyPackageDynamicStyles dynamic carousel styling.
 */
const storyPackageNavbarInit = (element = {}, storyPackageDynamicStyles = {}) => {
	const storyNavElement = element.querySelector('.story-package__nav-wrapper');
	const storyCarouselElement = element.querySelector('.story-package__carousel');
	const headerStoryNavElement = element.querySelector('.story-package__header-wrapper');
	const slidesCount = storyNavElement?.querySelector('.fbs-slider__slides')?.childElementCount;

	if (slidesCount <= 4) {
		const sliderWrapper = storyNavElement?.querySelector('.fbs-slider__slides-wrapper');
		sliderWrapper?.classList?.add('fbs-slider__slides-wrapper--small');
	}

	if (!storyNavElement || !storyCarouselElement) {
		return;
	}

	truncateCarouselTitles(storyCarouselElement, '.story-package__block-title');
	addDynamicStyles(storyCarouselElement, storyPackageDynamicStyles);

	storyCarouselElement.addEventListener('slideChangeStart', () => {
		truncateCarouselTitles(storyCarouselElement, '.story-package__block-title');
		showLeftCarouselArrow(storyCarouselElement);
	});

	const arrowElement = element.querySelector('.story-package__arrow');
	const storyBlockElement = element.querySelector('.story-package__carousel-wrapper');
	headerStoryNavElement.addEventListener('click', () => toggleNavbarArrow(arrowElement, storyBlockElement));
	primeInviewEvent(storyNavElement, 'Story Package Nav - In-View');
	const packageStoryNavTitle = element.querySelector('.story-package__title');

	if (packageStoryNavTitle) {
		packageStoryNavTitle.addEventListener('click', (e) => {
			e.stopPropagation();
		});
	}
};

export {
	articleStoryNavHide,
	storyPackageNavbarInit,
	toggleMobileNavbarArrow,
};
