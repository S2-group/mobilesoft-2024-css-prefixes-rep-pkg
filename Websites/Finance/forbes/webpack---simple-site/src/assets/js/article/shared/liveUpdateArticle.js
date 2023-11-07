import { DateTime } from 'luxon';
import { createSimpleElement } from '../../shared/domUtilities';

/**
 *checks and removes existing metrics
 * @param {*} metrics to be checked and removed
 */
const checkMetrics = (metrics) => {
	if (metrics) {
		metrics.remove();
	}
};

/**
 * Removes metrics
 * @param {HTMLDocument} context The HTML element for a specific page
 */
const removeMetrics = (context = document, badgeMetrics = false) => {
	const badge = context.querySelector('.bertie-badge') || document.querySelector('.content-data--hidden .bertieBadge');
	const firstPipe = context.querySelector('.vert-pipe.first') || document.querySelector('.content-data--hidden .vert-pipe.first');
	const timeElement = context.querySelector('time') || document.querySelector('.content-data--hidden time');
	const timeSpan = context.querySelector('span.time') || document.querySelector('.content-data--hidden span.time');

	if (badgeMetrics) {
		checkMetrics(badge);
		checkMetrics(firstPipe);
	} else {
		checkMetrics(timeElement);
		checkMetrics(timeSpan);
	}
};

/**
 * Sets dates as EST dates
 * @param {String} date The Date in question
 */
const setEstDate = (date = '') => {
	const localDate = date ? new Date(date) : new Date();
	localDate.setTime(localDate.getTime() + localDate.getTimezoneOffset() * 60 * 1000);

	const offset = -300;
	const estDate = new Date(localDate.getTime() + offset * 60 * 1000);
	return estDate;
};

/**
 * Creates and Adds the Live Label if expiration date has not passed
 * @param {HTMLDocument} context The HTML element for a specific page
 */
const setLiveLabel = (context = document) => {
	const liveLabel = createSimpleElement('div', {
		class: 'content-data_live-label',
		style: 'animation: liveAlert 2s infinite ease; background-color: #D8361E; color: #FFFFFF; display: inline-block; font: 600 10px/12px "Work Sans", sans-serif; letter-spacing: 0.5px; padding: 6px 12px; text-transform: uppercase;',
	});
	liveLabel.innerText = 'live';

	const liveStyleTag = createSimpleElement('style');
	liveStyleTag.innerText = '@keyframes liveAlert { 0% { background-color: #D8361E } 50% { background-color: #E26957 } 100% { background-color: #D8361E } }';

	removeMetrics(context, true);
	context.parentElement.insertBefore(liveStyleTag, context);
	context.parentElement.insertBefore(liveLabel, context);
};

/**
 * Set Minute label for live template
 * @param {Number} diffMinutes minutes
 * @return {String} Minute label
 */
const setMinuteLabel = (diffMinutes) => {
	let minuteLabel;
	switch (diffMinutes) {
		case 0:
			minuteLabel = 'Just Now';
			break;
		case 1:
			minuteLabel = `${diffMinutes} minute`;
			break;
		default:
			minuteLabel = `${diffMinutes} minutes`;
			break;
	}

	return minuteLabel;
};

/**
 * Calculates the difference in current date and update date
 * @param {String} updateDate The update dates
 * @param {boolean} isMini True if mini update in article, false otherwise.
 * @param {boolean} isTop True if was in the top of article, false otherwise.
 * @return {Object} An object with hours and label
 */
const setDateCalculations = (updateDate = '', isMini = false, isTop = false) => {
	const currentDate = setEstDate();
	const updatedDate = setEstDate(updateDate);
	const diffMs = currentDate - updatedDate;
	const diffDays = Math.floor(diffMs / 86400000);
	const diffHours = Math.floor((diffMs % 86400000) / 3600000);
	const diffMinutes = Math.round(((diffMs % 86400000) % 3600000) / 60000);
	const hourLabel = `${diffHours} hour${diffHours !== 1 ? 's' : ''} and `;
	const minuteLabel = setMinuteLabel(diffMinutes);
	const updateLabel = `${isMini || !isTop ? '' : 'Updated'} ${diffHours ? hourLabel : ''}${diffHours > 0 && diffMinutes === 0 ? '' : minuteLabel} ${minuteLabel !== 'Just Now' ? 'ago' : ''}`;

	return {
		diffDays,
		diffHours,
		updateLabel,
	};
};

/**
 * Replaces EST with EDT if the Eastern Daylight Time is active
 * @param {Array} recentUpdate array of nodes
 */
const updateTimestamp = (recentUpdate = []) => {
	const timeStamp = Number.parseInt(recentUpdate.getAttribute('data-sort-time'), 10);
	const parsedTimestamp = parseInt(timeStamp, 10);
	const utc = DateTime.fromMillis(parsedTimestamp).toUTC();
	const date = DateTime.fromISO(utc).setZone('America/New_York');
	recentUpdate.querySelector('.live-update-timestamp').innerHTML = String(date.toFormat('MMM d, y, hh:mma ZZZZ'))
		.replace('AM', 'am')
		.replace('PM', 'pm');
};

/**
 * Creates and Adds the Live Update Label if difference is over 4 hours
 * @param {HTMLDocument} context The HTML element for a specific page
 * @param {Number} liveUpdate The live update time
 * @param {Array} recentUpdates array of nodes
 * @param {Boolean} live mini article is new update or not
 * @param {Number} index index of the recent update
 */
const setLiveUpdate = (context = document, liveUpdate = null, recentUpdate = {}, live = false, index) => {
	if (!liveUpdate) {
		return;
	}

	const { diffDays = 0, diffHours = 4, updateLabel = '' } = setDateCalculations(Number.parseInt(liveUpdate, 10), false, true);
	if ((recentUpdate.classList.contains('live-update') && (diffHours < 4 && diffDays < 1)) && !live) {
		updateTimestamp(recentUpdate);
	}

	if (diffDays || diffHours > 4) {
		updateTimestamp(recentUpdate);
		return;
	}
	const updateClass = 'content-data__updated-label';
	const updatedTimeLabel = createSimpleElement('div', {
		class: !diffHours ? `${updateClass} time--red` : updateClass,
		style: `${diffHours < 2 ? 'color: #D8361E;' : ''} display: inline-block;`,
	});
	updatedTimeLabel.innerText = updateLabel;

	removeMetrics(context);
	if (index === 0) context.insertBefore(updatedTimeLabel, context.firstChild);
};

/**
 * Handles a very specific corner case, which is if a vestpocket appears right before a live update container
 * there will be 2 borders, so if that happens we remove one of them
 * @param {HTMLDocument} context The HTML element for a specific page
 */
const updateVestPockets = (context = document) => {
	const vestPocketElement = context.querySelector('.vestpocket');
	if (vestPocketElement) {
		const liveElement = vestPocketElement.nextElementSibling;
		if (liveElement && liveElement.classList.contains('live-update')) {
			liveElement.classList.add('live-update--top');
		}
	}
};

/**
 * Loops through recent updated stories and updates their timestamp
 * @param {Array} recentUpdates array of nodes
 * @param {HTMLDocument} metrics The HTML element for a specific page
 * @param {Boolean} live mini article is new update or not
 * @returns updated values of each recent update
 */
const recentLiveUpdates = (recentUpdates, metrics, live) => (
	recentUpdates.forEach((item, index) => {
		const update = item.getAttribute('data-sort-time') || '';
		setLiveUpdate(metrics, update, item, live, index);
	})
);

/**
 * Inserts pageviews onto the article page
 * @param {HTMLDocument} context The HTML element for a specific page
 */
const setLiveTemplateMetrics = (context = document) => {
	const metrics = ((context.classList || {}).value || '').includes('content-data--hidden') ? context : context.querySelector('.content-data--hidden');
	const recentArticle = Array.from(document.querySelectorAll('article')).pop();
	const recentUpdates = recentArticle.querySelectorAll('.live-update');

	if (!metrics) {
		return;
	}

	const liveExpiration = metrics.getAttribute('data-date-expiration');
	const currentDate = setEstDate();
	const expirationDate = setEstDate(Number.parseInt(liveExpiration, 10));

	if (expirationDate.getTime() > currentDate.getTime()) {
		setLiveLabel(metrics);
		metrics.classList.remove('content-data--hidden');
		recentLiveUpdates(recentUpdates, metrics, true);
	} else if (recentUpdates) {
		recentLiveUpdates(recentUpdates, metrics, false);
	}

	metrics.classList.remove('content-data--hidden');
	updateVestPockets(recentArticle);
};

export {
	setLiveTemplateMetrics,
	setEstDate,
	setDateCalculations,
};
