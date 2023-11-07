import React from 'react';
import { isMobile } from '../../shared/is-mobile';
import { getTableSimple } from './tableSimple';
import { getAttributionBadge } from './attributionBadge';
import { getPriceConversionCalculator } from './priceConversionCalculator';
import hydrateFdaSubnav from '../../shared/fdaSubnav';
import { getStickyAd } from './stickyAd';
import { getReadMore } from './readMore';
import PoweredByNomics from '../../../svg/poweredByNomics.svg';
import { getAccordion } from './accordion';
import { getCoinHeading } from './coinHeading';
import { getTopAssets } from './topAssets';

/**
 * Hydrates the StickyAd component after being rendered from the server.
 */
const hydrateStickyAd = () => {
	const stickyAd = document.getElementById('StickyAd');

	if (stickyAd) {
		getStickyAd().hydrate(stickyAd);
	}
};

/**
 * Hydrates the TableSimple component after being rendered from the server.
 */
const hydrateTableSimple = () => {
	const tableSimpleContainer = document.getElementById('tableSimple__container--fda');
	const { keyMetrics, coinData } = window.forbes?.['simple-site'] || {};

	if (tableSimpleContainer) {
		const tableFooter = {
			tableFooter: (
				<span className="price__tabs-date-nomics">
					<div className="price__tabs-date">
						As of
						{' '}
						{keyMetrics?.date}
					</div>
					<div className="AttributionBadge" />
				</span>
			),
		};

		getTableSimple(keyMetrics, coinData.name, tableFooter).hydrate(tableSimpleContainer);
	}
};

/**
 * Hydrates the AttributionBadge component after being rendered from the server.
 */
const hydrateAttributionBadge = () => {
	const { keyMetrics } = window.forbes?.['simple-site'] || {};
	const attributionBadge = [...document.getElementsByClassName('AttributionBadge')];
	const topLevelBadge = attributionBadge[0];
	const bottomLevelBadge = attributionBadge[attributionBadge.length - 1];

	if (keyMetrics?.source === 'nomics') {
		if (topLevelBadge) {
			getAttributionBadge(<PoweredByNomics />).hydrate(topLevelBadge);
		}
		if (bottomLevelBadge) {
			getAttributionBadge(<PoweredByNomics />).hydrate(bottomLevelBadge);
		}
	}
};

/**
 * Hydrates the Read More component after being rendered from the server.
 */
const hydrateReadMore = () => {
	const { coinData } = window.forbes?.['simple-site'] || {};
	const readMore = document.getElementById('ReadMore');

	if (readMore) {
		getReadMore(coinData, isMobile).hydrate(readMore);
	}
};

/**
 * Hydrates the AttributionBadge component after being rendered from the server.
 */
const hydrateCoinHeading = () => {
	const coinHeading = document.getElementsByClassName('coinHeading')[0];
	const { user } = window.Zephr || {};
	const {
		keyMetrics, coinData,
	} = window.forbes?.['simple-site'] || {};

	if (coinHeading) {
		getCoinHeading(coinData, keyMetrics, !!user).hydrate(coinHeading);
	}
};

/**
 * Hydrates the Accordion component after being rendered from the server.
 */
const hydrateResourcesAccordion = () => {
	const { coinData } = window.forbes?.['simple-site'] || {};
	const resources = [...document.getElementsByClassName('Resource')];

	let componentIndex = 0;
	if (resources.length) {
		getAccordion(coinData).forEach((useReactComponent) => {
			if (useReactComponent) {
				useReactComponent.hydrate(resources[componentIndex++]);
			}
		});
	}
};

/**
 * Hydrates the priceConversionCalculator component after being rendered from the server.
 */
const hydratePriceConversionCalculator = () => {
	const { keyMetrics, coinData } = window.forbes?.['simple-site'] || {};
	const priceConversionCalculator = document.getElementById('PriceConversionCalculator');

	if (priceConversionCalculator) {
		getPriceConversionCalculator(coinData, keyMetrics).hydrate(priceConversionCalculator);
	}
};

/**
 * Hydrates the topAssets component after being rendered from the server.
 */
const hydrateTopAssets = () => {
	const { keyMetrics } = window.forbes?.['simple-site'] || {};
	const topAssetElements = [...document.getElementsByClassName('TopAssets')];

	if (topAssetElements.length) {
		getTopAssets(keyMetrics).forEach((useReactComponent, index) => {
			useReactComponent.hydrate(topAssetElements[index]);
		});
	}
};

if (isMobile) {
	hydrateStickyAd();
}

hydrateFdaSubnav();
hydratePriceConversionCalculator();
hydrateTableSimple();
hydrateAttributionBadge();
hydrateReadMore();
hydrateResourcesAccordion();
hydrateTopAssets();

document.addEventListener('fbs-zephr-init', hydrateCoinHeading);
