import {i18n} from '@shopify/marketing-assets';
import '../application';

import {isLatinLocale} from '../modules/non-latin-locales';
import StorenameAutogenSignupModalSmartField from '../modules/storename-autogen-signup-modal-smart-field';
import signupModalTemplate from '../templates/signup-modal.ejs';

(function() {
  const startFreeTrialButton = document.querySelectorAll(
    '.js-open-signup', '.marketing-input-button-pair__button',
  );

  if (startFreeTrialButton.length && isLatinLocale()) {
    new StorenameAutogenSignupModalSmartField(
      startFreeTrialButton,
      (() => signupModalTemplate({signupHeader: i18n.t('signup.custom_header') ? i18n.t('signup.custom_header') : i18n.t('signup.header')})),
      {
        modalActiveContainerClass: 'signup-modal js-is-active',
        clickingOverlayClosesModal: false,
      },
    );
  }
})();
