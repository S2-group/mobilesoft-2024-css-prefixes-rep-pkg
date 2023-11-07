import { useContext, useEffect } from 'react';

import {
    init as initConsent,
    getDpsCookieNames,
    acceptAllConsents,
} from '@jimdo/consent-management';
import {
    init as initTracking,
    setRichTracking,
    configureAutomatedAnonymousTracking,
    withConsentOptIn,
    getAnonId,
    getUserAccountId,
    setAnonymousTracking,
    waitForConsentOptIn,
} from '@jimdo/consent-management-tracking';
import {
    getRichTrackingEndpoint,
    RichTracking,
    AnonTracking,
    getAnonTrackingEndpoint,
} from '@jimdo/frontend-tracking';

import { AppContext } from 'store/createContext';

type ConsentManagementProps = {
    googleTagManagerId: string;
    userCentricsId: string;
    suppressConsentBanner?: boolean;
    forceAcceptAllConsent?: boolean;
};

export const ConsentManagementBanner = ({
    googleTagManagerId,
    userCentricsId,
    suppressConsentBanner = false,
    forceAcceptAllConsent = false,
}: ConsentManagementProps) => {
    const { activateFullstory } = useContext(AppContext);

    useEffect(() => {
        const richTracker = RichTracking({
            endpoint: getRichTrackingEndpoint(window.location.hostname),
            env: 'lp',
            anonId: getAnonId,
            userAccountId: () => getUserAccountId() || '',
            fullStoryConfig: () => {
                return {
                    waitForConsent: (cb: () => void) => {
                        waitForConsentOptIn('Fullstory')(() => {
                            activateFullstory && cb();
                        });
                    },
                };
            },
        });

        const anonTracker = AnonTracking({
            endpoint: getAnonTrackingEndpoint(window.location.hostname),
        });

        withConsentOptIn(
            setRichTracking(richTracker),
            setAnonymousTracking(anonTracker),
            configureAutomatedAnonymousTracking('lp.www')
        );

        initTracking({
            gtmContainerId: googleTagManagerId,
            getDpsCookieNames: getDpsCookieNames,
            consentBannerInteractionsTrackCategory: 'www',
            customAutomatedTrackingSettings: {
                category: 'www',
                anonymousCategory: 'lp.www',
            },
        });

        initConsent({
            userCentricsSettingsId: userCentricsId,
            suppressConsentBanner: suppressConsentBanner,
        });
    }, [googleTagManagerId, userCentricsId, suppressConsentBanner, activateFullstory]);

    useEffect(() => {
        if (!forceAcceptAllConsent) {
            return;
        }
        acceptAllConsents();
    }, [forceAcceptAllConsent]);

    return null;
};

export default ConsentManagementBanner;
