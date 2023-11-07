const toolTip = document.querySelector('.audio-tooltip-text');

/**
 * Audio tooltip logic to show if the query param is met.
 */
function showAudioToolTip() {
	if (window.location.href.includes('utm_source=AudioToolTip')) {
		toolTip.classList.add('audio-tooltip-show');
	}
}

window.addEventListener('DOMContentLoaded', () => {
	if (toolTip) {
		const button = toolTip.querySelector('.tooltip-button');

		if (button) {
			button.addEventListener('click', () => {
				toolTip.classList.remove('audio-tooltip-show');
			});
		}
	}
});

export default showAudioToolTip;
