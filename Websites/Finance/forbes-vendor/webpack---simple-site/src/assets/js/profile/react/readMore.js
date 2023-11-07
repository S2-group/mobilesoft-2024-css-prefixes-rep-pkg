const { default: ReadMore } = require('@forbes/fbs-components/dist/cjs/components/ReadMore/ReadMore');
const {
	useReactComponent,
} = require('../../../../app/shared/componentLibraryService');
const { reactComponentsTracking } = require('../../shared/react-tracking');

const { removeHtmlFromData } = require('../../../../shared/digitalAssetsUtils');

const readMoreData = {
	showMoreText: 'Read More',
	showLessText: 'Read Less',
};

const initialNumOfCharsToShow = {
	mobile: 400,
	desktop: 600,
};

/**
 * Prepares tracking props data
 * @param {string} profileName The profile name
 * @returns tracking props data
 */
const getReadMoreTracking = (profileName) => ({
	track: reactComponentsTracking,
	category: 'Forbes Digital Assets',
	action: 'Click',
	expandLabel: `lessbiowhileon{${profileName}}`,
	collapseLabel: `morebiowhileon{${profileName}}`,
});

/**
 * Gets Read More component
 * @param {object} coinData CoinData
 * @param {boolean} isMobile True if is Mobile
 * @returns Server side ready react component.
 */
const getReadMore = (coinData, isMobile) => useReactComponent(
	ReadMore,
	{
		data: removeHtmlFromData(coinData?.description),
		...readMoreData,
		trackingProps: getReadMoreTracking(coinData?.name || ''),
		initialNumOfCharsToShow: isMobile ? initialNumOfCharsToShow.mobile : initialNumOfCharsToShow.desktop,
	},
);

module.exports = {
	getReadMore,
};
