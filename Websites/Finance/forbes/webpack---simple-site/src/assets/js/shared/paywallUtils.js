import { zephr } from '@forbes/fbs-tracking';
import {
	getCookie,
	createCookie,
} from '../../../shared/cookieUtils';

// Global state is necessary since Piano events could only be registered once for this setup
// @todo: rework registration as Zephr ones seem OK.
const currentObservables = [];
const timeouts = {};

/**
 * Checks if the current article is running on a premium paywall
 * @returns True if premium paywalled, false otherwise
 */
const isContentPremium = () => window.forbes['simple-site'].tracking.contentPaywall === 'premium';

const isMemberOnlyEvent = () => window.forbes['simple-site'].tracking.bertieBadgeSlugs.includes('myforbes-events');

const isNoPaywall = () => window.forbes['simple-site'].tracking.bertieBadgeSlugs.includes('no-paywall');

const isZetteUser = () => window.forbes.lastCustomData?.zette_access;

/**
 * Checks if the current user is logged into Bertie
 * @returns True if user is logged into Bertie
 */
const isBertieUserLoggedIn = () => window.forbes['simple-site'].tracking.login === 'true';

const doesUserHaveAccess = () => zephr.doesUserHaveProduct([...zephr.premiumPaywallProducts, ...Object.keys(zephr.zephrProductBundle)]);

const unpause = () => {
	// On Premium content, the paywall shows if:
	// * You are not a Bertie user
	// * There is not a badge for no-paywall or member only events
	// * You are not a Zette user who purchased the article
	// * You do not have any of the valid paywall resource accesses
	if (isContentPremium()
		&& !isBertieUserLoggedIn()
		&& !isMemberOnlyEvent()
		&& !isNoPaywall()
		&& !isZetteUser()
		&& !doesUserHaveAccess()
	) {
		clearTimeout(timeouts.unpauseTimeout);
		zephr.showModal('article-modal');
		return;
	}

	while (currentObservables.length) {
		currentObservables.shift().forEach((observable) => observable.unpause());
	}
	clearTimeout(timeouts.unpauseTimeout);
};

document.addEventListener('zephr.browserDecisionsFinished', () => {
	const { accessDetails: { trials = {} } } = window.Zephr;

	const meterStatus = Object.values(trials).find((trial) => trial.tracker === 'article-metered');

	if (!meterStatus) {
		return;
	}

	const credits = meterStatus.remainingCredits;

	let meterValue = 'ok';
	if (credits === 1) {
		meterValue = 'expiring';
	} else if (credits === 0) {
		meterValue = 'expired';
	}
	console.log('Setting status cookie', meterValue);
	document.cookie = createCookie('_pc_meter_expiration', meterValue, Date.now() + 1000 * 24 * 31);
});

const registerEvents = (callback, timeoutName) => {
	console.log('Events registering!', timeoutName);
	document.addEventListener('zephr.browserDecisionsFinished', () => {
		if (isContentPremium()) {
			callback();
			return;
		}

		// Match any combination of reg/pay wall from outcome name. Ads should not render underneath, and article-modal should show
		const didPaywallFire = /.*(?:\s|^)(reg|pay)[-\s]?wall(?:\s|$).*/i.test(window.Zephr.outcomes?.article?.outcomeLabel);
		if (didPaywallFire) {
			clearTimeout(timeouts[timeoutName]);
			zephr.showModal('article-modal');
		} else {
			callback();
		}
	});
};

/**
 * Checks if the page meter is expiring or already expired
 * @returns True if expiring or expired, false otherwise
 */
const isMeterExpiring = () => {
	const meterCookie = (getCookie(document.cookie, '_pc_meter_expiration') || '').split('=') || [];
	return meterCookie.length && ['expiring', 'expired'].includes(meterCookie[1]);
};

let meterEventsRegistered = false;
/**
 * Prevents observables from firing when a paywall event is expired.
 * Delays observables when paywall is about to expire until expiration status is confirmed
 * @param {Array<Observable>} observables
 */
const runAfterMeterVerified = (observables) => {
	if (!isBertieUserLoggedIn() && (isMeterExpiring() || isContentPremium())) {
		// Fallback to restart observables in the event something goes horribly wrong
		clearTimeout(timeouts.unpauseTimeout);
		timeouts.unpauseTimeout = setTimeout(unpause, 30000);

		currentObservables.push(observables);
		currentObservables.forEach((batchedObservables) => batchedObservables.forEach((observable) => observable.pause()));

		if (!meterEventsRegistered) {
			registerEvents(unpause, 'unpauseTimeout');
			meterEventsRegistered = true;
		}
	}
};

let videoEventsRegistered = false;
const delayedVideos = [];

/**
 * Reattaches previously detached videos
 */
const reattachVideos = () => {
	if (!isBertieUserLoggedIn() && isContentPremium()) {
		if (!doesUserHaveAccess()) {
			clearTimeout(timeouts.videoTimeout);
			return;
		}
	}

	let detachedVideo = delayedVideos.shift();
	while (detachedVideo) {
		detachedVideo.parent.insertBefore(detachedVideo.video, detachedVideo.filler);
		detachedVideo.parent.removeChild(detachedVideo.filler);
		detachedVideo = delayedVideos.shift();
	}
};

/**
 * Prevents autoplay videos from playing until paywall callbacks complete
 * @param {Object} article Current article to process
 */
const handleAutoplayVideos = (article) => {
	if (!isBertieUserLoggedIn() && (isMeterExpiring() || isContentPremium())) {
		const videos = article.element.querySelectorAll(article.videoSelector || 'fbs-video[autoplay],amp-brightcove[data-param-autoplay="true"]');

		clearTimeout(timeouts.videoTimeout);

		if (videos.length === 0) {
			return;
		}

		// Fallback to restart videos in the event something goes horribly wron
		timeouts.videoTimeout = setTimeout(reattachVideos, 30000);

		videos.forEach((video) => {
			const filler = document.createElement('div');
			filler.className = 'video-placeholder';
			delayedVideos.push({
				parent: video.parentElement,
				next: video.nextSibling,
				filler,
				video,
			});
			video.parentElement.insertBefore(filler, video.nextSibling);
			video.parentElement.removeChild(video);
		});

		if (!videoEventsRegistered) {
			registerEvents(reattachVideos, 'videoTimeout');
			videoEventsRegistered = true;
		}
	}
};

const clearPaywallQueues = () => {
	while (currentObservables.length) {
		currentObservables.shift().forEach((observable) => {
			observable.clear();
		});
	}
	while (delayedVideos.length) {
		delayedVideos.shift();
	}
};

export {
	clearPaywallQueues,
	runAfterMeterVerified,
	handleAutoplayVideos,
	isMeterExpiring,
};
