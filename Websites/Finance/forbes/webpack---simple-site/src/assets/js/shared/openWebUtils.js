import { fireGAEvent } from './tracking';
import checkStatus from './checkStatus';
import { isChina, isEurope } from './clientConfigService';
import { checkConsentCookieLoaded, userGaveFullConsent, checkJurisdiction } from './ketchUtils';

const { isMobile } = require('./is-mobile');
const {
	// setAcknowledgement,
	// getAcknowledgement,
	acceptAcknowledgement,
	// updateSessionCount,
} = require('./tooltipAck');

function showOpenWeb() {
	const checkRegion = isChina || isEurope;
	const checkRegionAndJurisdiction = checkRegion || checkJurisdiction();

	return ((!checkConsentCookieLoaded()) && !checkRegion)
	|| !(checkRegionAndJurisdiction)
	|| (checkRegionAndJurisdiction && userGaveFullConsent());
}

function hideTooltip(toolTipText, anchorButton) {
	acceptAcknowledgement('cmtAck');
	toolTipText.classList.remove('tooltip-show');
	anchorButton?.classList.remove('hover-show');
}

/**
 * Update HTML for openWeb commenting counter
 * @param {Object} data contains number of comments data.
 * @param {Number} streamArticleIndex Current stream position of the next article in the stream.
 * @param {String} articleId current article id.
 */
function updateCommentingDivHTML(data, streamArticleIndex, articleId) {
	const commentsCountDiv = document.querySelector(`.replies-count__container[onclick="location.href='#open-web-${streamArticleIndex}'"]`);

	if (commentsCountDiv && data) {
		const countTotal = data.messages_count[articleId] || 0;
		const messagesCountDiv = document.createElement('div');
		messagesCountDiv.className = 'messages-count';
		const link = document.createElement('a');
		link.innerText = countTotal;
		messagesCountDiv.appendChild(link);
		commentsCountDiv.appendChild(messagesCountDiv);
	}
}

/**
 * Get number of comments for article from openWeb and update html.
 * @param {Number} streamArticleIndex Current stream position of the next article in the stream.
 * @param {String} articleId current article id.
 */
function updateNumberOfCommentsForArticle(streamArticleIndex, articleId) {
	const { isProd = false } = window.forbes['simple-site'];
	const spotId = isProd ? 'sp_qBnNq7ll' : 'sp_EgBmvxVv';

	if (streamArticleIndex === 0 || !articleId) {
		articleId = window.forbes['simple-site'].articleId;
	}

	if (articleId && articleId.startsWith('blogAndPostId')) {
		articleId = `content_${articleId.split('-')[1]}`;
	}

	fetch(`https://open-api.spot.im/v1/messages-count?spot_id=${spotId}&posts_ids=${articleId}`)
		.then((response) => {
			checkStatus(response);
			response.json()
				.then((json) => {
					// call a function to update the html
					updateCommentingDivHTML(json, streamArticleIndex, articleId);
				});
		})
		.catch((error) => console.error(error));
}

function getGADataAndTooltip(anchorButton) {
	// const anchorLink = document.querySelector('.open-web_anchor--link');
	// const toolTipText = document.querySelector('#article-stream-0 .tooltip-text:not(.following)');

	const GAData = {
		eventCategory: 'Template Area Interaction',
		eventAction: 'click',
		eventLabel: 'Commenting Icon',
	};

	if (anchorButton) {
		// Click tracking for commenting icon
		anchorButton.addEventListener('click', () => {
			fireGAEvent(GAData);
		});
	}

	// animate toolTip after 5sec
	// if (toolTipText) {
	// 	const ackFromStorage = getAcknowledgement('cmtAck');
	// 	const ackData = ackFromStorage ? JSON.parse(ackFromStorage) : {};

	// 	if (!window.location.href.includes('utm_source=AudioToolTip') && (!ackFromStorage || ackData.session === 3)) {
	// 		setAcknowledgement('cmtAck');

	// 		setTimeout(() => {
	// 			toolTipText.classList.add('tooltip-show');
	// 			anchorButton?.classList.add('hover-show');

	// 			// hide comment tooltip after clicking on comment icon
	// 			anchorLink.addEventListener('click', () => {
	// 				hideTooltip(toolTipText, anchorButton);
	// 			});
	// 		}, 5000);
	// 	}

	// 	if (ackData.session < 3) {
	// 		updateSessionCount('cmtAck', ackData.session);
	// 	}

	// 	toolTipText.addEventListener('click', () => {
	// 		hideTooltip(toolTipText, anchorButton);
	// 	});
	// }
}

function openWebFunctionality(streamArticleIndex, anchorButton, openWebPlaceHolder) {
	const openWebOverlay = document.querySelector(`#article-stream-${streamArticleIndex} .openWeb-overlay`);
	const closeButton = document.querySelector(`#article-stream-${streamArticleIndex} .close--icon`);
	const html = document.querySelector('html');

	const GAData = {
		eventCategory: 'Template Area Interaction',
		eventAction: 'click',
		eventLabel: 'Commenting Close',
	};

	anchorButton.addEventListener('click', () => {
		// eslint-disable-next-line no-underscore-dangle
		window.__OPEN_WEB__.initOW();
		openWebOverlay?.classList.add('view');
		openWebPlaceHolder.classList.add('openWeb-commenting--animation');
		html.style.setProperty('overflow', 'hidden');
	});

	closeButton.addEventListener('click', () => {
		openWebOverlay?.classList.remove('view');
		html.style.removeProperty('overflow');
		fireGAEvent(GAData);
	});
}

function actionOpenWeb(streamArticleIndex, naturalId) {
	if (!showOpenWeb()) {
		return;
	}

	const openWebPlaceHolder = document.querySelector(`#article-stream-${streamArticleIndex} .openWeb-commenting`);
	const anchorButton = document.querySelector(`#article-stream-${streamArticleIndex} .open-web_anchor--link`);

	// Adds data for counter
	updateNumberOfCommentsForArticle(streamArticleIndex, naturalId);

	getGADataAndTooltip(anchorButton);

	if (openWebPlaceHolder && isMobile) {
		openWebFunctionality(streamArticleIndex, anchorButton, openWebPlaceHolder);
	}
}

export {
	showOpenWeb,
	actionOpenWeb,
	hideTooltip,
};
