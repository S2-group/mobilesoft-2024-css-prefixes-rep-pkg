import { isMobile } from '../../shared/is-mobile';
import { userGaveFullConsent } from '../../shared/ketchUtils';
import { setLiveTemplateMetrics, setEstDate, setDateCalculations } from './liveUpdateArticle';
import { truncateCaption } from '../../shared/domUtilities';
import { pushEvent } from '../../shared/speakrTracking';
/**
 * Update the dates in mini stories to the correct text.
 * @param {String} templateType the template type of the content.
 * @param {HTMLNode} element The element to update.
 */
function updateMiniPublishDates(templateType = '', context = document) {
	const contentDataEl = context.querySelector('.content-data');

	if (!contentDataEl) {
		return;
	}

	const liveExpiration = contentDataEl.getAttribute('data-date-expiration');
	const currentDate = setEstDate();
	const expirationDate = setEstDate(Number.parseInt(liveExpiration, 10));

	if (templateType !== 'live' || (expirationDate.getTime() <= currentDate.getTime())) {
		return;
	}
	const updates = Array.from(context.querySelectorAll('.live-update-timestamp'));
	updates.forEach((update) => {
		const timestamp = update.parentNode.getAttribute('data-sort-time');

		const { diffDays = 0, diffHours = 4, updateLabel = '' } = setDateCalculations(Number.parseInt(timestamp, 10), true, false);

		if (!diffDays && diffHours < 4) {
			update.textContent = updateLabel;
			update.style.display = 'block';

			if (diffHours < 2) {
				update.style.color = '#D8361E';
			}
		}
	});
}

/**
 * Fetches pageviews from tamagotchi for a specific article
 * @param {String} articleId The id for a specific article
 */
function fetchPageviews(articleId) {
	return fetch(`/tamagotchi/v1/fetchLifetimeViews/?id=${articleId}`)
		.then((res) => res.json())
		.then((data) => ((data || {}).views || -1))
		.catch((e) => console.error(`Error fetching pageviews for article ${articleId}:`, e) || -1);
}

/**
 * Inserts pageviews onto the article page
 * @param {Number} pageviews Number of pageviews
 * @param {HTMLDocument} context The HTML page for a specific article
 */
function insertPageViews(pageviews, context = document) {
	const isHiddenForLive = context.querySelector('.content-data--hidden');
	if (pageviews < 0) {
		if (isHiddenForLive) {
			setLiveTemplateMetrics(isHiddenForLive);
		}

		return;
	}

	const insert = context.querySelector('.pageviews-wrapper');
	const vertPipes = context.querySelectorAll('.hidden.vert-pipe');
	const pageViewsPipe = Array.from(vertPipes).pop();
	const newPageviews = document.createElement('span');

	newPageviews.classList.add('pageviews');

	if (pageViewsPipe) {
		pageViewsPipe.classList.remove('hidden');
	}

	newPageviews.innerHTML = `${pageviews.toLocaleString()} views`;
	insert.parentNode.insertBefore(newPageviews, insert);

	if (isHiddenForLive) {
		setLiveTemplateMetrics(isHiddenForLive);
	}
}

/**
 * Update the various parts of the meta so simple reach can pull the right data.
 * @param {String} authorName The author of the article that has been loaded in the stream.
 * @param {String} url The url of the article that has been loaded in the stream.
 */
function updateMetaForSimpleReach(authorName = '', url = '') {
	const canonicalLink = document.querySelector('link[rel="canonical"]');
	const authorMeta = document.querySelector('meta[property="article:author"]');

	if (canonicalLink) {
		canonicalLink.setAttribute('href', url);
	}

	if (authorMeta) {
		authorMeta.setAttribute('content', authorName);
	}
}

/**
 * Captures the search parameters on the window and filters for utm values
 * @returns {String} String of utm parameters from the window location
 */
const getUtmParams = () => {
	const params = new URL(window.location.href || '').searchParams;
	return Object.keys(Object.fromEntries(params))
		.reduce((acc, key) => {
			if (!key.includes('utm_')) {
				return acc;
			}

			acc = `${acc}${acc ? '&' : ''}${key}=${Object.fromEntries(params)[key]}`;
			return acc;
		}, '');
};

/**
 * Hides iframe until it is loaded
 */
function iframeArticleScroll() {
	const bodyContainer = document.querySelector('.article-body-container');

	if (!bodyContainer) {
		return;
	}

	if (document.readyState !== 'complete') {
		document.addEventListener('readystatechange', () => {
			bodyContainer.classList.add('show-iframes');
		});
	}
}

if (!isMobile) {
	document.addEventListener('DOMContentLoaded', iframeArticleScroll);
}

/**
 * Truncates the caption for hero images on premium articles
 */
document.addEventListener('DOMContentLoaded', truncateCaption('.hero-image-premium-article-credit', '.hero-image-info-caption-shortend', '.hero-image-info-caption-expanded'));

/**
 * Add tracking to the author name in the contrib top
 * @param {Object} article object that has the article details
 */
function setAuthorNameTracking(article = document) {
	const authorNameTag = [...article.querySelectorAll('.author-name--tracking')];
	let indexAuthor = 1;
	authorNameTag.forEach((element) => {
		const authorName = element.innerText;
		const trackingDetails = authorNameTag.length > 1 ? `author-${indexAuthor}-${authorName}` : `author-${authorName}`;
		pushEvent(element, 'click', 'Template Area Interaction', trackingDetails);
		indexAuthor++;
	});
}

setAuthorNameTracking();

/**
 * Converts uri protocol to https
 * @param {String} uri that may have http protocol
 * @returns {String} Uri with https protocol
 */
function convertUriToHttps(uri = '') {
	return (uri).match(/^http:\/\//i) ? (uri).replace('http://', 'https://') : uri;
}

/**
 * Removes the label from footer ad in articles
 * according to the status of user consent
 * @param {Number} streamIndex Article index in the stream
 */
function handleFooterAdLabel(streamIndex) {
	const footerAd = document.getElementsByClassName('footer-ad-labeling');

	if (footerAd && !userGaveFullConsent()) {
		footerAd[streamIndex]?.classList.add('no-label');
	}
}

export {
	fetchPageviews,
	getUtmParams,
	updateMiniPublishDates,
	insertPageViews,
	updateMetaForSimpleReach,
	convertUriToHttps,
	handleFooterAdLabel,
	setAuthorNameTracking,
};
