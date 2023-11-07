import Observable from './Observable';

const adBlockDetection = new Observable();
let isAdBlockSet = false;
let isAdBlockOn = false;

/**
 * When our ad block detection script has finished,
 * handle all things requiring the ad block detection decision.
 */
function adBlockSetUp() {
	isAdBlockOn = window.forbes.hasAdBlocker;
	isAdBlockSet = true;
	document.removeEventListener('fbs-ad-block-init', adBlockSetUp);
	adBlockDetection.notify(isAdBlockOn);
}

/**
 * Either executes the input function immediately, with the ad block detection value as a param,
 * if ad block detection has finished or adds it to a queue that will be executed once finished.
 * @param {function} fn
 */
function handleAdBlockDependentAction(fn) {
	if (isAdBlockSet) {
		fn(isAdBlockOn);
	} else {
		adBlockDetection.subscribe(fn);
	}
}

/**
 * Creates proper value for ad reporting. Nothing (undefined) should be
 * reported by default. If the user was flagged by the welcome ad
 * as an adblock user, report whether they kept it "on" or turned it
 * "off".
 * @return {Boolean}
 */
const getAbParam = () => isAdBlockOn;

handleAdBlockDependentAction((isAdBlock) => {
	if (isAdBlock) {
		document.body.classList.add('adblock-on');
	}
});

// Piano Ad Block Detections script in GTM will fire this event when ad block detection has finished.
document.addEventListener('fbs-ad-block-init', adBlockSetUp);

export {
	getAbParam,
	handleAdBlockDependentAction,
};
