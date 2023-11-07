import { isTablet } from '../shared/is-mobile';

/**
 * Navigate carousel by dots
 * @param {Object} dots HTMLElements for carousel
 * @param {Object} carousel HTMLElement data
 */
export default function carouselNavigateByDots(dots, carousel, isVetted = false) {
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			dots.forEach((carouselDot) => carouselDot.classList.remove('active'));
			dot.classList.add('active');
			if (isTablet && isVetted) {
				carousel.goToIndex(index - 1);
			} else {
				carousel.goToIndex(index);
			}
		});
	});
}
