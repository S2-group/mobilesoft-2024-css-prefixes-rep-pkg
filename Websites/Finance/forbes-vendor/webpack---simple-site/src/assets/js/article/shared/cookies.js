import { createCookie, getCookie } from '../../../../shared/cookieUtils';

// Expires at Midnight
const isIE = !!window.MSInputMethodContext && !!document.documentMode;
let expiresAtMidnight;
if (isIE) {
	expiresAtMidnight = new Date().toLocaleString('en-US');
} else {
	expiresAtMidnight = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
}
expiresAtMidnight = new Date(expiresAtMidnight);
expiresAtMidnight.setHours(23);
expiresAtMidnight.setMinutes(59);
expiresAtMidnight.setSeconds(59);

/**
 * Resets cookies to 'A'
 */
const clearCookies = () => {
	document.cookie = 'malcolm=A;path=/;domain=.forbes.com;';
	document.cookie = 'forbesbeta=A;path=/;domain=.forbes.com;';
	if (window.location.href.split('?')[1]) {
		window.location = window.location.href.split('?')[0];
	} else {
		window.location.reload();
	}
};

/**
 * Checks cookies and sets new cookies if a change is needed
 */
const checkCookies = () => {
	const { 'simple-site': { bucket = 'A' } = {} } = window.forbes;
	const betaFlag = document.querySelector('.beta-flag.beta-flag-hidden');
	const reloadType = ((performance || {}).navigation || {}).type || 0;

	// If the user did not go back in history, then we can set the cookie to whatever the bucket is.
	if (reloadType !== 2) {
		document.cookie = createCookie('malcolm', bucket, expiresAtMidnight.toUTCString());
		document.cookie = createCookie('forbesbeta', bucket === 'A' ? 'A' : 'B', expiresAtMidnight.toUTCString());
	}

	// If the bucketCookie is not 'A', we show the beta flag
	const bucketCookie = (getCookie(document.cookie, 'malcolm') || '').split('=')[1] || 'A';
	if (bucketCookie !== 'A' && betaFlag) {
		betaFlag.classList.remove('beta-flag-hidden');
		const betaSpan = betaFlag.querySelector('span');
		betaSpan.addEventListener('click', clearCookies);
	}
};

document.addEventListener('DOMContentLoaded', checkCookies);
