importScripts("/workbox/sw.js");
try {
	importScripts("https://cdn.p-n.io/pushly-sw.min.js?domain_key=qmhdz0KFKfsfhQQeCP5Js1NFta1P8jkwbf05");
} catch (error) {
	console.error(new Error('Error: error loading pushly cdn script.'));
}

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
	/https:\/\/(thumbor.forbes.com|specials-images\.forbesimg\.com|blogs-images.forbes.com)(.*)/i,
	workbox.strategies.cacheFirst({
		cacheName: 'image-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20,
				maxAgeSeconds: 7 * 24 * 60 * 60,
			})
		],
	})
)
