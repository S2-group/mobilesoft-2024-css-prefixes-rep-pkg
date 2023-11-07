/**
 * Check if useragent is iphone and IOS-15.
 * @returns Boolean true if iphone IOS-15
 */
const isIOS15 = () => (/(iPhone|iPod|iPad)/i.test(navigator.userAgent) && /OS 15/i.test(navigator.userAgent));

const isServiceWorkerSupported = !isIOS15() && window.location.protocol === 'https:' && 'serviceWorker' in navigator;

if (isServiceWorkerSupported) {
	navigator.serviceWorker.register('/service-worker.js').catch((err) => {
		console.error('ServiceWorker registration failed:', err);
	});
}

export default isServiceWorkerSupported;
