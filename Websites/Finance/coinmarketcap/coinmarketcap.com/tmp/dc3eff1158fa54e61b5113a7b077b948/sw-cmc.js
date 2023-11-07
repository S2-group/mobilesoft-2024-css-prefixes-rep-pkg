import {registerRoute as workbox_routing_registerRoute} from '/opt/cmc/node_modules/workbox-routing/registerRoute.mjs';
import {ExpirationPlugin as workbox_expiration_ExpirationPlugin} from '/opt/cmc/node_modules/workbox-expiration/ExpirationPlugin.mjs';
import {StaleWhileRevalidate as workbox_strategies_StaleWhileRevalidate} from '/opt/cmc/node_modules/workbox-strategies/StaleWhileRevalidate.mjs';
import {clientsClaim as workbox_core_clientsClaim} from '/opt/cmc/node_modules/workbox-core/clientsClaim.mjs';
import {precacheAndRoute as workbox_precaching_precacheAndRoute} from '/opt/cmc/node_modules/workbox-precaching/precacheAndRoute.mjs';
import {cleanupOutdatedCaches as workbox_precaching_cleanupOutdatedCaches} from '/opt/cmc/node_modules/workbox-precaching/cleanupOutdatedCaches.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */


importScripts(
  
);







self.skipWaiting();

workbox_core_clientsClaim();


/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute([
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.account-modal.c18370a3580c63cb.js",
    "revision": "c18370a3580c63cb"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.crypto-chart.f01947343fc63798.js",
    "revision": "f01947343fc63798"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.dynamic-logo.5504235426006e65.js",
    "revision": "5504235426006e65"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.gravity-widget.ec744f277ed1aa15.js",
    "revision": "ec744f277ed1aa15"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.homepage-gravity-editor.f5c9e1336f34ce2a.js",
    "revision": "f5c9e1336f34ce2a"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.login.339ef8497dac64f0.js",
    "revision": "339ef8497dac64f0"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.mobile-filter.26744f5b19c95a99.js",
    "revision": "26744f5b19c95a99"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.search.8d74cd05a97fd872.js",
    "revision": "8d74cd05a97fd872"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.setting-profile.fc2d10d3683c8aee.js",
    "revision": "fc2d10d3683c8aee"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.side-notification.ffacf73f1d8591c8.js",
    "revision": "ffacf73f1d8591c8"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.signup.aa502b1b16027507.js",
    "revision": "aa502b1b16027507"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.sitepreferences.411621ae73e18b73.js",
    "revision": "411621ae73e18b73"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.takeover.1ac154fe08dbfa90.js",
    "revision": "1ac154fe08dbfa90"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.tippyjs-264be7f31f40a797.js",
    "revision": "264be7f31f40a797"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.user-guide.5210e64ceedfa619.js",
    "revision": "5210e64ceedfa619"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.user-section.6e5f71a84c81c437.js",
    "revision": "6e5f71a84c81c437"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.voteResultModal.12c19b85c873eaab.js",
    "revision": "12c19b85c873eaab"
  },
  {
    "url": "https://s2.coinmarketcap.com/_next/static/chunks/precache.wallet-login.7d69f549d94936fa.js",
    "revision": "7d69f549d94936fa"
  }
], {
  "ignoreURLParametersMatching": []
});
workbox_precaching_cleanupOutdatedCaches();



workbox_routing_registerRoute(({ url }) => {
      return /(lite-list)\.(?:json)$/i.test(url.href);
    }, new workbox_strategies_StaleWhileRevalidate({ "cacheName":"static-json-assets", plugins: [new workbox_expiration_ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 300 })] }), 'GET');




