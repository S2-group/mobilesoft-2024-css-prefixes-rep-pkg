/* eslint-disable react/no-invalid-html-attribute */
const React = require('react');
const { default: Accordion } = require('@forbes/fbs-components/dist/cjs/components/Accordion/Accordion');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');
const { reactComponentsTracking } = require('../../shared/react-tracking');

const resources = {
	Community: ['telegram', 'reddit', 'discord', 'bitcointalk'],
	'Source Code': ['github'],
	'Social Media': ['youtube', 'linkedin', 'twitter', 'blog', 'medium', 'facebook'],
};

/**
 * Handles resources tracking
 * @param {string} label resource item tacking label
 * @returns tracking props data
 */
const handleResourcesTracking = (label) => () => reactComponentsTracking('Forbes Digital Assets', 'Click', label);

/**
 * Prepares accordion tracking props data
 * @param {string} accordionName accordion name
 * @param {string} profileName current profile name
 * @returns tracking props data
 */
const getAccordionTracking = (accordionName, profileName) => ({
	track: reactComponentsTracking,
	category: 'Forbes Digital Assets',
	action: 'Click',
	openingLabel: `resources{${accordionName}}{opened}whileon{${profileName}}`,
	closingLabel: `resources{${accordionName}}{closed}whileon{${profileName}}`,
});

/**
 * Gets accordion react component.
 * @param {Object} coinData content crypto data
 * @returns Server side ready react component
 */
const getAccordion = (coinData) => {
	const resourcesKeys = Object.keys(resources);
	const accordionData = resourcesKeys.map((resource) => ({
		header: resource,
		children: resources[resource].map((stats) => (
			coinData[stats] && React.createElement('a', {
				href: coinData[stats],
				className: 'resource-accordion__link',
				onClick: handleResourcesTracking(`resources{${stats}}whileon{${coinData.name}}`),
				target: '_blank',
				rel: 'noopener noreferrer',
				key: `key-${stats}`,
			}, stats)
		)),
	}));

	return accordionData.map((data, index) => (
		data.children?.some(Boolean) && useReactComponent(Accordion,
			{ header: data.header, trackingProps: getAccordionTracking(data.header, coinData.name), index },
			data.children)
	)).filter(Boolean);
};

module.exports = {
	getAccordion,
};
