import { ampGtmClass, trackingName, createRecircStory } from './recircBlockAlgo';
import checkStatus from '../../shared/checkStatus';

const articleUtilities = require('./articleUtilities.js');
const recircUtils = require('../../../../shared/recircUtils.js');

/**
 * Create the Market Place Recirc block using recircData from gcp storage bucket
 * @param {String} widgetId widget type for this article
 * @param {Object[]} relatedArticles linked articles to be displayed within market place module
 * @param {String} recircTrackingName market place recirc click track and cd 106 value
 * @return {String} recircBlock inflated html with market place recirc data
 */
function createRecircBlock(widgetId = '', relatedArticles = [], recircTrackingName = '') {
	const { isAmp = false } = window.forbes['simple-site'];
	let recircBlock = '';

	if (widgetId === '1' || widgetId === '2') {
		recircBlock = relatedArticles.reduce((recircStory, nextStory, index) => {
			nextStory.uri = articleUtilities.convertUriToHttps(nextStory.uri);
			recircStory += `<div class="recirc-block-padding"><div class="recirc-content"><a class="recirc-link" href="${nextStory.uri}"><h3 class="recirc-headline-no-margin${ampGtmClass(isAmp)}" ${trackingName(isAmp)}="${recircTrackingName} - Link ${index + 1}">${nextStory.title}</h3></a><a class="recirc-author" href="${nextStory.authorLink}">By<div class="recirc-author-name">${nextStory.authorName}</div><div class="recirc-author-type">${nextStory.authorRole}</div></a></div><a class="recirc-img${ampGtmClass(isAmp)}" style="background-image:url(${nextStory.articleImage});" href="${nextStory.uri}" ${trackingName(isAmp)}="${recircTrackingName} - Link ${index + 1}"></a></div>`;
			return recircStory;
		}, '');
	} else {
		recircBlock = createRecircStory(relatedArticles, `${recircTrackingName} - Link`);
	}

	return recircBlock;
}

/**
 * Process the Market Place recirc data retrieved from gcp storage bucket
 * @param {Object} json json format of the market place data retrieved from gcp storage bucket
 * @returns {String} recirc block to insert into article body
 */
function processMarketPlaceData(json) {
	const {
		widgetId = '',
		relatedArticles = [],
		articlesUrl = '',
		type = 'advisor',
	} = json;

	const limit = recircUtils.getMarketPlaceLimit(widgetId);
	const recircTrackingName = recircUtils.getMarketPlaceTrackingName(widgetId, type);
	const filteredArticles = recircUtils.filterArticles(relatedArticles, articlesUrl, limit);
	return createRecircBlock(widgetId, filteredArticles, recircTrackingName);
}

/**
 * Update Market Place html with most recent linked articles
 * @param {Object} recircData Data for the Market Place recirc unit
 */
function updateMarketPlaceHTML(json = {}) {
	const marketPlaceRecircWrapper = document.querySelector('.recirc-module .recirc-articles');

	if (marketPlaceRecircWrapper) {
		const recircBlock = processMarketPlaceData(json);
		if (recircBlock) {
			marketPlaceRecircWrapper.innerHTML = recircBlock;
		}
	}
}

/**
 * Get most recent linked articles to power in-article Market Place Recirc Unit.
 */
function updateMarketPlaceRecircUnit() {
	const { isProd = '', fireMarketPlaceCall = false } = window.forbes['simple-site'];
	const { customPage: uri = '' } = window.forbes['simple-site'].tracking;

	if (fireMarketPlaceCall && uri) {
		const bucket = isProd ? 'bacon-forbes-prd' : 'bacon-forbes-stg';
		fetch(`https://bacon.forbes.com/${bucket}/market-place-recirc-module/${Buffer.from(uri).toString('base64')}.json`)
			.then((response) => {
				checkStatus(response);
				response.json()
					.then((json) => {
						updateMarketPlaceHTML(json);
					});
			})
			.catch((error) => console.error(error));
	}
}

document.addEventListener('DOMContentLoaded', () => {
	updateMarketPlaceRecircUnit();
});
