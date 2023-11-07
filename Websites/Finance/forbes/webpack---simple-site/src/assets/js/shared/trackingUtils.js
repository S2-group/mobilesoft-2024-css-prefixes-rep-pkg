/**
 * push the event that is fired to google analytics to the datalayer
 * @param {object} params has the data to push to the datalayer
 */
const fireGAEvent = (params) => {
	const {
		event = 'analyticsEvent',
		eventCategory = 'Template Area Interaction',
		eventAction = '',
		eventLabel = '',
	} = params;

	// Delay events until after page view or CDs won't be sent.
	if (!(window.dataLayer || [])[0]) {
		setTimeout(() => {
			fireGAEvent(params);
		}, 100);
	} else {
		window.dataLayer.push({
			event,
			'event category': eventCategory,
			'event action': eventAction,
			'event label': eventLabel,
		});
	}
};

const getIsNewsletterPage = () => window.location.pathname.split('/')[1] === 'newsletters';

const updateTrackingData = (newData) => {
	if (!window.forbes) window.forbes = {};
	if (!window.forbes['simple-site']) window.forbes['simple-site'] = {};

	window.forbes['simple-site'].tracking = {
		...window.forbes['simple-site'].tracking || {},
		...newData,
	};
};

const newsLetterSubscribeTracking = {
	track: (category, action, label) => {
		fireGAEvent({
			eventCategory: category,
			eventAction: action,
			eventLabel: label,
		});
	},
	category: 'Template Area Interaction',
	action: 'click',
	label: 'newsletter-subscribe-header',
};

module.exports = {
	fireGAEvent,
	getIsNewsletterPage,
	updateTrackingData,
	newsLetterSubscribeTracking,
};
