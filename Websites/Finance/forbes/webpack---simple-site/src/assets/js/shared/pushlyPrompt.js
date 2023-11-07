/* eslint-disable no-undef */

import { getFvid } from './tracking';
import { sendToPushly } from './cordialData';
import { isMeterExpiring } from './paywallUtils';
import { getAbParam } from './adblock';
import isServiceWorkerSupported from './serviceWorker';
import { userGaveFullConsent } from './ketchUtils';

/**
 * Sets pushly user id and opt in status to localstoarge
 */
async function setPushlyLocalStorage(uid) {
	const { localStorage } = window;
	const pushlyOpt = await (((PushlySDK || {}).context || {}).user || {}).isSubscribed();

	try {
		localStorage.setItem('pushlyUserId', uid || '');
		localStorage.setItem('pushlyOptInStatus', pushlyOpt || 'false');
	} catch (error) {
		console.error(error);
	}
}

/**
 * Checks paid content attributes.
 * @param {Object} check Simple site window object.
 * @returns {Boolean} True when the content is not one of the paid types.
 */
function checkPaidContent(check) {
	return !check.isPaidContent && !check.premiumPage && !check.advoiceBrand && !check.insights && !((check.gallery || {}).isBrandVoice || '');
}

/**
 * Checks special slot And swim lane attributes.
 * @param {Object} check Simple site window object.
 * @returns {Boolean} True when the article isn't special slot or swim lane.
 */
function checkSpecialSlotAndSwimLane(check) {
	return (check.specialSlot || '') === '' && ((check.tracking || {}).slot || '') === '' && (check.swimLane || '') === '';
}

/**
 * Checks for newsletter content.
 * @param {Object} check Simple site window object.
 */
function checkNewsletter(check) {
	return ((check.tracking || {}).blogType || '') !== 'newsletter' && (check.channelName || '') !== 'Newsletters';
}

/**
 * Checks for excluded content.
 * @param {Object} check Simple site window object.
 * @returns {Boolean} True when the content excluded.
 */
function checkExcluded(check) {
	const contribTypes = ['CommunityVoice', 'Marketplace', 'Forbes Marketplace', 'AuthorVoice', 'Newsletter'];
	return !contribTypes.includes((check.tracking || {}).contribType || '') && checkNewsletter(check);
}

/**
 * Asks user to allow notifications.
 */
async function prompt() {
	const check = window.forbes['simple-site'] || {};
	const isNotSpecialSlot = checkSpecialSlotAndSwimLane(check);
	const isNotPaidContent = checkPaidContent(check);
	// Push notifications should be excluded from newsletters
	const isNotNewsletterContent = ((check.tracking || {}).blogType || '') !== 'newsletter';
	const isNotExcluded = checkExcluded(check, isNotNewsletterContent);

	// Push notifications should be excluded from users who hit the paywall.
	// Push notifications should be excluded from sponsored content and branded content.
	if (isNotPaidContent && isNotSpecialSlot && !check.isSubscriber && !isMeterExpiring() && isNotExcluded) {
		pushly('show_prompt');
	}

	// Add attributes to the subscriber's profiles.
	if (PushlySDK.context?.user?.puuid) {
		pushly('profile', sendToPushly(JSON.parse((window.localStorage || {}).fpd_fuse || '{}')));
		await setPushlyLocalStorage(PushlySDK.context.user.puuid);
	}
}

if (userGaveFullConsent() && isServiceWorkerSupported) {
	const pushlySDK = document.createElement('script');

	pushlySDK.async = 'async';
	pushlySDK.src = 'https://cdn.p-n.io/pushly-sdk.min.js?domain_key=qmhdz0KFKfsfhQQeCP5Js1NFta1P8jkwbf05';

	const pushlyScript = document.createElement('script');

	// Assign an ID to link up with the PUID
	pushlyScript.type = 'text/javascript';
	pushlyScript.innerHTML = `var PushlySDK = window.PushlySDK || [];
	function pushly() { PushlySDK.push(arguments) }
	pushly('load', {
		domainKey: 'qmhdz0KFKfsfhQQeCP5Js1NFta1P8jkwbf05',
		sw:'/service-worker.js',
		requireConsent: true,
		externalId: '${getFvid()}'
	});`;

	document.getElementsByTagName('head')[0].appendChild(pushlySDK);
	document.getElementsByTagName('head')[0].appendChild(pushlyScript);

	// Push notifications should be excluded from users who have adblock.
	document.addEventListener('fbs-ad-block-init', async () => {
		let isPromptAllowed = window.PushlySDK?.context && !getAbParam();

		if (isPromptAllowed) {
			await prompt();
		} else {
			const interval = setInterval(async () => {
				isPromptAllowed = window.PushlySDK?.context && !getAbParam();

				if (isPromptAllowed) {
					await prompt();
					clearInterval(interval);
				}
			}, 500);
		}
	});
}
