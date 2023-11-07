const React = require('react');

const { default: Subnav } = require('@forbes/fbs-components/dist/cjs/components/deprecated/Subnav/Subnav');
const { default: SubnavItem } = require('@forbes/fbs-components/dist/cjs/components/deprecated/Subnav/SubnavItem');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');
const { reactComponentsTracking } = require('../../shared/react-tracking');
const { fdaLogo } = require('../../../svg');

/**
 * Prepares tracking props data
 * @param {string} label sub nav tracking label
 * @returns tracking props data
 */
const handleSubnavTracking = (label) => () => reactComponentsTracking('Forbes Digital Assets', 'Click', label);

/**
 * Parses subnav items
 * @param {Object[]} subnavItemsData list of sub nav items
 * @returns List of parsed subnav items
 */
const parseSubnavItems = (subnavItemsData = [], pageName) => (subnavItemsData.map((subnavItem) => ({
	name: subnavItem.title || '',
	href: subnavItem.url || '',
	...((subnavItem.sections || []).length > 0 && {
		subMenuData: subnavItem.sections.map((section) => {
			const subMenulink = React.createElement('a', {
				href: section.sectionUrl,
				onClick: handleSubnavTracking(`selected{${section.sectionTitle}}whileon{${pageName}}`),
			}, section.sectionTitle);

			return {
				title: section.sectionTitle, link: subMenulink,
			};
		}),
	}),
})));

/**
 * Gets Sub Nav component
 * @param {Object[]} subnavItemsData list of sub nav items
 * @param {string} pageName current page name
 * @returns Server side ready react component
 */
const getSubnav = (subnavItemsData, pageName = 'Article') => {
	const formattedSubnavItems = parseSubnavItems(subnavItemsData, pageName);
	const svgContainer = React.createElement('span', {
		dangerouslySetInnerHTML: { __html: `<a aria-label='Forbes digital assets logo' href='https://www.forbes.com/digital-assets/'>${fdaLogo}</a>` },
		onClick: handleSubnavTracking(`selected{FDALogo}whileon{${pageName}}`),
	});
	const subnavItems = formattedSubnavItems.map((item) => React.createElement(
		SubnavItem,
		{
			...item,
			key: item.name,
			clickEvent: handleSubnavTracking(`selected{${item.name}}whileon{${pageName}}`),
		},
	));

	return useReactComponent(Subnav, {
		logo: svgContainer,
	}, subnavItems);
};

module.exports = {
	getSubnav,
};
