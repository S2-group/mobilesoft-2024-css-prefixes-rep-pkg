import { showLeftCarouselArrow, truncateCarouselTitles } from '../shared/carouselUtilities';

document.addEventListener('DOMContentLoaded', () => {
	const happeningCarousel = document.querySelector('.happening-now__carousel');

	if (!happeningCarousel) {
		return;
	}

	truncateCarouselTitles(happeningCarousel, '.happening__title');

	happeningCarousel.addEventListener('slideChangeStart', () => {
		truncateCarouselTitles(happeningCarousel, '.happening__title');
		showLeftCarouselArrow(happeningCarousel);
	});
});
