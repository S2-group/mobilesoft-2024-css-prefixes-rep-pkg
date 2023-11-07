import { handleAdBlockDependentAction, getAbParam } from './adblock';

/**
* Updates adBlock configrations and actions
*/
function adBlockUpdate() {
	// TODO AdOps need to decide on updating fbsAdParams UEM-411
	const allPageVideos = document.querySelectorAll('fbs-video');
	allPageVideos.forEach((video) => {
		// Remove autoplay just incase there was a delay loading the video
		video.removeAttribute('autoplay');
		video.pause();
	});
}

/**
 * Updates the Below Folds Ads in web page class
 * to adblock-on if adblock detected.
 */
function updateBelowFoldsAds() {
	// Change any fbs-ads to the correct class value
	const belowTheFoldAdsArray = Array.from(document.querySelectorAll('.medianet, .fbs-ad--artbottom-wrapper'));
	belowTheFoldAdsArray.forEach((unit) => {
		if (getAbParam()) {
			unit.parentElement.classList.replace('adblock-off', 'adblock-on');
		}
	});
}

handleAdBlockDependentAction((isAdBlockOn) => {
	if (isAdBlockOn) {
		adBlockUpdate();
	}
});
handleAdBlockDependentAction((isAdBlockOn) => {
	if (isAdBlockOn) {
		updateBelowFoldsAds();
	}
});
