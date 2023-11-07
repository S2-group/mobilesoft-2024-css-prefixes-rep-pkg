const PAID_TRIAL_EVENT_SCHEMA = 'incentives_code_red_2022_phase_1_promo_events/2.0';

export class PaidTrialTracking {
  constructor() {
    this.userToken = window?.analytics?.trekkie?.defaultAttributes?.uniqToken || (window.getCookie && window.getCookie('_shopify_y'));
    this.sessionToken = window?.analytics?.trekkie?.defaultAttributes?.visitToken || (window.getCookie && window.getCookie('_shopify_s'));
    this.url = window.location.href;
    this.isSignupOpen = false;

    this.sendRenderEvents();
    this.prepareClickEvents();
    this.prepareSignupObserver();
  }

  trackEvent(schema, data) {
    /* eslint-disable babel/camelcase */
    const defaultData = {
      user_token: this.userToken,
      session_token: this.sessionToken,
      timestamp: Date.now(),
      url: this.url,
    };
    /* eslint-enable babel/camelcase */

    window.analytics.track(`monorail://${schema}`, {...defaultData, ...data});
  }

  sendRenderEvents() {
    const action = 'render';
    const trackingMatrix = [
      {
        component: "banner",
        selector: '#Announcements .js-announcement',
      },
      {
        component: "free_trial_top_bar",
        selector: '.free-trial__hero-heading',
      },
      {
        component: "free_trial_bottom_bar",
        selector: '.brochure-signup-block',
      },
    ];

    trackingMatrix.forEach((item) => {
      const {component, selector} = item;
      const element = document.querySelector(selector);

      if (element) {
        this.trackEvent(PAID_TRIAL_EVENT_SCHEMA, {
          component,
          action,
        });
      }
    });
  }

  prepareClickEvents() {
    const action = 'click';

    document.addEventListener('click', (event) => {
      const {target: element} = event;
      const {paidTrialEventComponent, paidTrialEventTarget} = element.dataset;

      if (paidTrialEventComponent) {
        this.trackEvent(PAID_TRIAL_EVENT_SCHEMA, {
          action,
          component: paidTrialEventComponent,
          target: paidTrialEventTarget,
        });
      }
    });
  }

  checkSignupOpen(element) {
    return element.classList.contains('signup-modal') && element.classList.contains('js-is-active');
  }

  prepareSignupObserver() {
    const modalContainer = document.getElementById('ModalContainer');
    if (!modalContainer) {
      return;
    }
    const config = {attributes: true};

    this.isSignupOpen = this.checkSignupOpen(modalContainer);

    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const shouldBeOpen = this.checkSignupOpen(modalContainer);

          if (this.isSignupOpen !== shouldBeOpen) {
            // Signup form has either been opened or closed
            this.isSignupOpen = shouldBeOpen;

            if (this.isSignupOpen) {
              const paidTrialSignupBlockElement = modalContainer.querySelector('.signup-grid-container');
              if (paidTrialSignupBlockElement) {
                this.trackEvent(PAID_TRIAL_EVENT_SCHEMA, {
                  action: 'render',
                  component: '3f_bottom_box',
                });
              }
            }
          }
        }
      }
    });

    observer.observe(modalContainer, config);
  }
}
