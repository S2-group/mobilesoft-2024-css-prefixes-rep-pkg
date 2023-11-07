/**
 * Push tracking event to Google Tag Manager data layer.
 *
 * @param {string} category Category of tracking event.
 * @param {string} action Action of tracking event .
 * @param {string} label Label of tracking event.
 */
const reactComponentsTracking = (category, action, label) => {
	window.dataLayer.push({
		event: 'analyticsEvent',
		'event category': category,
		'event action': action,
		'event label': label,
	});
};

module.exports = {
	reactComponentsTracking,
};
