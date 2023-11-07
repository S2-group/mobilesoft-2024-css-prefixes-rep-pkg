const { default: AttributionBadge } = require('@forbes/fbs-components/dist/cjs/components/AttributionBadge/AttributionBadge');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');

const attributionBadgeData = {
	badgeLink: 'https://nomics.com?utm_source=website&utm_medium=partner&utm_campaign=Forbes',
	rel: 'noopener noreferrer',
	target: '_blank',
};

/**
 * Gets Attribution Badge component
 * @param {React.children} children prop to be passed to component
 * @returns Server side ready react component
 */
const getAttributionBadge = (children) => useReactComponent(AttributionBadge, {
	...attributionBadgeData,
}, children);

module.exports = {
	getAttributionBadge,
};
