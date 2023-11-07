import { getAbParam } from '../shared/adblock';

let video;
let isBlocked;

document.addEventListener('fbs-ad-block-init', () => {
	if (getAbParam()) {
		isBlocked = true;
	}
});

// @TODO [SS-7351]: Share desktop/mobile article and profile sticky video code
document.addEventListener('DOMContentLoaded', () => {
	const videoContainer = document.querySelector('.profile-sidebar__video');

	if (!videoContainer) {
		return;
	}

	video = videoContainer.querySelector('fbs-video');

	if (isBlocked) {
		video.setAttribute('ads-disabled', '');
	}
	const footer = document.querySelector('footer');
	let isVideoStuck = false;

	function unstickVideo() {
		video.style.bottom = '';

		if (!isVideoStuck) {
			return;
		}

		isVideoStuck = false;
		videoContainer.classList.remove('profile-sidebar--sticky-video');
	}

	function stickVideo(visibleFooterHeight) {
		video.style.bottom = visibleFooterHeight > 0 ? `calc(2% + ${visibleFooterHeight}px)` : '2%';

		if (isVideoStuck) {
			return;
		}

		isVideoStuck = true;
		videoContainer.classList.add('profile-sidebar--sticky-video');
	}

	function onScroll() {
		const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		const offset = window.pageYOffset - document.documentElement.clientTop;
		const { height, top } = videoContainer.getBoundingClientRect();
		const width = window.innerWidth;

		const stickyTrigger = top + offset + (height / 4);
		const visibleFooterHeight = (scrollPos + window.innerHeight) - footer.offsetTop;

		if (stickyTrigger < scrollPos && width >= 1920) {
			stickVideo(visibleFooterHeight);
		} else {
			unstickVideo();
		}
	}

	function initializeNextVideo() {
		if (window.forbes['simple-site'].relativeVideoIds.length) {
			video.setAttribute('video-id', window.forbes['simple-site'].relativeVideoIds.shift());
		} else {
			video.removeEventListener('ended', initializeNextVideo);
		}
	}

	if (videoContainer) {
		window.addEventListener('scroll', onScroll);
	}

	if (video && window.forbes['simple-site'].relativeVideoIds && window.forbes['simple-site'].relativeVideoIds.length) {
		video.addEventListener('ended', initializeNextVideo);
	}
});
