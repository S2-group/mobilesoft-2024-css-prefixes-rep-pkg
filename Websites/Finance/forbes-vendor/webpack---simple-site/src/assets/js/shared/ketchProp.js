/* eslint-disable */
// this file contains the ketch script that is appended to the head of simple-site
import {
	isEurope,
	isChina,
	isUsDpa,
} from './clientConfigService';
import { checkJurisdiction, userGaveFullConsent, checkConsentCookieLoaded } from './ketchUtils';

/**
 * External ketch script to add ketch tag to the head of simple-site
 */
window.ketchStubsPreloaded = true;
if (isEurope || isChina || isUsDpa) {
	(function () {
		window.ketchStubsPreloaded = true;
		window.semaphore = window.semaphore || [],
			window.ketch = function () {
				window.semaphore.push(arguments)
			};
		var urlSearchParams = new URLSearchParams(document.location.search);
		var ketchPropertyName = urlSearchParams.has('property') ? urlSearchParams.get('property') : 'website_smart_tag';
		var ketchScript = document.createElement('script');
		ketchScript.type = 'text/javascript',
			ketchScript.src = 'https://global.ketchcdn.com/web/v2/config/forbes/'.concat(ketchPropertyName, '/boot.js'),
			ketchScript.defer = ketchScript.async = !0, document.getElementsByTagName('head')[0].appendChild(ketchScript);
	}());
}

/**
 * disable the page navigation when the ketch experience is open
 */
function disablePageNavigation() {
	const overlay = document.createElement('div');
	overlay.id = 'ketch-consent-overlay';
	overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background-color:black;opacity:0.5;z-index:2000;';

	try {
		document.body.appendChild(overlay);
	} catch {
		console.log('error while appending overlay');
	}
}

/**
* enable the page navigation when the ketch experience is closed
*/
function enablePageNavigation() {
	const overlay = document.getElementById('ketch-consent-overlay');

	if (overlay) {
		overlay.remove();
	}
}

/**
 * set the trustArc cookie to the same value as the ketch cookie
 * @param {boolean} californiaFirstVisit returns if the cookie is not set for 
 * california users
 */
function setTrustArcCookie(californiaFirstVisit) {
	const expiry = new Date();

	expiry.setFullYear(expiry.getFullYear() + 1);
	document.cookie = 'notice_gdpr_prefs=; Path=/; Domain=.forbes.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

	if (userGaveFullConsent() || californiaFirstVisit) {
		document.cookie = 'notice_gdpr_prefs=0,1,2; Path=/;expires=' + expiry.toUTCString();
	} else {
		document.cookie = 'notice_gdpr_prefs=0; Path=/;expires=' + expiry.toUTCString();
	}
};

/**
 * check if the user loaction and reloads the page accordingly for analytics to load on the page
 * also it remove the query params that simplesite recieves when the user is visiting from other projects
 * if the user accepted the consent
 * @param {string} reason the reason of the ketch event
 */
function experienceClosed(reason) {
	if ((isEurope || isChina || checkJurisdiction()) && reason !== 'willNotShow') {
		setTrustArcCookie();
		window.location.reload();
	}
}

/**
 * sets the consent cookie for california users first time they enter the site 
 * if ketch is not loaded
 */
if (isUsDpa && !checkConsentCookieLoaded) {
	setTrustArcCookie(true);
}

/**
 * Adds ketch events if the user is from EU or china or usDpa
 */
if (isEurope || isChina || isUsDpa) {
	window.semaphore.push(['onHideExperience', experienceClosed]);
	window.semaphore.push(['onConsent', setTrustArcCookie]);

	if ((isEurope || isChina)) {
		window.semaphore.push(['onWillShowExperience', disablePageNavigation]);
		window.semaphore.push(['onHideExperience', enablePageNavigation]);
	}
}
