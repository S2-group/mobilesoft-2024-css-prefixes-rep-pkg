import { fireGAEvent } from '../shared/tracking';
import { trimTrailingComma } from './assets-utilities';

const { coinData } = window.forbes?.['simple-site'] || {};

const assetsLabels = {
	bottomofpageassetpage: (element, eventLabel) => `${eventLabel}{${element.firstElementChild.href}}`,
	articlepageclick: (element, eventLabel) => `${eventLabel}{${element.textContent}}`,
	lefthandarticlelistassetpage: (element, eventLabel) => `${eventLabel}{${element.href}}`,
	bottomofpagearticlepageviewmore: () => `viewmorearticleswhileon{${coinData.name}}`,
	resources: (element, eventLabel) => `${eventLabel}{${element.previousElementSibling.textContent}}whileon{${coinData.name}}`,
	statusbadgeassetpage: () => `selected{${coinData.forbesStatusProperties.label}}whileon{${coinData.name}}`,
};
const exchangesLabels = {
	bottomofpageassetpage: (element) => `bottomofpageexchangepage{${element.firstElementChild.href}}`,
	exchangepageclick: (element) => `exchangepageclick{${trimTrailingComma(element.firstElementChild.textContent)}}`,
	lefthandarticlelistassetpage: (element) => `lefthandarticlelistexchangepage{${element.href}}`,
	bottomofpagearticlepageviewmore: () => 'bottomofpageexchangepageviewmore',
};
const params = {
	eventCategory: 'Forbes Digital Assets',
	eventAction: 'Click',
};

/**
 * Returns the right eventLabel.
 *
 * @param {String} eventLabel a general label.
 * @param {HTMLElement} element assets page element.
 * @param {Boolean} isExchange weather is it an exchange page or not.
 * @returns {String} the eventLabel.
 */
const getLabel = (eventLabel, element, isExchange) => (
	isExchange ? exchangesLabels[eventLabel](element, eventLabel) : assetsLabels[eventLabel](element, eventLabel)
);

/**
 * Adds tracking to an element/elements.
 *
 * @param {Array<HTMLElement>} elements assets page element/elements.
 * @param {String} eventLabel a general label.
 * @param {Boolean} isExchange weather is it an exchange page or not.
 * @param {Boolean} isOneElement weather is it a one element or not.
 */
const addTracking = (elements, eventLabel = '', isExchange = false) => {
	if (elements.length) {
		elements.forEach((element) => {
			element.addEventListener('click', () => {
				params.eventLabel = getLabel(eventLabel, element, isExchange);
				fireGAEvent(params);
			});
		});
	}
};

document.addEventListener('DOMContentLoaded', () => {
	const isExchange = window.location.pathname.includes('exchanges');
	const isAsset = window.location.pathname.includes('assets');

	const exchanges = document.querySelectorAll('.price__panel-name.exchange-link');
	const articles = document.querySelectorAll('.profile-news__items .stream-item h3');
	const rightRailArticles = document.querySelectorAll('.profile-sidebar__articles-item');
	const moreArticlesButton = document.querySelectorAll('.stream__more-articles-wrapper .load-more');
	const statusBadge = document.querySelectorAll('.coloredLabel__fullwidth--fda');
	const tradedAssetsList = document.querySelector('.traded-assets-list');
	const resources = document.querySelectorAll('.resource-item.fda-stats a');

	if (isExchange || isAsset) {
		addTracking(exchanges, 'articlepageclick', isExchange);
		addTracking(articles, 'bottomofpageassetpage', isExchange);
		addTracking(rightRailArticles, 'lefthandarticlelistassetpage', isExchange);
		addTracking(moreArticlesButton, 'bottomofpagearticlepageviewmore', isExchange);
		addTracking(resources, 'resources', isExchange);
		addTracking(statusBadge, 'statusbadgeassetpage', isExchange);

		if (tradedAssetsList) {
			addTracking(tradedAssetsList.querySelectorAll('span'), 'exchangepageclick', isExchange);
		}
	}
});
