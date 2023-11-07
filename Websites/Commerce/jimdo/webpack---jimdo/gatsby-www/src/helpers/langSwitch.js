import cookie from 'js-cookie';

import { set as setCookie } from '@jimdo/jimdo-cookies';

import { getRootDomain } from './getRootDomain';
import isBot from './isBot';

const log = (...args) => {
    if (cookie.get(`DEBUG_LANGUAGE_REDIRECT`)) {
        // eslint-disable-next-line no-console
        console.log(...args);
    }
};
export const allLangs = ['en-US', 'de-DE', 'nl-NL', 'es-ES', 'fr-FR', 'it-IT', 'ja-JP'];

const langToPath = {
    de: '/de/',
    es: '/es/',
    fr: '/fr/',
    it: '/it/',
    ja: '/jp/',
    jp: '/jp/',
    nl: '/nl/',
    en: '/',
};

const defaultLang = 'en';
const LANGUAGE_REDIRECT_COOKIE_NAME = 'languageRedirect';
const preferredLangCookie = 'jLang';

const computeTranslations = () => {
    const hrefLangs = {};

    if (document.querySelectorAll) {
        Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).forEach(x => {
            hrefLangs[x.hreflang.split('-')[0]] = x.href.replace('https://www.jimdo.com', '');
        });
    }

    return hrefLangs;
};

export const setLangCookie = (lang, overwrite = true) => {
    if (overwrite || !cookie.get(preferredLangCookie)) {
        setCookie(preferredLangCookie, lang, {
            domain: getRootDomain(),
            path: '/',
            sameSite: 'Lax',
        });
    }
};

export const switchLanguage = (incomingLang, redirectType, automatic = false, overwrite = true) => {
    const lang = incomingLang.split('-')[0];
    if (
        typeof document === 'undefined' ||
        typeof navigator === 'undefined' ||
        typeof location === 'undefined'
    ) {
        return;
    }
    const path = computeTranslations()[lang] || langToPath[lang];
    let newsearch = location.search;

    if (!newsearch || newsearch.indexOf('_ncr') === -1) {
        newsearch = newsearch ? newsearch + '&_ncr=true' : '?_ncr=true';
    }

    if (automatic && document.referrer) {
        newsearch = (newsearch ? newsearch + '&' : '?') + `referrer=${document.referrer}`;
    }

    document.documentElement.style.visibility = 'hidden';
    const scope = getRootDomain();

    setCookie(LANGUAGE_REDIRECT_COOKIE_NAME, redirectType, {
        domain: scope,
        path: '/',
        sameSite: 'Lax',
    });
    setLangCookie(lang, overwrite);
    location.href = path + newsearch;
};

export const getPreferredLang = () => {
    let lang = cookie.get(preferredLangCookie);

    if (!lang && navigator && navigator.language) {
        lang = navigator.language.substring(0, 2);
    }

    const langSupported = Boolean(langToPath[lang]);

    return langSupported ? lang : defaultLang;
};

const isRedirectCandidate = () => {
    if (
        typeof document === 'undefined' ||
        typeof navigator === 'undefined' ||
        typeof location === 'undefined'
    ) {
        return false;
    }

    const preferredLang = cookie.get(preferredLangCookie) || navigator.language.substring(0, 2);

    if (location.search.indexOf('_ncr') !== -1) {
        log('Skipped: _ncr found');
        return false;
    }

    if (!preferredLang) {
        log(`Skipped: No preferred language`);
        return false;
    }

    if (!langToPath[preferredLang]) {
        log(`Skipped: No path for ${preferredLang}`);
        return false;
    }

    if (location.pathname === langToPath[preferredLang]) {
        log('Skipped: Already on correct path');
        return false;
    }

    if (isBot(window.navigator.userAgent)) {
        return false;
    }

    return true;
};

export const automaticLanguageSwitch = () => {
    log('AutoLangSwitch needed?');
    if (isRedirectCandidate()) {
        log('AutoLangSwitch applies');
        switchLanguage(
            getPreferredLang(),
            cookie.get(preferredLangCookie) ? 'cookie' : 'browserLang',
            true,
            false
        );
    }
};
