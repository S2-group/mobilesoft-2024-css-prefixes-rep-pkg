import multiclamp from '@forbesmedia/multiclamp';
import carouselNavigateByDots from '../profile/carousel-navigate';
import { updateElementClass } from './domUtilities';
import { isMobile } from './is-mobile';

/**
 * Display the left carousel arrow button.
 * @param {Object} The DOM elements.
 */
const showLeftCarouselArrow = (elem) => {
	const element = elem.querySelector('.fbs-slider__control-left');
	updateElementClass(element, 'fbs-slider__control--hidden', 'remove');
};

/**
 * Truncate the article titles to 2 lines.
 * @param {Object} The DOM elements.
 * @param {string} The element class name.
 */
const truncateCarouselTitles = (elem, className) => {
	const titles = [...elem.querySelectorAll(className)];
	titles.forEach((title) => { multiclamp(title, 2, false); });
};

/**
 * Calculate index based on event slide
 * @param {HTMLElement} domElement, used to track event listener
 * @param {Array} dots, used to remove active slide class from array
 */
const eventCalculate = (domElement, dots) => {
	domElement.addEventListener('slideChanged', (event) => {
		dots.forEach((dot) => {
			dot.classList.remove('active');
		});

		const indexOffSet = Math.ceil((event.detail.currentSlide.scope.index));
		dots[indexOffSet].classList.add('active');
	});
};

/**
 * add navigation system to navigate by clicking on the dots
 * @param {Object} element carousel dots
 * @param {Array} carousel Large Product Carousel
 */
function carouselNavigator(element, carousel, isVetted = false) {
	if (isMobile || !isVetted) {
		element[0]?.classList.add('active');
	} else {
		element[1]?.classList.add('active');
	}
	carouselNavigateByDots(element, carousel, isVetted);
}

/**
 * Adds a slideChanged event listener to a carousel
 * @param Object carousel the carousel to add the listner to
 * @param Object carouselDots
 * @param Object carouselDotsTabs
 * @param Object isVetted is it a vetted carousel
 */
function addSlideChangedListener(carousel, carouselDots, carouselDotsTabs, isVetted = false) {
	carousel.addEventListener('slideChanged', (event) => {
		carouselDots.forEach((dot) => {
			dot.classList.remove('active');
		});

		carouselDotsTabs.forEach((dot) => {
			dot.classList.remove('active');
		});

		const indexOffSet = event.detail.currentSlide.scope.position;
		carouselDots[indexOffSet].classList.add('active');
	});
	carouselNavigator(carouselDots, carousel, isVetted);
}

/**
 * Adds the on click event listeners for the slides in the carousel
 * @param {Boolean} isPrevSlide boolean to check wether the slide is on the left side of the carousel or the right
 * @param {HTMLElement} slide the slide to add the event listener to
 */
function handleSlideClickability(isPrevSlide, slide, nextCarouselSlide, prevCarouselSlide) {
	const isClickable = slide.getAttribute('clickable');
	if (isClickable) {
		slide.removeEventListener('click', isClickable === 'left' ? prevCarouselSlide : nextCarouselSlide);
	}

	slide.setAttribute('clickable', isPrevSlide ? 'left' : 'right');
	slide.addEventListener('click', isPrevSlide ? prevCarouselSlide : nextCarouselSlide);
}

/**
 * check if the slide contain slide class
 * @param {Object} slide the slide to check
 * @param {String} slideClass a class to target
 * @returns {Boolean} true if The slide contain slide class
 */
function checkContainSlideClass(slide, slideClass) {
	return slide?.classList.contains(slideClass);
}

/**
 * remove click event from clickable slide
 * @param {Object} slide the slide to check
 * @param {Object} prevCarouselSlide the prevous slide
 * @param {Object} nextCarouselSlide the next slide
 */
function removeSlideListener(slide, prevCarouselSlide, nextCarouselSlide) {
	const isClickable = slide.getAttribute('clickable');
	if (isClickable) {
		slide.removeEventListener('click', isClickable === 'left' ? prevCarouselSlide : nextCarouselSlide);
	}
}

/**
 * Loops through the carousel slides and updates the on click event listeners for each of them
 * @param {Object} slider object containing events for nextSLide and prevSlide
 * @param {Object} slides the slides to setup clickability for
 * @param {string} slideClass a class to target, where if a slide contains this class, it should be made not clickable
 */
function setUpSlideClickability(slider, slides, slideClass) {
	if (!slider || !slides) {
		return;
	}
	// renders the next slide in the carousel when we click any carousel slide sitting on the right side
	const nextCarouselSlide = slider.nextSlide;

	// renders the previous slide in the carousel when we click any carousel slide sitting on the left side
	const prevCarouselSlide = slider.prevSlide;

	let isPrevSlide = true;

	slides.forEach((slide) => {
		if (checkContainSlideClass(slide, slideClass)) {
			removeSlideListener(slide, prevCarouselSlide, nextCarouselSlide);
			isPrevSlide = false;
		} else {
			handleSlideClickability(isPrevSlide, slide, nextCarouselSlide, prevCarouselSlide);
		}
	});
}

/**
 * Apply proper classes to slides in order to trigger animations before slide transition
 * @param {Object} classControls object function is used to apply the proper classes
 * @param {string} direction the direction of carousel slide movement
 */
function mostPopularCarouselSlide(classControls, direction) {
	const classControl = classControls();
	const second = 'most-popular-slide--second';
	const third = 'most-popular-slide--third';
	classControl.secondSlide.classList.remove(second);
	classControl.thirdSlide.classList.remove(third);

	if (direction === 'right') {
		classControl.thirdSlide.classList.add(second);
		classControl.offScreenSlide.classList.add(third);
	} else {
		classControl.firstSlide.classList.add(second);
		classControl.secondSlide.classList.add(third);
	}
}

export {
	addSlideChangedListener,
	checkContainSlideClass,
	removeSlideListener,
	setUpSlideClickability,
	showLeftCarouselArrow,
	truncateCarouselTitles,
	eventCalculate,
	mostPopularCarouselSlide,
};
