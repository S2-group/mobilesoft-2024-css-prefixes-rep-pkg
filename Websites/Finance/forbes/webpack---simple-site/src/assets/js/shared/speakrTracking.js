import { fireGAEvent } from './trackingUtils';

/**
 * Push the events to the dom element to push the data to the datalayer
 * @param {DOMElement} player the dom element the contains the speakr
 * @param {string} eventType the event type to add the GTM tracking to
 * @param {String} category the catogry for the event details
 * @param {string} eventTypeLabel the label for the event
 */
const pushEvent = (element, eventType, category, eventTypeLabel) => {
	const eventParams = {
		eventCategory: category,
		eventAction: eventType,
		eventLabel: eventTypeLabel,
	};

	element.addEventListener(eventType, () => {
		fireGAEvent(eventParams);
	});
};

/**
  * Adds event listeners to google speaker for tracking purposing
  * current Event listners are (load, firstView, firstPlay, ended, retechange, firstAdPlay)
*/
const addEventListenersToGoogleSpeakr = () => {
	const readAloudPlayer = document.querySelectorAll('google-read-aloud-player');
	const eventListenersToAdd = [
		'load',
		'firstview',
		'firstplay',
		'ended',
		'ratechange',
		'firstAdPlay',
		'voicechange',
	];
	const eventLabel = window.location.href;

	if (readAloudPlayer) {
		readAloudPlayer.forEach((player) => {
			eventListenersToAdd.forEach((eventType) => {
				pushEvent(player, eventType, 'GoogleReadAloudPlayer', eventLabel);
			});
		});
	}
};

export {
	addEventListenersToGoogleSpeakr,
	pushEvent,
};
