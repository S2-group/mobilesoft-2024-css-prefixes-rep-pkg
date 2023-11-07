import { FbsCarouselComponent } from '@forbes/fbs-carousel';
import { fireGAEvent } from './tracking';
import { checkContainSlideClass, removeSlideListener } from './carouselUtilities';

customElements.define('fbs-carousel', FbsCarouselComponent);
document.addEventListener('DOMContentLoaded', () => {
	const featuredSliderClass = '.featured__carousel';
	const currentSlideClass = 'fbs-slider__slide--current';
	const featuredSlider = document.querySelector(featuredSliderClass);
	const featuredBlock = document.querySelector('.featured');

	let currentFocusedSlide;

	if (!featuredSlider || !featuredBlock) {
		return;
	}

	const rightCarouselButton = featuredBlock.querySelector('.fbs-slider__control-right');
	const leftCarouselButton = featuredBlock.querySelector('.fbs-slider__control-left');

	/**
	 * Changes the classes between the previous slide and the current slide to be shown
	 * @param {HTMLElement} nextSlide the next slide that should be focused in the carousel
	 */
	function updateClasses(nextSlide) {
		currentFocusedSlide.domNode.classList.remove(currentSlideClass);
		currentFocusedSlide.domNode.classList.remove('featured__slide--hovered');
		currentFocusedSlide = nextSlide;
		currentFocusedSlide.domNode.classList.add(currentSlideClass);
	}

	// renders the next slide in the carousel when we click any carousel slide sitting on the right side
	const nextCarouselSlide = () => (featuredSlider.nextSlide());

	// renders the previous slide in the carousel when we click any carousel slide sitting on the left side
	const prevCarouselSlide = () => (featuredSlider.prevSlide());

	// Highlights the right/left button whenever we hover over a slide
	function handleButtonHighlight(event) {
		if (!this.classList.contains('primary')) {
			const buttonToHighlight = this.getAttribute('clickable') === 'right' ? rightCarouselButton : leftCarouselButton;
			if (event.type === 'mouseover') {
				buttonToHighlight?.classList.add('fbs-slider__control--highlighted');
			} else {
				buttonToHighlight?.classList.remove('fbs-slider__control--highlighted');
			}
		}
	}

	/**
	 * Handles the on click firing event for the actual slides
	 * @param {Object} e event object
	 */
	function gaEventsHandler(event) {
		const sliderDirection =	event.target.parentElement.parentElement.getAttribute('clickable');

		if (sliderDirection) {
			const GAData = {
				eventAction: 'Click',
				eventLabel: `Featured Block - Carousel ${sliderDirection}`,
			};

			fireGAEvent(GAData);
		}
	}

	/**
	 * Adds the on click event listeners for the slides in the carousel
	 * @param {Boolean} isPrevSlide boolean to check wether the slide is on the left side of the carousel or the right
	 * @param {HTMLElement} slide the slide to add the event listener to
	 */
	function handleSlideClickability(isPrevSlide, slide) {
		const isClickable = slide.getAttribute('clickable');
		if (isClickable) {
			slide.removeEventListener('click', isClickable === 'left' ? prevCarouselSlide : nextCarouselSlide);
			slide.removeEventListener('click', gaEventsHandler);
		}

		slide.setAttribute('clickable', isPrevSlide ? 'left' : 'right');
		slide.addEventListener('click', isPrevSlide ? prevCarouselSlide : nextCarouselSlide);
		slide.addEventListener('click', gaEventsHandler);
		slide.addEventListener('mouseover', handleButtonHighlight);
		slide.addEventListener('mouseout', handleButtonHighlight);
	}

	/**
	 * Loops through the carousel slides and updates the on click event listeners for each of them
	 */
	function setUpSlideClickability() {
		const slides = featuredBlock.querySelectorAll('.fbs-slider__slide');
		let isPrevSlide = true;

		slides.forEach((slide) => {
			if (checkContainSlideClass(slide, currentSlideClass)) {
				removeSlideListener(slide, prevCarouselSlide, nextCarouselSlide);
				isPrevSlide = false;
			} else {
				handleSlideClickability(isPrevSlide, slide);
			}
		});
	}

	// This resets the slides classes, corner case happens when we click the carousel button
	// multiple times in a row, the slide keeps the active class on it, so we have to reset it
	function resetSlidesClasses() {
		featuredBlock.querySelectorAll('.fbs-slider__slide').forEach((slide) => {
			if (!slide.classList.contains('featured__slide--hovered') || (!slide.classList.contains('featured__slide--hovered') && slide.classList.contains('primary'))) {
				slide.classList.remove('featured__slide--highlighted');
			}
		});
	}

	function highlightSlide(event) {
		const slides = featuredBlock.querySelectorAll('.fbs-slider__slide');
		const buttonDirection = this.classList.contains('fbs-slider__control-right') ? 'right' : 'left';

		slides.forEach((slide) => {
			if (!slide.classList.contains('primary') && slide.getAttribute('clickable') === buttonDirection) {
				if (event.type === 'mouseover' || event.type === 'click') {
					slide.classList.add('featured__slide--highlighted');
					slide.classList.add('featured__slide--hovered');
				} else {
					slide.classList.remove('featured__slide--highlighted');
					slide.classList.remove('featured__slide--hovered');
				}
			}
		});
	}

	[rightCarouselButton, leftCarouselButton].forEach((button) => {
		button.addEventListener('mouseover', highlightSlide);
		button.addEventListener('mouseout', highlightSlide);
		button.addEventListener('click', highlightSlide);
	});

	featuredSlider.addEventListener('slideChangeStart', (e) => {
		updateClasses(e.detail.targetSlide);
	});

	featuredSlider.addEventListener('slideChanged', (e) => {
		updateClasses(e.detail.currentSlide);
		resetSlidesClasses();
		setUpSlideClickability();
	});

	featuredSlider.addEventListener('sliderResized', (e) => {
		const { currentSlide } = e.detail;

		if (currentSlide !== currentFocusedSlide) {
			featuredSlider.nextSlide();
		}
	});

	/**
	 * Initializes the fbs-carousel on page load
	 */
	function initSlider() {
		if (!featuredSlider.activeSlides.length) {
			return;
		}

		const fbsSliderControls = featuredSlider.querySelector('.fbs-slider__controls');
		fbsSliderControls?.classList.add('fs-content');

		currentFocusedSlide = featuredSlider.currentSlide;
		currentFocusedSlide.domNode.classList.add(currentSlideClass);

		// largest version of slider will have 5 active slides, in this case the first slide should be in the middle
		// so trigger a previous slide to move the first slide over one
		if (featuredSlider.activeSlides.length === 5) {
			featuredSlider.prevSlide();
		}

		setUpSlideClickability();
	}

	initSlider();
});
