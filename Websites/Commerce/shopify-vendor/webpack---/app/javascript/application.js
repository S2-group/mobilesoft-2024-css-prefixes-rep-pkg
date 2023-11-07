import {init, config, ScrollTo, StickyNav} from "@shopify/marketing-assets";

import {PaidTrial} from "./modules/paid-trial-experience/paid-trial";

// Needed to support the legacy use of global objects
window.App = window.App || {};
window.ShopifyMarketing = window.ShopifyMarketing || {};

if (App.config && App.config.signupHost) {
  config.set("SignupBaseURI", `https://${App.config.signupHost}`);
}

config.set("customGoogleAnalyticsNamespace", "_other");

// Initialize MA
init();

const nav = document.getElementById("ShopifyMainNav");
App.scrollTo = new ScrollTo({
  offset: nav ? -nav.offsetHeight : 0,
});

new StickyNav(); // eslint-disable-line no-new

function initPaidTrial() {
  new PaidTrial(); // eslint-disable-line no-new
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPaidTrial);
} else {
  initPaidTrial();
}
