const { default: TableSimple } = require('@forbes/fbs-components/dist/cjs/components/TableSimple/TableSimple');
const {
	useReactComponent,
} = require('../../../../app/shared/componentLibraryService');

const { reactComponentsTracking } = require('../../shared/react-tracking');

const paginationTheme = {
	backgroundColor: '#ffffff',
	backgroundColorActive: '#009933',
	contentColor: '#000000',
	contentColorActive: '#ffffff',
	hoverColor: '#e6e6e6',
};

/**
 * Prepares tracking props data
 * @param {string} profileName current profile name
 * @returns tracking props data
 */
const getTableSimpleTracking = (profileName) => ({
	track: reactComponentsTracking,
	category: 'Forbes Digital Assets',
	action: 'Click',
	nextArrowLabel: `pricesexchangespagianation{Next}whileon{${profileName}}`,
	prevArrowLabel: `pricesexchangespagianation{Prev}whileon{${profileName}}`,
	label: `pricesexchangespagianationwhileon{${profileName}}`,
});

/**
 * Gets Table Simple component
 * @param {Object} keyMetrics fundamental data
 * @param {string} profileName current profile name
 * @param {Object} tableFooter footer for the table
 * @returns Server side ready react component
 */
const getTableSimple = (keyMetrics = {}, profileName = '', tableFooter = {}) => {
	const tableSimpleData = {
		dataPerPage: 5,
		data: keyMetrics.exchanges || [],
		tableHeaders: ['Exchange', 'Average Price'],
		rowDataKeys: ['market', 'price_by_exchange_1d'],
		isPaginationAdvanced: true,
		paginationTheme,
		size: 'medium',
	};

	const trackingProps = {
		trackingProps: getTableSimpleTracking(profileName),
	};

	return useReactComponent(TableSimple, Object.assign(tableSimpleData, trackingProps, tableFooter));
};

module.exports = {
	getTableSimple,
};
