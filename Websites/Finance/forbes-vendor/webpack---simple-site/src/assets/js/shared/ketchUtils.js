// eslint-disable-next-line import/no-unresolved
import { checkJurisdictionCode, getIsConsentCookieSet, getConsentState } from '@forbes/fbs-tracking/ketch';

// note - we cannot use ClientConfigService here as this file is also being used by next.js
const getUserLocationData = () => {
	const { isEurope, isChina, isUsDpa } = window?.forbes || {};
	return { isEurope, isChina, isUsDpa };
};

export const checkConsentCookieLoaded = () => typeof window !== 'undefined' && getIsConsentCookieSet();

export const userGaveFullConsent = () => typeof window !== 'undefined' && getConsentState(getUserLocationData()) === 'ready';

export const checkJurisdiction = () => checkJurisdictionCode(getUserLocationData());

export const getIsPartialConsentGiven = () => checkConsentCookieLoaded() && !userGaveFullConsent();
