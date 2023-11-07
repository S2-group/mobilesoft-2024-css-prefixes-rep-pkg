import {Accordion} from '@shopify/marketing-assets';

import '../../../components/storename-autogen-signup-smart-field';

function init() {
  new Accordion(document.getElementById('FaqAccordion'), {
    mobileOnly: false,
    itemSelector: '.accordion-item',
    openFirst: false,
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
