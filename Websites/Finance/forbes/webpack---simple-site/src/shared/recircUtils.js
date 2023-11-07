/**
 * Prevent the current article from being displayed in recirc unit,
 * And slice array to desired limit
 * @param {Object[]} relatedArticles Array of articles
 * @param {String} articleUri the current article uri
 * @param {Number} limit size of the array to return
 * @returns {Object[]} Data for the recirc unit
 */
const filterArticles = (relatedArticles = [], articleUri = '', limit = 1) => relatedArticles
	.filter((article) => !!article.uri && article.uri.toLowerCase().replace('https', 'http') !== articleUri.toLowerCase().replace('https', 'http'))
	.slice(0, limit);

/**
 * Get the limit of articles to display on market place widget recirc module
 * @param {String} widgetId type of market place widget
 * @returns {Number} limit for number of articles to display in market place widget module
 */
function getMarketPlaceLimit(widgetId = '') {
	if (widgetId === '4') {
		return 3;
	}
	return ['1', '3'].includes(widgetId) ? 1 : 2;
}

/**
 * Get the name to display for market place widget click tracking and cd 106 value
 * @param {String} widgetId type of market place widget
 * @param {String} type name of market place recirc (e.g. Advisor or Wheels)
 * @returns {String} advisor recirc click track and cd 106 value
 */
function getMarketPlaceTrackingName(widgetId = '', type = 'advisor') {
	const widgetNames = [undefined, 'Single Article', 'Multiple Articles', 'Single Link', 'Multiple Links'];
	const widgetName = widgetNames[widgetId] ? ` - ${widgetNames[widgetId]}` : '';
	type = type.charAt(0).toUpperCase() + type.slice(1);
	return `${type} Recirc${widgetName}`;
}

module.exports = {
	filterArticles,
	getMarketPlaceLimit,
	getMarketPlaceTrackingName,
};
