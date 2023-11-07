import {
	FbsTrackingService,
} from '@forbes/fbs-tracking';

import {
	getCookie,
} from '../../../shared/cookieUtils';
import {
	isMobile,
} from './is-mobile';
import {
	getTracking,
	isEurope,
	isLocal,
	isChina,
	isUsDpa,
	isProd,
	swimLane,
	isE2E,
} from './clientConfigService';
import {
	getRecircAlgo,
} from '../article/shared/recircBlockAlgo';
import { fireGAEvent as fireGAEventCallback } from './trackingUtils';

window.trackingService = window.trackingService || new FbsTrackingService();
const {
	trackingService,
} = window;

let postalCode;
trackingService.isEurope = isEurope;
trackingService.isChina = isChina;
trackingService.isUsDpa = isUsDpa;

export const fireGAEvent = fireGAEventCallback;

/**
 * Fire a GA event when element is considered by the threshold to be in view.
 * @param {HTMLElement} element The element to track the inview.
 * @param {String} eventLabel The tracking event label.
 * @param {Number} threshold The threshold set to fire the inview tracking.
 * @param {String} eventAction The tracking event action.
 * @returns if html element is null.
 */
export const primeInviewEvent = (element, eventLabel, threshold = 1, eventAction = 'scroll') => {
	if (!element) {
		return;
	}

	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			const GAData = {
				eventAction,
				eventLabel,
			};
			fireGAEvent(GAData);
			observer.unobserve(entries[0].target);
		}
	}, {
		threshold,
	});

	observer.observe(element);
};

/**
 * Uses fbsTracking package to generate or get the ClientId for the fvid targeting parameter
 * @returns {string} - the client Id
 */
export const getFvid = () => trackingService.getOrCreateClientId();

/**
 * Checks if the source=bloomberg query parameter is in the current window.location
 * @returns {string} - returns 'true' if source=bloomberg is in the query parameters, '' otherwise.
 */
export const getBbgTerm = () => {
	const queryString = window.location.search.substr(1);
	const queryParamList = queryString.split('&');
	const isBbg = queryParamList.find((element) => element.match(/(^|&)source=bloomberg($|&)/));

	return isBbg ? 'true' : 'false';
};

/**
 * Generates unique id
 * @returns {string} unique id
 */
export const generateUniqueId = () => (Date.now() + Math.random().toString(36).slice(2));

/**
 * Populates cd62. The logic for this field tells GTM how the current article wound up in the current stream.
 * @param {Object} tracking Current tracking information for the current article
 * @param {Boolean} mobile Whether it is mobile or not
 * @returns {string} Tracking value for how the current article wound up in the stream
 */
const getBvLeftRailHeadline = (tracking) => {
	// First article, or pages that are not articles should have 'none' default value
	if (!tracking.index) {
		return 'none';
	}

	// If mobile it will start with the word mobile
	const bvLeftRailStr = isMobile ? 'mobile ' : '';

	// If (fbs-zephr-access) cookie with unlimited access resources is found this is a subscriber stream
	if (/RKPEVDB|R8W03AS/g.test(getCookie(document.cookie, 'fbs-zephr-access') || '') && ['insights', 'ad', 'connoisseur'].indexOf(tracking.blogType) !== -1) {
		return `${bvLeftRailStr}subscriber stream`;
	}

	// If we land on a brandvoice article, the first three articles in the mostRecent
	// are recommended.
	if (tracking.startFromBrandvoice) {
		return tracking.index < 4 ? `${bvLeftRailStr.trim()}recommend` : `${bvLeftRailStr.trim()}other`;
	}

	// If it does not start from a brandvoice article, index 1 is considered an ad, while index 5 and 8 are schedulers
	if ([1, 5, 8].indexOf(tracking.index) >= 0) {
		return tracking.ntvContentLineItemId ? `${bvLeftRailStr.trim()}ad` : `${bvLeftRailStr}scheduler`;
	}

	return `${bvLeftRailStr.trim()}other`;
};

/**
 * Returns firebase user ID using cookies.
 * @returns {string} firebase user ID
 */
const getFirebaseId = () => (getCookie(document.cookie, 'firebaseAuthUser') || '').split('=')[1];

/**
 * returns salesforce ID.
 * @returns {string} salesforce ID
 */
const getSalesforceID = () => {
	const salesforceCookie = getCookie(document.cookie, 'prospect-id');

	return salesforceCookie ? salesforceCookie.slice(salesforceCookie.indexOf('=') + 1) : undefined;
};

/**
 * Populates cd72.
 * @param {Object} tracking Current tracking information for the current article
 * @returns {string} A value
 */
const getNonBvLeftRailAd = (tracking = {}) => {
	const {
		blogType = '',
		index = 0,
		ntvContentLineItemId = '',
		startFromBrandvoice = null,
	} = tracking;

	if (typeof startFromBrandvoice !== 'boolean') {
		return '';
	}

	if (([1, 5, 8].indexOf(index) >= 0) && blogType !== 'ad' && !startFromBrandvoice && !isMobile) {
		return ntvContentLineItemId ? 'true' : 'false';
	}

	return 'false';
};
/**
 * returns CD117 and CD118 for Pushly users
 * @returns {string} Tracking value for Pushly.
 */
const setPushlyTrackingValue = () => {
	const isPushlyAllowed = window.PushlySDK;
	let pushlyUserId; let pushlyOptInStatus;
	if (isPushlyAllowed) {
		pushlyUserId = (((isPushlyAllowed || {}).context || {}).user || {}).puuid; // cd117
		pushlyOptInStatus = (((isPushlyAllowed || {}).context || {}).user || {}).isSubscribed(); // cd118
	} else {
		const { localStorage } = window;
		pushlyUserId = localStorage.getItem('pushlyUserId'); // cd117
		pushlyOptInStatus = localStorage.getItem('pushlyOptInStatus');// cd118
	}
	return {
		pushlyUserId,
		pushlyOptInStatus,
	};
};

const pushlyTracking = setPushlyTrackingValue();

/**
 * Track ID of user who got here through an email sent by cordial
 */
const setCordialContactID = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const cordialContactID = urlParams.get('cdlcid');
	if (cordialContactID) {
		localStorage.setItem('contactID', cordialContactID);
	}
};

/**
 * Prepare tracking data to be sent to GTM.
 * Takes page specific data from the server and augments it with default values, data only available on the client, and data that isn't
 * page specific.
 * @param {boolean} virtualPageview Is this a virtual page view, false or omitted for the initial page view and updating dataLayer values.
 * @returns {Object} The data needed by @forbes/fbs-tracking
 */
const prepareTracking = async (virtualPageview) => {
	const tracking = getTracking();

	const trackingData = {
		author: tracking.author || 'none',
		site: tracking.siteSlug || 'none',
		contribType: tracking.contribType || 'none',
		bertieBadgeSlugs: tracking.bertieBadgeSlugs || 'none',
		blogType: tracking.blogType || 'none',
		brandVoice: tracking.brandVoice || 'none',
		bvCategory: tracking.bvCategory || [],
		channel: tracking.channel || 'none', // cd4 - RETIRED. Needs to be removed at some point.
		slot: tracking.slot || 'none', // cd 5
		bertie: tracking.bertie || 'false', // cd10
		pageType: tracking.pageType || 'none', // cd13
		DFPSite: isMobile ? 'fdcmobile' : 'fdc.forbes', // cd15. Our site identifier for desktop and mobile.
		DFPZone: tracking.dfpZone || 'none', // cd16. The zone the page belongs to, e.g. 'home', 'pictures', 'profile', etc.
		published: tracking.publishDate || 'none', // cd17
		paragraphs: `${tracking.paragraphs || 'none'}`, // cd18
		categories: tracking.categories || 'none', // cd19
		edit: tracking.edit || 'none', // cd20
		hashtags: tracking.hashtags || 'none', // cd21
		naturalID: tracking.naturalID || 'none', // cd24
		gamZone: tracking.gamZone || 'none', // cd27
		wordCount: tracking.wordCount || 'none', // cd30
		pageNumber: `${tracking.pageNumber || 'none'}`, // cd33
		pageTotal: `${tracking.pageTotal || 'none'}`, // cd34
		publishHour: tracking.publishHour || 'none', // cd35
		updateDate: tracking.updateDate || 'none', // cd36
		updateHour: tracking.updateHour || 'none', // cd37
		section: tracking.section || 'none', // cd38
		videoPlacement: tracking.videoLocation || 'none', // cd42
		login: tracking.login || 'none', // cd46
		trendingHashtags: tracking.hashtagsTrending || 'none', // cd47
		heroImage: tracking.heroImage || 'none', // cd48
		imageCount: typeof tracking.imageCount === 'number' ? tracking.imageCount.toString() : 'none', // cd49
		customPage: tracking.customPage || 'none', // cd50
		weekdayPublish: tracking.weekdayPublish || 'none', // cd51
		contribActive: tracking.contribActive || 'none', // cd56
		primaryChannel: tracking.primaryChannel || 'none', // cd59
		primarySection: tracking.primarySection || 'none', // cd60
		bvContentSource: (tracking.brandVoice && tracking.bvContentSource) || 'none', // cd61
		bvLeftRailHeadline: getBvLeftRailHeadline(tracking), // cd62. This is only set in the stream.
		streamPosition: typeof tracking.streamPosition === 'number' ? tracking.streamPosition : 'none', // cd64
		DFPLineItemID: tracking.ntvContentLineItemId || 'none', // cd65. This is only set in the stream.
		bvProgramType: tracking.bvProgramType || 'none', // cd68
		coreBrands: tracking.coreBrands || 'none', // cd69
		contribDivision: tracking.contribDivision || 'none', // cd70
		nonBVLeftRailAd: getNonBvLeftRailAd(tracking) || 'none', // cd72
		insights: tracking.insights || 'none', // cd78
		coAuthorControl: tracking.coAuthorControl, // cd79
		newsKeywords: tracking.newsKeywords || 'none', // cd80
		coAuthor: tracking.coAuthor || 'none', // cd81
		channelNames: tracking.channelNames || 'none',
		sectionNames: tracking.sectionNames || 'none',
		cbSections: tracking.sections || '',
		cbPath: window.location.pathname,
		version: tracking.version || '',
		description: tracking.description || '',
		seniorContributor: tracking.seniorContributor || 'none',
		paidContentType: tracking.paidContentType || 'none', // cd92
		paidContentBrand: tracking.paidContentBrand || 'none', // cd93
		premiumProfiles: tracking.premiumProfiles || 'none', // cd98
		signedIn: getCookie(document.cookie, '_utp') ? 'signed-in' : 'not signed-in', // cd100
		adBlockerDetection: tracking.adBlockerDetection || undefined, // cd101
		templateType: tracking.templateType || 'none',
		templateSubType: tracking.templateSubType || 'none',
		firebaseId: getFirebaseId() || '', // cd103
		publicCompany: tracking.publicCompany || 'none', // cd104
		stockTicker: tracking.stockTicker || 'none', // cd105
		recircUnit: tracking.recircUnit || 'none', // cd106
		salesforce: getSalesforceID(), // cd108
		shPost: postalCode, // cd110
		isSponsored: tracking.isSponsored || false,
		isRetracted: tracking.isRetracted || false,
		entitySegments: (tracking.entitySegments || []).join(',') || 'none',
		testName: '', // cd112
		testVariant: '', // cd113
		ip: (window.forbes.fingerPrint || {}).ip, // cd115
		ispName: (window.forbes.fingerPrint || {}).ispName, // cd116
		isProd,
		swimLane,
		pushlyUserId: pushlyTracking.pushlyUserId || '', // cd117
		pushlyOptInStatus: pushlyTracking.pushlyOptInStatus || 'false', // cd118,
		randId: ((window.forbes || {})['simple-site'] || {}).randId, // cd120
		naturalIdVersion: tracking.naturalIdVersion || 'none', // cd122,
		resourceId: tracking.resourceId,
		contentPaywall: tracking.contentPaywall,
		categoryId: tracking.categoryId,
		isE2E,
	};

	if (virtualPageview) {
		trackingData.event = 'analyticsVPV';
		trackingData.virtualPage = 'true';
		trackingData.cbTitle = tracking.title || '';
	}

	if (tracking.streamPosition === 0) {
		const recircAlgo = await getRecircAlgo();
		trackingData.testName = recircAlgo ? 'RecircUnit' : ''; // cd112
		trackingData.testVariant = recircAlgo; // cd113
	}

	if (window.countryCode) {
		trackingData.countryCode = window.countryCode;
	}

	setCordialContactID();

	return trackingData;
};

/**
 * initializes Tracking with GeoLocation Data .
 * @param {boolean} virtualPageview Is this a page view, false for just updating dataLayer values.
 */
const initTrackingWithGeoLocation = (virtualPageview) => {
	const url = isLocal ? '/simple-data/geolocation' : 'https://geolocation.forbes.com/json/';
	fetch(url, {
		method: 'POST',
	})
		.then((res) => res.json())
		.then((data) => {
			const countryCode = data ? (data['client.geo.country_code'] || 'US') : 'US';
			const region = countryCode === 'US' ? countryCode : 'INTL';
			// eslint-disable-next-line no-underscore-dangle
			window.__region = region;
			window.countryCode = countryCode;
			postalCode = data['client.geo.encrypted_postal_code'];

			window.forbes.fingerPrint = {
				ip: data['client.encrypted_ip'],
				ispName: data['client.as.encrypted_name'],
			};
		}).catch((error) => {
			// eslint-disable-next-line no-underscore-dangle
			window.__region = '';
			console.error('Geolocation fetch error: ', error);
		})
		.then(() => {
			// We don't retry the geolocation call, so whether it succeeds or fails
			// dispatch the geo-fetch-finished event.
			const geolocationFetchedEvent = new CustomEvent('geo-fetch-finished');
			document.dispatchEvent(geolocationFetchedEvent);
			// run tracking whether geolocation succeeds or fails
			const prepareTrackingPromise = prepareTracking(virtualPageview);
			prepareTrackingPromise
				.then((trackingData) => {
					trackingService.track(trackingData, virtualPageview || true);
				});
		});
};

/**
 * Fire virtual tracking
 *
 * @param {boolean} virtualPageview Is this a page view, false for just updating dataLayer values.
 */
export const virtualTrack = (virtualPageview) => {
	const prepareTrackingPromise = prepareTracking(virtualPageview);
	prepareTrackingPromise
		.then((trackingData) => {
			trackingService.track(trackingData, virtualPageview);
		});
};

// We do not want to fire tracking on bertie preview mode.
// We need to add if AdBlock is in use for first article's tracking.
const {
	'simple-site': {
		adZone = '',
		isPreview = false,
		tracking: {
			blogType = '',
		},
	} = {},
} = window.forbes || {};

if (!isPreview) {
	if (adZone.indexOf('article') >= 0) {
		window.forbes['simple-site'].tracking = {
			...window.forbes['simple-site'].tracking,
			startFromBrandvoice: blogType === 'ad',
		};
	}

	if (!window.geolocationInit) {
		window.geolocationInit = true;
		initTrackingWithGeoLocation();
	}
}
