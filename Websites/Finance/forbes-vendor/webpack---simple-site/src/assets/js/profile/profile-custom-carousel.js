import carouselNavigateByDots from './carousel-navigate';

document.addEventListener('DOMContentLoaded', () => {
	const breakdownCarousel = document.getElementsByClassName('profile-tabs__slider')[0];
	const breakdownCarouselDots = [...document.querySelectorAll('.profile-tabs__dots button')];
	const breakdownCarouselTabs = [...document.querySelectorAll('.profile-tabs span')];

	function carouselNavigator(element, carousel) {
		element[0]?.classList.add('active');
		carouselNavigateByDots(element, carousel);
	}

	if (breakdownCarousel) {
		breakdownCarousel.addEventListener('slideChanged', (event) => {
			breakdownCarouselDots.forEach((dot) => {
				dot.classList.remove('active');
			});

			breakdownCarouselTabs.forEach((dot) => {
				dot.classList.remove('active');
			});

			const indexOffSet = Math.ceil(event.detail.currentSlide.scope.index);
			breakdownCarouselDots[indexOffSet].classList.add('active');
			breakdownCarouselTabs[indexOffSet].classList.add('active');
		});

		carouselNavigator(breakdownCarouselDots, breakdownCarousel);
		carouselNavigator(breakdownCarouselTabs, breakdownCarousel);
	}
});
