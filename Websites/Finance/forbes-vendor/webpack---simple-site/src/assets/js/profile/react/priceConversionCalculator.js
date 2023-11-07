const { default: PriceConversionCalculator } = require('@forbes/fbs-components/dist/cjs/components/PriceConversionCalculator/PriceConversionCalculator');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');
const { formatDigits } = require('../../../../shared/digitalAssetsUtils');
const { reactComponentsTracking } = require('../../shared/react-tracking');

/**
 * Prepares tracking props data
 * @param {Object} calculatorData The data to use for tracking
 * @returns tracking props data
 */
const getCalculatorTracking = (calculatorData) => ({
	track: reactComponentsTracking,
	category: 'Forbes Digital Assets',
	action: 'Click',
	firstField: `ConversionCalcDataEntry{${calculatorData.firstField.title}}into{${calculatorData.secondField.title}}`,
	secondField: `ConversionCalcDataEntry{${calculatorData.secondField.title}}into{${calculatorData.firstField.title}}`,
	arrows: `ConversionCalcTransferArrowsDeadClick{${calculatorData.firstField.title}}`,
});

/**
 * Gets Price Conversion Calculator component
 * @param {Object} coinData content crypto data
 * @param {Object} keyMetrics fundamental data
 * @returns Server side ready react component.
 */
const getPriceConversionCalculator = (coinData = {}, keyMetrics = {}) => {
	const priceConversionCalculator = {
		firstField: {
			altText: `${keyMetrics.displaySymbol} Logo`,
			formattedPrice: (+keyMetrics.price24h || 0).toFixed(formatDigits(+keyMetrics.price24h)),
			imgUrl: coinData.logo,
			price: keyMetrics.price24h,
			title: keyMetrics.displaySymbol,
			formatter: formatDigits,
		},
		secondField: {
			altText: 'USA Flag',
			formattedPrice: 1,
			formatter: 16,
			imgUrl: 'https://www.forbes.com/assets/us-icon.svg',
			price: 1,
			title: 'USD',
		},
	};

	return useReactComponent(PriceConversionCalculator, {
		...priceConversionCalculator,
		trackingProps: getCalculatorTracking(priceConversionCalculator),
	});
};

module.exports = {
	getPriceConversionCalculator,
};
