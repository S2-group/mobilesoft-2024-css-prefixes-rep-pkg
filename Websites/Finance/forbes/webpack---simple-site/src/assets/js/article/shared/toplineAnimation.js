import throttle from '../../shared/throttle';

let isAnimated;
let toplineBullets;
let toplineParent;

/**
 * Determines if it is time to fire the topline animation
 * @returns {Boolean} True if it's time to fire the animation.
 */
const shouldFireToplineAnimation = () => (
	toplineParent ? ((toplineParent.getBoundingClientRect() || {}).top || 0) / window.innerHeight <= 0.75 : false
);

/**
 * Starts animation of bullets.
 */
const fireToplineAnimation = () => {
	if (toplineBullets && toplineBullets[0]) {
		toplineBullets[0].classList.add('animate-line');
	}

	setTimeout(() => {
		toplineBullets = Array.from(toplineParent.querySelectorAll('.timeline-element:not(.animate-line), .key-facts-element:not(.animate-line)'));
		if (toplineBullets.length > 1) {
			fireToplineAnimation();
		}
	}, 1500);
};

/**
 * Scroll event that calls the animation of bullets to begin.
 */
const handleToplineScroll = () => {
	if (shouldFireToplineAnimation()) {
		toplineBullets = Array.from(toplineParent.querySelectorAll('.timeline-element:not(.animate-line), .key-facts-element:not(.animate-line)'));

		if (toplineBullets.length > 1 && !isAnimated) {
			isAnimated = true;
			fireToplineAnimation();
		}

		/* eslint-disable-next-line no-use-before-define */
		window.removeEventListener('scroll', handleToplineScrollEvent);
	}
};

/**
 * Scroll event handler.
 */
const handleToplineScrollEvent = throttle(() => handleToplineScroll(), 200);

/**
 * Checks for the topline element and begins events accordingly.
 * @param {Number} streamIndex Current location in the stream.
 */
const toplineAnimation = (streamIndex = 0) => {
	const currentArticle = document.querySelector(`#article-stream-${streamIndex}`);
	const timelineParent = currentArticle.querySelector('.timeline');
	const keyFactsParent = currentArticle.querySelector('.key-facts');
	toplineParent = timelineParent || keyFactsParent;
	if (toplineParent) {
		isAnimated = false;
		window.addEventListener('scroll', handleToplineScrollEvent);
	}
};

export default toplineAnimation;
