import { isMobile } from './is-mobile';
import { getCookie } from '../../../shared/cookieUtils';

// TODO Remake for arbitrary data
export const serverData = ((window.forbes || {})['simple-site'] || {});

// @TODO Refactor client config service to work with stream (eg class with dynamic getters).
export const {
	adExperience,
	adId,
	adInventory,
	adZone,
	advoiceBrand,
	authorSlug,
	barChartYears,
	blogSlug,
	bucket,
	categoryCookieName,
	channelColor,
	channelId,
	channelName,
	cookieName,
	currentTabName,
	division,
	hasWriters,
	is404,
	isAdLight,
	isBlog,
	isE2E,
	isLocal,
	isNewsletter,
	isProd,
	isPreview,
	isSingleRec,
	isTopXAd,
	lazyLoadData,
	listLander,
	name,
	naturalId,
	pageLocation,
	pageType,
	premiumProfile,
	playerId,
	premiumPage,
	region,
	relativeVideo,
	relativeVideos,
	retracted,
	sectionId,
	shareText,
	slug,
	showFollowButton,
	specialSlot,
	streamIndex,
	streamSourceBlog,
	streamSourceType,
	streamSourceValue,
	subBlog,
	swimLane,
	topStories,
	tracking,
	layout,
	randId,
} = serverData;

// isEurope is needed early in the page for GDPR
export const { isEurope } = window.forbes || {};

// isChina is needed early in the page for PIPL
export const { isChina } = window.forbes || {};

export const { isUsDpa } = window.forbes || {};

export function isSponsored() {
	const { swimLane: swimlane, specialSlot: specialslot } = (window.forbes || {})['simple-site'] || {};
	return swimlane || specialslot;
}

/**
 * Updates gamzone with the logged in / subscribed state of the user as applicable.
 * @param {String} [gamZone='']
 * @returns {String} gamZone with logged in / subscription state set
 */
export function updateGamzoneUserState(gamZone = '') {
	if (!getCookie(document.cookie, 'fbs-zephr-access')) {
		return gamZone;
	}

	return gamZone.replace(/default/, /RKPEVDB|R8W03AS/g.test(getCookie(document.cookie, 'fbs-zephr-access') || '') ? 'subscriber' : 'nonsubscriber');
}

// @TODO 3646: We need consistent values both when building and scrolling through the stream.
export function getTracking() {
	const trackingData = ((window.forbes || {})['simple-site'] || {}).tracking;

	trackingData.gamZone = updateGamzoneUserState(trackingData.gamZone);

	return trackingData;
}

export const adAccount = adInventory || '7175';
export const adSite = isMobile ? 'fdcmobile' : 'fdc.forbes';
export const fullAdZone = listLander ? adZone : `/${adAccount}/${adSite}/${adZone}`;
