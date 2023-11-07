import '@webcomponents/custom-elements/src/native-shim';
import { FbsAdsService } from '@forbes/fbs-ads';
import { isMobile } from './is-mobile';
import { getBbgTerm, getFvid, generateUniqueId } from './tracking';
import { desktopAdConfig, mobileAdConfig } from '../adsConfig';
import {
	adId,
	advoiceBrand,
	currentTabName,
	fullAdZone,
	getTracking,
	isEurope,
	isChina,
	isE2E,
	isPreview,
	premiumProfile,
	isProd,
} from './clientConfigService';
import { getCookieClientId } from '../../../shared/cookieUtils';
import {
	checkForNone,
	removeSpaceAndLowerCase,
	setChanSecParam,
	setSectionParamVetted,
} from './adService';
import { checkArticleIsPremiumOrMasthead } from './stream-share';

// The criteo zone id, currently only used on desktop
const criteoZoneId = 1168044;

// E2E tests are having issues on certain ad creative loads. Try to get amazon bidding test creatives instead
if (isE2E) {
	localStorage.setItem('apstagDebug', 'true');
}

/**
 * Determines if we should cal the Fuse API
 * @param {Object} params argument object holding the clientId of the current user.
 * @returns {Boolean} True if fuse call should be made
 */
function shouldCallFuse(params = {}) {
	return (params || {}).clientId;
}

/**
 * Sets a query string to append to the Fuse call
 * @returns {String} A query string made up of channel and section values
 */
function setFuseQueryString() {
	const { tracking = {} } = (window.forbes || {})['simple-site'] || {};
	const queryParams = {
		channel: setChanSecParam(tracking, 'channel'),
		section: setChanSecParam(tracking, 'section'),
	};

	return Object.keys(queryParams).map((key) => `${key}=${encodeURIComponent(queryParams[key])}`).join('&');
}

/**
 * Returns the channel specific fbs-forbes values from fuse local storage
 * @returns {Object} fbs-forbes data, populated with individual channel objects and their fbs-forbes value
 */

function getChannelSpecificValues() {
	const result = JSON.parse(localStorage.getItem('fpd_fuse') || '{}');
	return result?.kvs?.['fbs-forbes'] || {};
}

/**
 * Sets a cookie string of objects for fpd fuse data.
 * @param {Object} size the current size to check
 */
function setFuseLocalStorage(response) {
	const { tracking = {} } = (window.forbes || {})['simple-site'] || {};
	const { localStorage } = window;
	const channels = setChanSecParam(tracking, 'channel').split(',');

	// Add timestamp for delay comparison.
	response.kvs.ts = Math.floor(Date.now() / 1000);
	const channelSpecificValues = getChannelSpecificValues();
	const currentFbsForbes = response.kvs['fbs-forbes'] || {};
	const currentFuseData = response;
	const fbsForbesPopulated = Object.keys(currentFbsForbes).length > 0;
	const channelSpecificValuesPopulated = Object.keys(channelSpecificValues).length > 0;
	// If there is new fbs-forbes data, assign it to channelSpecificValues and add to local storage
	// If there is not new fbs-forbes data, and fbs-forbes data exists, reassign it to local storage
	if (fbsForbesPopulated) {
		channels.forEach((channel) => {
			channelSpecificValues[channel] = response.kvs['fbs-forbes'];
		});

		currentFuseData.kvs['fbs-forbes'] = channelSpecificValues;
	} else if (channelSpecificValuesPopulated) {
		currentFuseData.kvs['fbs-forbes'] = channelSpecificValues;
	}
	try {
		localStorage.setItem('fpd_fuse', JSON.stringify(currentFuseData) || '');
		// reset to window.fuse for ads
		// if no fbs-forbes data from window.fuse but channelSpecificValues is populated, delete the key
		if (fbsForbesPopulated) {
			currentFuseData.kvs['fbs-forbes'] = currentFbsForbes;
		} else if (channelSpecificValuesPopulated) {
			delete currentFuseData.kvs['fbs-forbes'];
		}
	} catch (error) {
		console.error(error);
	}
}

/**
 * Makes an external api call to fetch Fuse DFP key values for client specific ad targeting based on their views.
 * @param {Object} params argument object holding the clientId of the current user.
 */
function fetchFuseSegments(params = {}) {
	const clientId = shouldCallFuse(params) ? params.clientId : getFvid();
	const queryString = setFuseQueryString();

	return fetch(`https://fuse${isProd ? '' : '-dev'}.forbes.com/fuse/${clientId || ''}?${queryString}`)
		.then((res) => res.json())
		.then((res) => {
			setFuseLocalStorage(res);
			return res;
		})
		.catch((e) => {
			console.error('Fuse Segment Error:', e);
		});
}

// The current user's unique Id
const clientId = getCookieClientId(document.cookie, isE2E);

// Make this API call before any ads logic.
const fuseSegmentsPromise = fetchFuseSegments({ clientId });
window.fuse = fuseSegmentsPromise;

window.fbsads = window.fbsads || new FbsAdsService();
const adService = window.fbsads;
// Let's make this reassignable for use cases where we need to update the zone for lazy loaded content.
let currentAdZone = fullAdZone;

/**
 * Detects whether there is a slot on the ads config for the given ad id.
 * @param {String} id the ad id of the slot
 * @returns {Boolean}
 */
export function isActiveAdSlot(id) {
	return (window.fbsads || {}).adSlots instanceof Map && Array.from(window.fbsads.adSlots.keys()).indexOf(id) >= 0;
}

/**
 * Returns a function to compare a given ad size to the targetAdSize, returning true if they are equivalent.
 * @param {Array|string} targetAdSize
 */
function compareToAdSize(targetAdSize) {
	const isArray = Array.isArray(targetAdSize);
	const { length } = targetAdSize;
	return (size) => (isArray
		? Array.isArray(size) && length === size.length && targetAdSize.every((value, index) => value === size[index])
		: targetAdSize === size);
}

// @TODO AN-3117 Refactor modification of adsConfig and audit usage by different pages in SS
const isSevenByOneSize = compareToAdSize([7, 1]);
const isSevenByTwoSize = compareToAdSize([7, 2]);
// remove [7, 1] and [7, 2] top ad size for standard desktop articles, and for gallery pages
const desktopPagesTopAdSizes = desktopAdConfig.positions.top.sizes.filter((size) => !isSevenByOneSize(size) && !isSevenByTwoSize(size));

/**
 * Return the "ss" (swimlane) query parameter if it exists.
 * @return {undefined|String}
 */
export function getSwimlane() {
	const queryParams = window.location.search.replace('?', '').split('&');
	const swimlaneParams = queryParams.map((param) => param.split('='))
		.find((item) => item[0] === 'ss' && item[1]);

	return swimlaneParams && swimlaneParams[1];
}

let desktopConfig;
let mobileConfig;

/**
 * Checks whether the current size is included in the adSizes array that should be removed
 * @param {Object[]} currentAdSizesToRemove array of the sizes that should be removed
 * @param {Object} size the current size to check
 * @returns {Boolean} a boolean value that determines whether this size should be removed or not
 */
function isRemovable(currentAdSizesToRemove, size) {
	return !!currentAdSizesToRemove.find((sizeToRemove) => JSON.stringify(size) === JSON.stringify(sizeToRemove));
}

/**
 * Removes the unwanted sizes from the adConfig to be used in the page
 * @param {Object} adPositions Object of different ad types and their sizes
 * @param {Object} adSizesToRemove Object containing the different ad types and the size to remove from them
 * @returns {Object[]} returns the newly updated adSizes
 */
function updateAdPositions(adPositions, adSizesToRemove) {
	Object.keys(adSizesToRemove).forEach((adType) => {
		// loops thro the sizes that are set by default and removes any that are included in the adSizesToRemove array
		const currentAdSizesToRemove = adSizesToRemove[adType];
		if (adPositions[adType]) {
			adPositions[adType].sizes = adPositions[adType].sizes.filter((size) => !isRemovable(currentAdSizesToRemove, size));
		}
	});

	return adPositions;
}

/**
 * takes an array that includes the ad and remove the selected sizes
 * @param {array} config configuration for the page
 * @param {array} sizesToRemove the sizes that should be removed
 * @returns {array} cpmfig updated
 */
function updateAdConfigToRemoveSizes(config, sizesToRemove) {
	const fbsAdContainer = !!document.querySelector('fbs-ad');
	return fbsAdContainer ? updateAdPositions(config.positions, sizesToRemove) : config.positions;
}

/**
 * Chooses the correct ad config for a template and allows mobile article ads to get the right templat
 * @param {boolean} isMobile True if the client is using a mobile device.
 * @returns {Object} The ad config to use.
 */
function getConfig() {
	const isMobileConfig = (isPreview && window.location.pathname.indexOf('/preview/mobile') >= 0) || isMobile;
	const config = isMobileConfig ? mobileConfig : desktopConfig;

	// Temporary solution for removing specific ad sizes on profile unpaid pages
	// should probably be extended so that all pages send back a list of unwanted
	// adsizes to be removed from the config.
	const profiles = ['places', 'profile', 'companies', 'investment-funds', 'colleges', 'teams'];
	if (profiles.some((page) => config.ad_unit_path.includes(page))) {
		// the returned value could be something like this
		const sizesToRemove = {
			moreon: [
				[820, 236],
				[620, 529],
			],
		};

		// for now we are just removing from unpaid profiles, to determine whether the profile is paid or not
		// we search for an fbs-ad container, if one exists then it's an unpaid profile, this should be removed
		// once the sizes to remove comes back with the prepare page of each profile sends back this information
		config.positions = updateAdConfigToRemoveSizes(config, sizesToRemove);
	}

	return config;
}

/**
 * Sets the window external_services object for MOAT/mnet. Supposedly the ad targeting data isn't enough.
 * @param {*} config GPT configuration object for fbs-ads
 */
function setExternalServices(config) {
	config.params = config.params || {};
	const siteZone = (config.ad_unit_path || '').split('/') || [];
	const { articleId = '' } = window.forbes['simple-site'];

	const externalParams = {
		site: siteZone[2],
		zone: (siteZone.slice(3) || []).join('/'),
		author: config.additionalMoatParams.author || '',
		brandvoice: ['ad', 'advoice'].indexOf(config.params.type) > -1,
		channel: config.params.channel,
		editorialSlot: config.params.editSlot,
		hashtags: config.params.ht,
		section: config.params.section,
		specialSlot: config.params.specialslot,
	};

	if (articleId) {
		externalParams.current_article_id = articleId;
	}

	window.external_services = Object.assign((window.external_services || {}), externalParams);
}

/**
 * Checks if the article have the decision-maker badge and
 * return jt valse according to it.
 * @param {Object} tracking Tracking data for the current article.
 * @param {String} jtValue Fuse jt value for the current article.
 * @returns {String} jt value for articles that have a decision-maker badge
 */
function DecisionMakerContent(tracking, jtValue) {
	const { bertieBadgeSlugs = '' } = tracking || {};
	const isDecisionMakerContent = bertieBadgeSlugs.indexOf('decisionmaker') > -1 || bertieBadgeSlugs.indexOf('decision-maker') > -1;

	if (isDecisionMakerContent && jtValue !== '1') {
		return '1.1';
	}
	return jtValue;
}

/**
 * This function is being called twice in the first article in the stream, should probably open a new ticket
 * It's being called once thro this file and It's being called again in streamUtilities -> changeArticle
 * We should probably add a check if this article index is 0 not to call this function in changeArticle
 * @param {Boolean} firstCall True if it's the first time Ad Params being updated.
 */
export function updateAdParams(firstCall = false) {
	const tracking = getTracking();
	const isVetted = (window.forbes['simple-site'] || {}).isVetted;
	const swimlaneUrl = advoiceBrand ? '' : getSwimlane();
	// @TODO: Rework client config service to work well with the stream.
	const swimLaneValue = ((window.forbes || {})['simple-site'] || {}).swimLane || swimlaneUrl;
	const adInventory = ((window.forbes || {})['simple-site'] || {}).adInventory || '7175';
	const sentimentScore = ((window.forbes || {})['simple-site'] || {}).sentimentScore || '';
	const tab = currentTabName || '';

	((window.forbes || {})['simple-site'] || {}).randId = generateUniqueId();

	// makes sure the ad zone stays correct for articles loaded in the stream
	if ((tracking.gamZone || '').indexOf('article') > -1) {
		currentAdZone = `/${adInventory}/${isMobile ? 'fdcmobile' : 'fdc.forbes'}/${tracking.gamZone}`;
	}

	const params = {
		// ab: getAbParam(), TODO Commented until AdOps decide Ticket UEM-411
		author: removeSpaceAndLowerCase(checkForNone(tracking.isGroupBlog ? tracking.publicationAuthor : tracking.author)),
		bbgterm: getBbgTerm(),
		channel: [isVetted ? 'forbesvetted' : setChanSecParam(tracking, 'channel')],
		editSlot: tracking.edit || '',
		fvid: getFvid(),
		ht: checkForNone(tracking.hashtags),
		id: adId || tracking.naturalID || '', // allows adops to specifically target ad sizes to these pages
		login: tracking.login || false,
		section: [isVetted ? setSectionParamVetted() : setChanSecParam(tracking, 'section')],
		specialslot: swimLaneValue ? '' : (tracking.slot || ''),
		swimlane: swimLaneValue,
		tab,
		templatetype: tracking.templateType,
		type: removeSpaceAndLowerCase(checkForNone(tracking.contribType || tracking.type)),
		badges: tracking.badges,
		advoice: tracking.brandVoice, // Update ad params to match the current article whenever the current article changes.
		mnet_adi: '',
		sentimentScore,
		randId: ((window.forbes || {})['simple-site'] || {}).randId,
	};

	if (premiumProfile) {
		params.premiumProfile = premiumProfile;
	}

	const additionalMoatParams = {
		author: checkForNone(tracking.isGroupBlog ? tracking.publicationAuthor : tracking.author),
	};

	if (tracking.editorsPick) {
		params.ep = tracking.editorsPick;
	}

	if (tracking.coverStory) {
		params.coverstory = tracking.coverStory;
	}

	if (tracking.bertieBadgeSlugs) {
		params.badges = tracking.bertieBadgeSlugs;
	}

	if (tracking.negativeSentimentCompanies) {
		params.ns = tracking.negativeSentimentCompanies;
	}

	if ((tracking.entitySegments || []).length > 0) {
		params.es = tracking.entitySegments.join(',');
		params.essrc = tracking.entitySegments.map((segment) => `${window.fbsads.getTargetingSource() ? `${window.fbsads.getTargetingSource()}_` : ''}${segment}`).join(',');
	}

	if (tracking.sentimentCompanies) {
		params.co = tracking.sentimentCompanies;
	}

	// Special slot or swimlane beat all
	if (params.specialslot || params.swimlane) {
		params.channel = '';
		params.section = '';
		params.displaychannel = '';
		params.displaysection = '';
		if (params.swimlane) {
			params.specialslot = '';
		}
	}

	// update the params in the promise in case bootstrapping starts in hopes the fuse data gets set before dfp key values are
	// sent to the ads server.
	if (firstCall) {
		fuseSegmentsPromise.then((fuseData) => {
			if (!Object.keys(fuseData || {}).length) {
				return;
			}
			window.fuse = {};
			const { kvs = {} } = fuseData;

			if (Object.keys(kvs).length) {
				Object.keys(kvs).forEach((key) => {
					params[key] = kvs[key];
					window.fuse[key] = params[key];
				});
			}
			params.jt = DecisionMakerContent(tracking, params.jt);
		});
	}

	if (window.fuse && typeof window.fuse.then !== 'function' && !firstCall) {
		Object.assign(params, window.fuse);
		params.jt = DecisionMakerContent(tracking, params.jt);
	}

	desktopConfig = {
		...desktopAdConfig,
		bypass_validate_moat_yield: isE2E,
		params,
		additionalMoatParams,
		ad_unit_path: currentAdZone,
		isEurope,
		isChina,
	};

	mobileConfig = {
		...mobileAdConfig,
		bypass_validate_moat_yield: isE2E,
		params,
		additionalMoatParams,
		ad_unit_path: currentAdZone,
		isEurope,
		isChina,
	};

	const isDesktopArticle = (tracking.dfpZone || '').includes('article');
	const isGalleryDesktopPage = (tracking.dfpZone || '').includes('pictures');

	// @TODO AN-3117 Refactor this
	// This needs to happen here before the first article top ad slot is created.
	if ((isDesktopArticle || isGalleryDesktopPage) && !isMobile) {
		if (desktopConfig.positions.top.sizes) {
			desktopConfig.positions.top.sizes = desktopPagesTopAdSizes;
		}

		if (desktopConfig.positions.recx && !isGalleryDesktopPage) {
			desktopConfig.positions.recx.criteoZoneId = criteoZoneId;
		}
	} else if (isMobile && tracking.dfpZone.indexOf('article') > -1) {
		const mobileParams = {
			strnativekey: '13b84c32',
		};

		if (mobileConfig.positions.mobilerec) {
			mobileConfig.positions.mobilerec.params = mobileParams;
		}

		if (mobileConfig.positions.mobilex) {
			mobileConfig.positions.mobilex.params = mobileParams;
		}
	}
}

/**
 * Allows specialSlot and adsConfig configuration update after adService is bootstrapped.
 * @param {String} specialSlot special slot value.
 * @param {Boolean} noHeroMobile true if we want to remove hero sizes ([7, 1]) from the mobile position.
 */
export function applyConfig(specialSlot, noHeroMobile = false) {
	const config = getConfig();

	if (specialSlot !== false) {
		config.params.specialslot = specialSlot;
	}

	// remove the [7, 1] and [7, 2] ad size from the mobile position on the mobileConfig.
	if (noHeroMobile && config.positions.mobile.sizes) {
		config.positions.mobile.sizes = config.positions.mobile.sizes.filter((size) => !isSevenByOneSize(size) && !isSevenByTwoSize(size));
	}

	setExternalServices(config);
	adService.applyConfig(config);
}

/**
 * Adds additional sizes for topx in premium and masthead articles
 * @param {array} config ads cofigration
 * @returns {array} ads configrations that has additional sizes
 */
export function addOrRemoveTopxNewSizeUnit(articleType) {
	const config = getConfig();
	const isMastheadOrPremium = checkArticleIsPremiumOrMasthead();
	const position = config.positions;
	const topxXXLSize = [970, 600];

	//	adds the [970, 600] to the premium and masthead articles
	if (isMastheadOrPremium && articleType === 'premium') {
		if (position && position.topx?.sizes && !isRemovable(config.positions.topx.sizes, topxXXLSize)) {
			config.positions.topx.sizes.push(topxXXLSize);
		}
	} else {
		const topxXXlUnit = {
			topx: [
				topxXXLSize,
			],
		};
		config.positions = updateAdConfigToRemoveSizes(config, topxXXlUnit);
	}

	setExternalServices(config);
	adService.bootstrap(config);
}

updateAdParams(true);
const config = getConfig();
addOrRemoveTopxNewSizeUnit(config.params.templatetype);
setExternalServices(config);
adService.bootstrap(config);
