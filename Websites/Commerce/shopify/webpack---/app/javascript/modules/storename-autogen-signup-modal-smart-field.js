import {i18n, SignupModal, utils, FormsApi} from '@shopify/marketing-assets';

import shopNameFieldTemplate from "../templates/shopname-field.ejs";
import shopNameHelpModalTemplate from "../templates/shopname-help-modal.ejs";

import HelpModal from './help-modal';

export default class StorenameAutogenSignupModalSmartField extends SignupModal {
  constructor($el, ejsTemplate, options) {
    super($el, ejsTemplate, options);
    this.selectedDomainEl = document.createElement('input');
    this.selectedDomainEl.setAttribute('name', 'extra[selected_domain]');
    this.selectedDomainEl.setAttribute('type', 'hidden');
    // Used to debounce shop name input handler
    this.timeout = null;
    // Controls showing/hiding the subtext element since it's initially displayed on the first key input in the store name field
    this.subtextPresent = false;
    // Flag to determine if the email input is filled
    this.isEmailFilled = false;
  }

  render() {
    this.modalDom.$modal.innerHTML = this.template();
    this.modalDom.$modal
      .querySelector('.signup-modal__content')
      .appendChild(this.$signupForm.cloneNode(true));

    super.render();
    // Add event listeners
    const shopNameFieldInput = document.querySelector('.shop_name input');
    shopNameFieldInput.addEventListener('input', this.onShopNameInput.bind(this));
    shopNameFieldInput.classList.add('no-label');
  }

  generateSuffix(size) {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  }

  open(evt) {
    super.open(evt);
    let shopName;

    const emailInput = evt.currentTarget[0] || document.querySelector('form.js-signup-inline input[type="email"]');
    // eslint-disable-next-line no-control-regex
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const sanitizedEmailInput = emailInput?.value.match(emailRegex);
    const sanitizedEmail = sanitizedEmailInput?.[0] || '';

    const emailField = this.modalForm.fields.email;
    emailField.setState({value: sanitizedEmail});
    emailField.node.querySelector('input').value = sanitizedEmail;

    this.isEmailFilled = (sanitizedEmail !== '');

    const shopNameField = document.querySelector('.shop_name');
    const storenameField = document.querySelector('.stateful-field.storename');
    const storenameInput = document.getElementById('0_signup_storename');

    if (storenameInput) {
      shopNameField.style.display = 'none';
    } else {
       // Sanitize input, add subtext
      const sanitizedShopName = sanitizedEmail.replace(/\s+/g, '').toLowerCase().split('@')[0];
      this.addShopNameFieldSubtext(sanitizedShopName);
    }

    if (this.isEmailFilled) {
      // If the email is filled though, then we only hide it so that we're able to bring it back in case
      // the user closes the model, removes the email address, then opens the modal again
      storenameField.classList.add('hide');
      shopName = sanitizedEmail;
    } else if (storenameInput) {
      storenameInput.insertAdjacentHTML('afterend', '<button type="button" class="storename-tooltip"><svg style="" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8672 12.5156H15.2344V12.0078C15.2344 11.1875 15.5156 10.75 16.5078 10.1641C17.5078 9.5625 18.1406 8.69531 18.1406 7.47656V7.46094C18.1406 5.85938 16.7969 4.64062 14.8281 4.64062C12.6328 4.64062 11.5078 5.98438 11.4219 7.66406V7.67969L12.75 7.67188L12.7656 7.66406C12.8438 6.55469 13.5938 5.85938 14.7734 5.85938C15.9375 5.85938 16.6875 6.57031 16.6875 7.53125V7.54688C16.6875 8.375 16.3359 8.86719 15.4297 9.42188C14.3594 10.0625 13.8594 10.7656 13.8672 11.7969V12.5156ZM14.6562 16.1406C15.2891 16.1406 15.7344 15.6875 15.7344 15.0547C15.7344 14.4141 15.2891 13.9609 14.6562 13.9609C14.0234 13.9609 13.5703 14.4141 13.5703 15.0547C13.5703 15.6875 14.0234 16.1406 14.6562 16.1406Z" fill="#202223"/><circle cx="15" cy="10" r="9.5" stroke="black"/></svg></button>');

      const tooltipButton = document.querySelector('.storename-tooltip');
      tooltipButton.insertAdjacentHTML('afterend', `<div class="hide storename-tooltip-box"><span>${i18n.t('forms.fields.storename.tooltip')}</span></div>`);

      const tooltipBox = document.querySelector('.storename-tooltip-box');

      tooltipButton.addEventListener('click', (event) => {
        event.stopPropagation();
        tooltipBox.classList.toggle('hide');
      });

      const modalContainer = document.getElementById('ModalContainer');
      modalContainer.addEventListener('click', () => {
        tooltipBox.classList.add('hide');
      });

      this.modalForm.fields.storename.config.required = true;

      // Add validation function to the storename field
      this.modalForm.validationFns.storename = (function() {
        const value = storenameInput.value.trim();

        if (value === '') {
          return {empty: true};
        }

        if (value.length < 4) {
          return {minlength: true};
        }

        if (value.length > 60) {
          return {maxlength: true};
        }

        if (FormsApi.shopNameHasDisallowedWords(value)) {
          return {disallowedwords: true};
        }

        return {};
      });

      const debounceShopNameGeneration = utils.debounce(this.generateShopName.bind(this), 500);

      storenameInput.addEventListener('input', (event) => {
        shopName = storenameInput.value.trim().replace(/\s+/g, '-').toLowerCase();

        this.modalForm.validateField(this.modalForm.fields.storename);

        if (!this.subtextPresent) {
          this.addShopNameFieldSubtext(shopName);
          this.subtextPresent = true;
        }

        document.querySelector('.subtext__url .url__text').innerText = `${i18n.t('landers.short.free_trial.generating_name')}...`;

        this.onShopNameInput(event);

        if (shopName) {
          debounceShopNameGeneration(shopName);
        }
      });
    }

    // Remove your store name label
    if (document.querySelector('div.stateful-field.shop_name span.marketing-label--in-field')) {
      document.querySelector('div.stateful-field.shop_name span.marketing-label--in-field').remove();
    }

    if (this.isEmailFilled) {
      // Sanitize input, add subtext
      const sanitizedShopName = shopName.replace(/\s+/g, '').toLowerCase().split('@')[0];
      this.addShopNameFieldSubtext(sanitizedShopName);
    }

    if (this.isEmailFilled && !shopName) {
      // Add subtext, but default to enabling shop_name input if no email is provided
      document.querySelector('.shop_name').style.display = '';
      document.querySelector('.subtext__url').style.display = 'none';
    }

    // append additional span to shop name label
    if (!document.querySelector('.shopurl')) {
      const shopNameLabel = document.createElement('span');
      shopNameLabel.classList.add('shopurl');
      shopNameLabel.innerText = '.myshopify.com';
      document.querySelector('.shop_name label').appendChild(shopNameLabel);
    }
    if (!document.querySelector('.availability')) {
      const validatingLabel = document.createElement('span');
      validatingLabel.classList.add('availability');
      validatingLabel.classList.add('hide');
      validatingLabel.innerText = 'Checking availability...';
      document.querySelector('.shop_name label').appendChild(validatingLabel);
    }
  }

  addShopNameFieldSubtext(shopName) {
    const shopNameField = document.querySelector('.shop_name');
    // shopNameField.style.display = 'none';
    shopNameField.insertAdjacentHTML("afterend", shopNameFieldTemplate({
      editText: i18n.t('landers.short.free_trial.edit_button'),
      helpText: i18n.t('landers.short.free_trial.help_text', {query: 'mystore'}),
      learnMore: i18n.t('landers.short.free_trial.learn_button'),
      button: true,
    }));
    // Init help modal
    new HelpModal(document.querySelector('button.link__learn'), shopNameHelpModalTemplate, {
      appendToSelector: ".modal-container",
      content: i18n.t('landers.short.free_trial.help_modal'),
    });
    document.querySelector('button.link__learn').addEventListener('click', () => window.analytics.track('monorail://marketing_page_event/2.0', {
      /* eslint-disable babel/camelcase */
      user_token: window.analytics.trekkie.defaultAttributes.uniqToken,
      session_token: window.analytics.trekkie.defaultAttributes.visitToken,
      pageview_id: window.analytics.trekkie.defaultAttributes.microSessionId,
      page_url: window.location.href,
      canonical_url: document.querySelector("link[rel='canonical']").href,
      project: 'brochure2',
      page_language: window.analytics.trekkie.defaultAttributes.locale,
      environment: 'production',
      event_category: '3f-storename-autogen',
      event_action: 'click-link',
      event_label: 'learn-more-modal',
      /* eslint-enable babel/camelcase */
    }));
    document.querySelector('.url-edit').addEventListener('click', this.onEditShopName);
    if (shopName) {
      this.generateShopName(shopName);
    } else {
      document.querySelector('.subtext__url').style.display = 'none';
    }
  }

  onEditShopName(event) {
    event.preventDefault();
    document.querySelector('.shop_name').style.display = '';
    document.querySelector('.subtext__url').style.display = 'none';
    window.analytics.track('monorail://marketing_page_event/2.0', {
      /* eslint-disable babel/camelcase */
      user_token: window.analytics.trekkie.defaultAttributes.uniqToken,
      session_token: window.analytics.trekkie.defaultAttributes.visitToken,
      pageview_id: window.analytics.trekkie.defaultAttributes.microSessionId,
      page_url: window.location.href,
      canonical_url: document.querySelector("link[rel='canonical']").href,
      project: 'brochure2',
      page_language: window.analytics.trekkie.defaultAttributes.locale,
      environment: 'production',
      event_category: '3f-storename-autogen',
      event_action: 'click-button',
      event_label: 'edit-storename',
      /* eslint-enable babel/camelcase */
    });
  }

  onShopNameInput(event) {
    if (this.timeout) {
      window.cancelAnimationFrame(this.timeout);
    }
    this.timeout = window.requestAnimationFrame(() => {
      document.querySelector('.shopurl').classList.remove('hide');
      const {value} = event.srcElement;
      if (value.length > 4) {
        document.querySelector('.shopurl').style.left = 0;
        document.querySelector('.shopurl').style['padding-left'] = `${value.length + 1}ch`;
      } else {
        document.querySelector('.shopurl').classList.add('hide');
      }
      // eslint-disable-next-line babel/camelcase
      window.I18n.data.forms.errors.shop_name.existingAdmin = i18n.t('landers.short.free_trial.existing_admin_error', {shop_name: value});
    });
  }

  close() {
    super.close();
    this.selectedDomainEl.remove();
    document.querySelector('.shop_name').style.display = '';

    this.subtextPresent = false;

    if (this.isEmailFilled) {
      const storenameInput = document.querySelector('.stateful-field.storename');
      storenameInput.classList.remove('hide');
    }

    this.isEmailFilled = false;

    const signUpForm = document.querySelector('#SignupForm_modal > div.field__subtext');
    if (signUpForm) {
      signUpForm.remove();
    }
  }

  generateShopName(shopName) {
    const shopNameField = this.modalForm.fields.shop_name;
    const setAndValidateShopName = async (shopNameVal) => {
      if (this.active) {
        const disallowedRegexp = /(shopify)/gi;
        const sanitizedShopName = shopNameVal.replace(disallowedRegexp, '');
        shopNameField.setState({value: sanitizedShopName});
        if (this.isEmailFilled) {
          document.querySelector('.shop_name input').value = sanitizedShopName;
          document.querySelector('.subtext__url .url__text').innerText = `${sanitizedShopName}.myshopify.com`;
        }
        // field is mutated asynchronously with state object and will need to be returned afterwards
        await this.modalForm.validateField(shopNameField);
      }
      return shopNameField;
    };
    const generateNewShopName = (shopNameVal) => {
      return `${shopNameVal}-${this.generateSuffix(4)}`;
    };
    const validate = async (field) => {
      if (field?.state?.error && field?.state?.errors?.existingAdmin && this.active) {
        const updatedShopNameField = await setAndValidateShopName(generateNewShopName(shopName));
        return validate(updatedShopNameField);
      } if (field?.state?.error & !Object.keys(field?.state?.errors).includes('existingAdmin') && this.active) {
        if (this.isEmailFilled) {
          document.querySelector('.shop_name').style.display = '';
          document.querySelector('.subtext__url').style.display = 'none';
        }
        return field.state.value;
      } else {
        const shopNameInput = document.querySelector('.shop_name input');
        const subtext = document.querySelector('.subtext__url .url__text');

        if (shopNameInput && subtext) {
          shopNameInput.value = field.state.value;
          subtext.innerText = `${field.state.value}.myshopify.com`;
          this.onShopNameInput({srcElement: {value: field.state.value}});
        }

        return field.state.value;
      }
    };
    return setAndValidateShopName(shopName).then(validate);
  }

  getEncodedMonorailParams(params) {
    return Object.entries(params)
      .map((kv) => kv.map(encodeURIComponent).join('='))
      .join('&');
  }
}
