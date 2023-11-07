export default class HelpModal {
  constructor(triggerEl, ejsTemplate, options) {
    const defaultOptions = {
      modalId: 'helpmodal',
      modalClass: 'helpmodal__container',
      modalContentClass: 'helpmodal__content',
      appendToSelector: 'body',
      content: {},
    };
    this.triggerEl = triggerEl;
    this.template = ejsTemplate;
    this.options = {...defaultOptions, ...options};
    if (!document.getElementsByClassName(this.options.modalClass)[0]) {
      document.querySelector(this.options.appendToSelector).insertAdjacentHTML('beforebegin', ejsTemplate(this.options));
    }
    this.modalContainer = document.getElementsByClassName(this.options.modalClass)[0];
    this.modal = document.getElementsByClassName('helpmodal')[0];
    document.querySelector('.helpmodal__close').addEventListener('click', this.close.bind(this));
    triggerEl.addEventListener('click', this.open.bind(this));
    this.modalContainer.addEventListener('click', (event) => {
      if (event.target.matches(`.${this.options.modalClass}`)) {
        this.close(event);
      }
    });
  }

  open(event) {
    event.preventDefault();
    this.modalContainer.classList.add('active');
  }

  close(event) {
    event.preventDefault();
    this.modalContainer.classList.remove('active');
  }
}
