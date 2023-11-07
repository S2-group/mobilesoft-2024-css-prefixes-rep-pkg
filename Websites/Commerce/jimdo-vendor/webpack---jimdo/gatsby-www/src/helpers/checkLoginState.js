import { ckies } from '@ckies/library';
import cookie from 'js-cookie';

import { set as setCookie } from '@jimdo/jimdo-cookies';

import { getPreferredLang, setLangCookie } from './langSwitch';
import { track } from './track';

const COOKIE_NAME = 'userLoggedIn';

const isValidJWTPayload = payload => payload?.aud === 'lc-website';

export const trackUserLoggedInState = (loggedIn = false) => {
    const userAccountId = cookie.get('user_account_id') || '';
    const isPaidUser = cookie.get('bunchbox_customer_has_bought_product');
    const isFreeUser = cookie.get('website_created_with_signup_flow');

    if (!cookie.get(COOKIE_NAME) && ckies.useFunctional()) {
        setCookie(COOKIE_NAME, loggedIn ? 'true' : 'false', { sameSite: 'Lax' });
    }

    /**
     * Some Legacy ga tracking.
     */
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'Auth Status',
        signupStatus: true,
        uiUserId: userAccountId,
    });

    track({
        eventAction: 'auth',
        eventLabel: 'login',
        payload: {
            nonInteraction: true,
            auto: true,
            isPaidUser,
            isFreeUser,
            loggedIn: !!loggedIn,
        },
    });
};

export const getUserInformation = (callback, onError, delay) => {
    if (typeof window === `undefined` || typeof document === `undefined`) {
        return undefined;
    }

    // user account service must have jLang cookie being set
    setLangCookie(getPreferredLang(), false);

    const clientId = 'lc-website';
    const redirectUri = `${window.location.protocol}//${window.location.host}/oidc-silent-callback/`;
    const iframeSrc =
        `https://account.e.jimdo.com/openid/authorize?client_id=${clientId}&redirect_uri=` +
        `${redirectUri}&response_type=id_token&scope=openid%20email%20profile&state` +
        '=256b7a98da7746ca9ff5752a1b68e60e&nonce=7640dc06b94045b186e893193bb13880' +
        '&prompt=none';
    let iframeElement = document.createElement('iframe');
    let listener;

    // https://github.com/Jimdo/user-account-service/blob/master/scripts/initialize_db.py#L148
    const knownHosts = [
        'www.jimdo.com',
        'www-master.prod.jimdo.systems',
        'www-prod.prod.jimdo.systems',
        'www-staging.stage.jimdo.systems',
        'www-master-jimdo-com.global.ssl.fastly.net',
        'www-staging-jimdo-com.global.ssl.fastly.net',
        'localhost',
    ];

    const check = x => knownHosts.findIndex(_ => x.includes(_)) !== -1;

    listener = event => {
        const { origin, data } = event;
        if (!check(origin)) {
            // eslint-disable-next-line no-console
            console.warn(`The origin ${origin} is not allowed to get user information.`, data);
            callback(undefined);
            return;
        }

        if (isValidJWTPayload(data)) {
            callback(data);

            // remove authorization iframe and detach event listener
            iframeElement.parentNode?.removeChild(iframeElement);
            window.removeEventListener('message', listener);

            // send login tracking event
            trackUserLoggedInState(data && (data.name || data.email));
        } else {
            callback(null);
        }
    };

    if (location && location.hostname && check(location.hostname)) {
        window.addEventListener('message', listener);
        iframeElement.setAttribute('id', 'oidc-iframe');
        iframeElement.setAttribute('src', iframeSrc);
        iframeElement.style.display = 'none';

        if (delay) {
            setTimeout(() => document.body.appendChild(iframeElement), delay);
        } else {
            document.body.appendChild(iframeElement);
        }
    } else {
        if (location.search.includes('user=') && URLSearchParams) {
            // eslint-disable-next-line no-console
            console.log(`Faking the user.`);
            const result = new URLSearchParams(location.search).get('user');

            if (result && setTimeout) {
                setTimeout(
                    () =>
                        listener({
                            data: {
                                email: result,
                                name: decodeURIComponent(result),
                                family_name: 'Benz',
                                given_name: 'Laura',
                                picture: null,
                            },
                            origin: location.hostname,
                        }),
                    1000
                );
            }
        } else {
            listener({
                data: undefined,
                origin: '',
            });
        }
    }
};

export const SetUserAccountInformation = () => {
    if (typeof window !== `undefined`) {
        window.getUserInformation = getUserInformation;
    }

    return null;
};
