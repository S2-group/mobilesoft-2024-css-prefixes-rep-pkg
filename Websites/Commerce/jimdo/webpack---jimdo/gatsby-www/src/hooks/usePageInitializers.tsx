import { useEffect } from 'react';

import { initDatadog } from 'helpers/datadog';
import { printJoinJimdoMessage } from 'helpers/joinJimdo';
import { setLangCookie } from 'helpers/langSwitch';

type InitializeOptions = {
    hasDatadog?: boolean;
    hasJoinJimdoMessage?: boolean;
    hasLangCookie?: boolean;
};

export const usePageInitializers = (
    lng: string,
    { hasDatadog, hasJoinJimdoMessage, hasLangCookie }: InitializeOptions = {
        hasDatadog: true,
        hasJoinJimdoMessage: true,
        hasLangCookie: true,
    }
) => {
    useEffect(() => {
        if (hasDatadog) {
            const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';
            initDatadog(ENV);
        }
    }, [hasDatadog]);

    useEffect(() => {
        if (hasJoinJimdoMessage) {
            printJoinJimdoMessage();
        }
    }, [hasJoinJimdoMessage]);

    useEffect(() => {
        if (hasLangCookie) {
            // The incoming `lng` has a format of full language code, e.g. `en-US`
            const lang = lng.split('-')[0];
            setLangCookie(lang);
        }
    }, [lng, hasLangCookie]);
};
