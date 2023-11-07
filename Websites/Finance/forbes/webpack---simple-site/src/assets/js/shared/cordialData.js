/* eslint-disable no-undef */
import FbsCordialService from '@forbes/fbs-cordial/dist/fbsCordialService';
import { getCookie } from '../../../shared/cookieUtils';

// User resources ID's
const userResources = ((getCookie(document.cookie, 'fbs-zephr-access') || '').split('=')[1] || '').split(',').slice(1);

/**
 * send fuse data to pushly
 * @param {Object} fuse fuse data object
 * @returns {Object} returns data objects
 */
function sendToPushly(fuse = {}, cordialData = {}) {
	if (cordialData) {
		return {
			...fuse,
			...cordialData,
		};
	}
	return {
		...userResources,
		...fuse,
	};
}

/**
 * Sets up the cordial service for the specified page type,
 * if one does not already exist
 * @param {String} pageType
 */
function setupCordialService(pageType) {
	window.fbsCordial = window.fbsCordial || new FbsCordialService();
	window.fbsCordial.pageType = pageType;
	// populates the dataLayer
	window.fbsCordial.getUserCordialData()
		.then((cordialData) => {
			// Add attributes to the subscriber's profiles.
			if ((((window.PushlySDK || {}).context || {}).user || {}).puuid && Object.keys(cordialData).length !== 0) {
				cordialData.userResources = userResources;
				pushly('profile', sendToPushly(JSON.parse(window.localStorage.fpd_fuse), cordialData));
			}
		});
}

export {
	setupCordialService,
	userResources,
	sendToPushly,
};
