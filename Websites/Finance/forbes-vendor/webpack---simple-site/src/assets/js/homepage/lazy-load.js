import * as svgIcons from '@forbes/fbs-icons';
import throttle from '../shared/throttle';
import { serverData } from '../shared/clientConfigService';
import { isMobile } from '../shared/is-mobile';
import { bootstrapProgressiveAds } from '../shared/adInsertion';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { template } from '../../../../dist/templates/_homepageChannelContent';

document.addEventListener('DOMContentLoaded', () => {
	const { lazyLoadData } = serverData;
	bootstrapProgressiveAds();

	const checkOffset = (el) => (el.getBoundingClientRect().top + window.pageYOffset) - document.documentElement.clientTop
		<= window.innerHeight + (window.pageYOffset - 200);

	const lazyContent = [...document.querySelectorAll('.channel--normal')];
	let scrollHandler;

	/**
	 * Add event listener to 'Show More' button in channel row to show text cards on mobile
	 * @param {any} row The channel row with the hidden text cards
	 */
	function handleShowMore(row) {
		const showMoreButton = row.querySelector('.channel__show-more-btn');
		if (showMoreButton) {
			showMoreButton.addEventListener('click', () => {
				showMoreButton.parentNode.removeChild(showMoreButton);
				const cardsToShow = [...row.querySelectorAll('.card--show-more')];
				cardsToShow.forEach((card) => {
					card.classList.remove('card--show-more');
				});
			});
		}
	}

	/**
	 * Handles scroll events by checking offset of rows and lazy loads when in view
	 */
	function handler() {
		for (let i = 0; i < lazyContent.length; i++) {
			const item = lazyContent[i];
			if (checkOffset(item)) {
				const index = (item.getAttribute('id') || '').split('-')[1] || '';
				const { lazyIndex } = item.dataset;
				const data = {
					row: lazyLoadData[lazyIndex || 0] || {},
					index,
					svgIcons,
					isMobile,
				};
				const wrapper = document.createElement('div');
				wrapper.innerHTML = template(data);
				item.appendChild(wrapper);
				handleShowMore(wrapper);
				setTimeout(() => {
					wrapper.classList.add('channel__content--lazy-loaded');
					const channelResponseEvent = new CustomEvent('fbs-channel-response', {
						detail: wrapper,
					});
					document.dispatchEvent(channelResponseEvent);
				});
				lazyContent.splice(i, 1);
				i--;
			} else {
				break;
			}
		}
		if (lazyContent.length === 0) {
			window.removeEventListener('scroll', scrollHandler);
		}
	}

	scrollHandler = throttle(handler, 200);
	window.addEventListener('scroll', scrollHandler);
});
