import {Announcement} from '@shopify/marketing-assets';

import {PaidTrialTracking} from './paid-trial-tracking';

export class PaidTrial {
  constructor() {
    this.checkAnnouncementBanner();

    new PaidTrialTracking(); // eslint-disable-line no-new
  }

  checkAnnouncementBanner() {
    const announcement = document.querySelector('#Announcements .js-announcement');
    if (announcement) {
      new Announcement(announcement); // eslint-disable-line no-new
    }
  }
}
