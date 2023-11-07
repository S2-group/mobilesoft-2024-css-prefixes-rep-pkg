import checkStatus from '../../shared/checkStatus';
import { fireGAEvent } from '../../shared/tracking';
import { getRecircAlgo, createRecircStory } from './recircBlockAlgo';

/**
 * Used to fire tracking event for SEO Automated Recirc content to determine the data source.
 * Currently the available sources are by mostPopular (chan/Sec) or valerie
 * @param {string} eventLabel the source of SEO Automated Recirc data
 */
function fireTrackingEvent(eventLabel = '') {
	const GAData = {
		eventAction: 'RecircData',
		eventLabel,
	};

	fireGAEvent(GAData);
}

/**
 * Update SEO html with personalized content and fire tracking event
 * @param {Object[]} recircData Data for the SEO recirc unit
 * @param {map} recircParams recirc algo parameters.
 */
const updateSEOUnitHTML = (recircData = [], recircParams) => {
	const seoRecircWrapper = document.querySelector('.recirc-module .recirc-articles');

	if (seoRecircWrapper) {
		const recircBlock = createRecircStory(recircData, recircParams.get('recircClick'));

		// if valerie content doesn't exist, then the SEO Automated Content source will be mostPopular
		let eventLabel = 'mostpopdataserved';
		if (recircBlock) {
			seoRecircWrapper.innerHTML = recircBlock;
			seoRecircWrapper.classList.add('valerie-bot-stories');
			eventLabel = recircParams.get('recircLabel');
		}
		fireTrackingEvent(eventLabel);
	}
};

/**
 * Set the recirc parameters
 * @param {string} url Recirc algo url.
 * @param {string} label Recirc algo event label.
 * @param {string} click Recirc algo click tracking.
 * @returns {Map} recirc parameters
 */
const setRecircParams = (url, label, click) => (
	new Map([
		['recircUrl', url],
		['recircLabel', label],
		['recircClick', click],
	])
);

/**
 * Use collaborative algo to power in-article SEO Recirc Unit.
 */
const updateSEORecircUnits = async () => {
	const recircAlgo = await getRecircAlgo();

	if (!recircAlgo) {
		return;
	}

	const { naturalID = '' } = window.forbes['simple-site'].tracking;
	const recircParams = setRecircParams(`https://valerie.forbes.com/recommend?algorithm=collaborative&naturalId=${naturalID}`, 'collabfilteringdataserved', 'Collaborative Filtering - Automated Recirc - Link');

	await fetch(recircParams.get('recircUrl'))
		.then((response) => checkStatus(response))
		.then((res) => res.json())
		.then((data) => updateSEOUnitHTML(data.result.slice(0, 3), recircParams));
};

document.addEventListener('DOMContentLoaded', () => {
	updateSEORecircUnits();
});
