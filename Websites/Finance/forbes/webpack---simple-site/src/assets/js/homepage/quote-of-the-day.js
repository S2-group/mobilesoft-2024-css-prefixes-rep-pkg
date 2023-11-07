import throttle from '../shared/throttle';

const isInView = (elem) => {
	const bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= (document.documentElement.clientHeight / 4)
		&& bounding.bottom <= (document.documentElement.clientHeight)
	);
};

function animateQuote(quoteElement) {
	if (isInView(quoteElement)) {
		quoteElement.classList.add('animated-borders');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const quoteSection = document.querySelector('.qotd-section');

	const borderAnimation = () => {
		if (!quoteSection?.classList.contains('animated-borders')) {
			animateQuote(quoteSection);
		} else {
			document.removeEventListener('scroll', this);
		}
	};

	const throttledAnimation = throttle(borderAnimation, 200);

	if (quoteSection) {
		document.addEventListener('scroll', throttledAnimation);
		borderAnimation();
	}
});
