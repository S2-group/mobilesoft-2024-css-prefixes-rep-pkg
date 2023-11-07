/* eslint-disable no-underscore-dangle */
import { isProd } from '../../shared/clientConfigService';
import { getAbParam } from '../../shared/adblock';

/**
 * Clean api url
 * @param {String} rawUri The uri from the API mostRecent call or ntv-content(d/m) ad
 * @returns {String} A clean uri
 */
const setCleanUrl = (rawUri = '') => {
	const urlPath = rawUri.split('forbes.com')[1];
	return urlPath ? `https://www${isProd ? '' : '-staging'}.forbes.com${urlPath}` : '';
};

/**
 * Checks if the scheduler is a valid article to add to stream
 * @param {Object[]} apiData Data from the most recent call
 * @returns {Boolean} True if valid
 */
const isSchedulerDataValid = (apiData = []) => {
	const { 'simple-site': { tracking: { naturalID = '' } = {} } = {} } = window.forbes;
	const { naturalId = '', retracted = false, uri = '' } = apiData[0] || {};
	const articleCount = Array.from(document.querySelectorAll('article')).length;

	return Array.isArray(apiData) && apiData.length && articleCount === 1 && naturalID !== naturalId && !retracted && uri;
};

/**
 * Update topStories with scheduler article
 * @param {String} newUri The uri from the API mostRecent call or ntvContentAd
 * @param {String} testUri The uri param for QA testing
 */
const updateTopStoriesUrl = (newUri = '', testUri = '') => {
	const { 'simple-site': { topStories = [] } = {} } = window.forbes;

	if (topStories.length) {
		topStories[0].uri = testUri || setCleanUrl(newUri) || topStories[0].uri;
	}
};

/**
 * Fetches scheduler article by region
 */
const fetchSchedulerByRegion = () => {
	const region = (window.__region && window.__region === 'INTL') ? 'international' : 'us';

	fetch(`/simple-data/scheduler/?region=${region}`)
		.then((res) => res.json())
		.then((data) => {
			if (isSchedulerDataValid(data)) {
				updateTopStoriesUrl(data[0].uri);
			}
		})
		.catch((error) => console.error('error fetching scheduler by region: ', error));
};

/**
 * Handles render logic for the ntv-content ads on desktop and mobile articles
 * @param {Object} event Render callback event.
 */
const ntvContentAdRenderCallback = (event) => {
	const ad = event.target;

	let waitForBlockerCount = 0;
	const hrefInterval = setInterval(() => {
		waitForBlockerCount++;

		const iframe = ad.querySelector('iframe');
		const link = ad.querySelector('.link');
		const articleCount = Array.from(document.querySelectorAll('article')).length;

		// For dev/QA/test purposes only. Allow the first stream article to be chosen with the
		// nextArticle parameter.
		let testUrl;
		window.location.search.replace('?', '').split('&').forEach((param) => {
			const pair = param.split('=');
			if (pair[0] === 'nextArticle' && (pair[1] || '').match('^https?://www(-staging)?.forbes.com/sites/')) {
				testUrl = pair[1];
			}
		});

		const isAdTimedOut = waitForBlockerCount > 25 && (!iframe || (!link && !testUrl));

		// If the user has already loaded the next article, bounce.
		// If the iframe did not appear within 5 seconds or the iframe
		// did appear but the link and testUrl did not appear within 5 seconds,
		// we can assume AdOps served a blocker and we can fetch the scheduler api by region.
		// If the link exists and topStories exist, we change the first article to
		// the link provided or the test url.
		if (articleCount > 1) {
			clearInterval(hrefInterval);
		} else if (isAdTimedOut) {
			fetchSchedulerByRegion();
			clearInterval(hrefInterval);
		} else if (link) {
			updateTopStoriesUrl(link.dataset.href, testUrl);
			clearInterval(hrefInterval);
		}
	}, 200);
};

/**
 * Checks if we should call the scheduler or not
 */
const shouldCallScheduler = () => {
	const { 'simple-site': { isSubscriber = false, tracking: { blogType = '' } = {} } } = window.forbes;
	return getAbParam() && !isSubscriber && !['ad', 'insights', 'connoisseur'].includes(blogType);
};

/**
 * Callback for fbs-ad-block-init function
 */
const adBlockEvent = () => {
	setTimeout(() => {
		if (shouldCallScheduler()) {
			fetchSchedulerByRegion();
		}
		document.removeEventListener('fbs-ad-block-init', adBlockEvent);
	});
};

document.addEventListener('fbs-ad-block-init', adBlockEvent);
document.addEventListener('DOMContentLoaded', () => {
	const ntvContentAd = document.querySelector('fbs-ad[position*="ntv-content"]');

	if (ntvContentAd) {
		ntvContentAd.addEventListener('render', ntvContentAdRenderCallback);
	}
});
