const { default: CardCrypto } = require('@forbes/fbs-components/dist/cjs/components/CardCrypto/CardCrypto');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');
const { reactComponentsTracking } = require('../../shared/react-tracking');

/**
 * Prepares tracking props data
 * @param {string} assetName Top Asset name
 * @param {string} profileName Digital Assets profile name
 * @returns tracking props data
 */
const getTrackingProps = (assetName, profileName, isSparkLine) => ({
	track: reactComponentsTracking,
	category: 'Forbes Digital Assets',
	action: 'Click',
	label: `topassets${isSparkLine ? '_sparkline' : ''}{${assetName}}whileon{${profileName}}`,
});

/**
 * Gets Card Crypto component
 * @param {Object} keyMetrics fundamental data
 * @returns Server side ready react component
 */
const getTopAssets = (keyMetrics) => {
	const { topAssets = [] } = keyMetrics || {};

	return topAssets.map((data) => (
		useReactComponent(CardCrypto, {
			data,
			iconLarge: false,
			trackingProps: getTrackingProps(data.name, keyMetrics.name),
			trackingSparklineProps: getTrackingProps(data.name, keyMetrics.name, true),
		})
	));
};

module.exports = {
	getTopAssets,
};
