import { convertUriToHttps } from './articleUtilities';
import { getCookieValue } from '../../../../shared/cookieUtils';
/**
 * Get the class value.
 * @param {Boolean} isAmp
 * @returns {string} the class value.
 */
const ampGtmClass = (isAmp) => (isAmp ? ' amp-recirc-unit' : '');

/**
 * Tracking attribute name.
 * @param {Boolean} isAmp
 * @returns {string} Trcking attribute name.
 */
const trackingName = (isAmp) => (isAmp ? 'data-vars-event-label' : 'data-ga-track');

/**
 * Get recirc algo from cookie or call API to determine collaborative or sementic similarity.
 * @returns {string} recirc algo value or empty if fireValareCall is false.
 */
const getRecircAlgo = () => {
	const { fireValerieCall = false } = window.forbes['simple-site'];
	return fireValerieCall ? getCookieValue(document.cookie, 'recircUnit') : '';
};

/**
 * Create the SEO Automated Recirc block using recircData from Valerie.
 * @param {Object[]} recircData seo data from collaborative
 * @param {string} clickLabel recirc click label
 * @return {string} recirc stories in html
 */
const createRecircStory = (recircData = [], clickLabel = '') => {
	const { isAmp = false } = window.forbes['simple-site'];

	const recircBlock = recircData.reduce((recircStory, nextStory, index) => {
		nextStory.uri = convertUriToHttps(nextStory.uri);

		recircStory += `<div class="recirc-block"><a class="recirc-link" href="${nextStory.uri}"><h3 class="recirc-headline${ampGtmClass(isAmp)}" ${trackingName(isAmp)}="${clickLabel} ${index + 1}">${nextStory.title}</h3></a></div>`;

		return recircStory;
	}, '');

	return recircBlock;
};

export {
	getRecircAlgo,
	createRecircStory,
	ampGtmClass,
	trackingName,
};
