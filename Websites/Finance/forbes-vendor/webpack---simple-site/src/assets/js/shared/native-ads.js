document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('fbs-ad-render', (event) => {
		const renderEndedEvent = event.detail;
		if (!renderEndedEvent.slot) {
			return;
		}

		const removePlaceholder = (wrapper) => {
			const placeholder = wrapper.querySelector('.ntv-loading');
			if (placeholder) {
				placeholder.parentNode.removeChild(placeholder);
			}
		};

		const targetingMap = renderEndedEvent.slot.getTargetingMap();
		const position = renderEndedEvent.slot.getSlotElementId();
		const id = targetingMap['ntv-deskchannel'] || targetingMap['ntv-mobchannel'];
		// id will be defined for all the ntv-deskchannel-X/ntv-mobchannel-X ads on the page, in which case
		// we need to select the specific ad wrapper that matches the id for the ad that rendered.
		if (id) {
			const pos = targetingMap['ntv-deskchannel'] ? 'deskchannel' : 'mobchannel';
			const ad = document.querySelector(`#ntv-${pos}-${id}`);
			if (!ad) {
				return;
			}
			const wrapper = ad.parentNode.parentNode;
			removePlaceholder(wrapper);
		// if no id exists but the position includes 'ntv-' then it is either the ntv-home
		// or ntv-mobhome position. There is only one of these on the page so the wrapper can
		// just be selected by the position
		} else if (position.includes('ntv-')) {
			const wrapper = document.querySelector(`.fbs-ad--${position}-wrapper`);
			if (wrapper) {
				removePlaceholder(wrapper);
			}
		}
	});
});
