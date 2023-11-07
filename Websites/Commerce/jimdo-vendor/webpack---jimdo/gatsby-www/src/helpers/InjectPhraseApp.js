import Cookies from 'js-cookie';

// TODO: remove temporary js-cookie named import workaround
const getCookie = Cookies.get;

const phraseAppConfig = require('../../phraseAppConfig').phraseAppConfig;

export const mapToPhraseAppKey = key =>
    `${phraseAppConfig.prefix}phrase_${key}${phraseAppConfig.suffix}`;

export const isTranslation =
    process.env.GATSBY_ENVIRONMENT === 'translation' ||
    (typeof location !== `undefined` &&
        (location.hostname === 'www-translation.stage.jimdo.systems' ||
            getCookie('SIMULATE_TRANSLATION')));

/**
 * This function injects Phrase app integrations
 */
export const InjectPhraseApp = () => {
    if (!isTranslation) {
        return null;
    }

    window.PHRASEAPP_ENABLED = true;
    window.PHRASEAPP_CONFIG = phraseAppConfig;

    (function () {
        var phraseapp = document.createElement('script');
        phraseapp.type = 'text/javascript';
        phraseapp.async = true;
        phraseapp.src = [
            'https://',
            'phraseapp.com/assets/in-context-editor/2.0/app.js?',
            new Date().getTime(),
        ].join('');
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(phraseapp, s);
    })();

    return null;
};
