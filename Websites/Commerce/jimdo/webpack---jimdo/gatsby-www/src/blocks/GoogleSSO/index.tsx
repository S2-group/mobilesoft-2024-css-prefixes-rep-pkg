import React from 'react';

import { Script } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Langs } from 'types/langs';

import { track } from 'helpers/track';
type GoogleSSOProperties = {
    lang: Langs;
};

type GoogleSSOCallbackArg = {
    /** Is this notification for a display moment, and the UI is displayed? - refers to isDisplayed()*/
    i: boolean;
    /** The detailed reason why the UI isn't displayed - refers to getNotDisplayedReason()*/
    l: string;
    /** Return a string for the moment type - refers to getMomentType() */
    h: string;
    /** The detailed reason for the dismissal - refers to getDismissedReason() */
    j: string;
    /** The detailed reason for the skipped moment - refers to getSkippedReason() */
    m: string;
};

const selectLanguage = (lang: Langs) => {
    return lang.substring(0, 2);
};

const displayGoogleOneTap = (lang: Langs) => {
    google?.accounts?.id?.initialize({
        client_id: '1036616695543-9uajhdu3cbpmc0u4ldptp1bkaqdagel0.apps.googleusercontent.com',
        itp_support: true,
        callback: () => {
            window.location.href = `https://account.e.jimdo.com/${selectLanguage(
                lang
            )}/signup/google?type=google`;
        },
    });

    google?.accounts?.id?.prompt((arg: GoogleSSOCallbackArg) => {
        //when it's not displayed to the user for other reasons
        if (arg.l && arg.l !== 'suppressed_by_user') {
            track({
                eventAction: 'not_shown',
                eventLabel: 'GoogleSSO',
                payload: {
                    reason: arg.l,
                },
            });
        }

        // when it's displayed to the user
        if (arg.i) {
            track({
                eventAction: 'view',
                eventLabel: 'GoogleSSO',
                payload: {},
            });
        }

        // when it has issues on displaying or failed
        if (arg.m === 'issuing_failed' || arg.m === 'auto_cancel') {
            track({
                eventAction: 'skip',
                eventLabel: 'GoogleSSO',
                payload: {
                    reason: arg.m,
                },
            });
        }

        // when the user closes the modal
        if (arg.h === 'skipped') {
            track({
                eventAction: 'close',
                eventLabel: 'GoogleSSO',
                payload: {},
            });
        }
        // when the user clicks to login
        if (arg.j) {
            track({
                eventAction: 'click',
                eventLabel: 'GoogleSSO',
                payload: {
                    reason: arg.j,
                },
            });
        }
    });
};
export const GoogleSSO = ({ lang }: GoogleSSOProperties) => {
    return (
        <>
            <Helmet>
                <meta
                    name="google-signin-client_id"
                    content="1036616695543-9uajhdu3cbpmc0u4ldptp1bkaqdagel0.apps.googleusercontent.com"
                ></meta>
            </Helmet>
            <Script
                src="https://accounts.google.com/gsi/client"
                onLoad={() => displayGoogleOneTap(lang)}
            />
        </>
    );
};
