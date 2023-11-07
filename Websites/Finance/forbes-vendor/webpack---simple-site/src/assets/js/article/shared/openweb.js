import { isMobile } from '../../shared/is-mobile';
import { showOpenWeb } from '../../shared/openWebUtils';

function addOpenwebScript(article) {
	const openwebDiv = article.querySelector('.openWeb-commenting');
	const anchor = article.querySelector('.open-web_anchor--desktop');
	// const toolTipText = document.querySelector(`#article-stream-${index} .tooltip-text:not(.following)`);

	if (openwebDiv && !openwebDiv.hasChildNodes() && showOpenWeb()) {
		// eslint-disable-next-line no-underscore-dangle
		if (typeof window.__OW_CONFIG__ === 'undefined') {
			const script = document.createElement('script');

			script.src = `https://launcher.spot.im/spot/${openwebDiv.dataset.id}`;
			script.dataset.spotimModule = 'spotim-launcher';
			script.dataset.messagesCount = 3;

			openwebDiv.insertAdjacentElement('beforebegin', script);

			// close tooltip on interacting anywhere in the conversation section
			// openwebDiv.addEventListener('click', () => {
			// 	hideTooltip(toolTipText, anchor);
			// });
		}
		const hiddenAnchor = article.querySelector('.open-web_anchor.hidden');
		if (!isMobile) {
			anchor?.addEventListener('click', () => {
				article.querySelector('[id*="open-web-"]').scrollIntoView({ behavior: 'smooth', block: 'end' });
			});
		}

		if (hiddenAnchor) {
			hiddenAnchor.classList.remove('hidden');
		}
	}
}

document.addEventListener('DOMContentLoaded', addOpenwebScript(document, 0));

export default addOpenwebScript;
