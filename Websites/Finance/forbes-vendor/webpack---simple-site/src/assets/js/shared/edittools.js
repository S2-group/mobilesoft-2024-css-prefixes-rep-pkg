import { serverData } from './clientConfigService';
import {
	getEditToolsScriptSrc, editToolsUserAuthorized, allowEditTools, TYPOGRAPHY_STYLESHEET, JQUERY_SCRIPT, getChanSecReqBody,
} from './editToolsHelpers';

const {
	authorSlug,
	blogSlug,
	channelId,
	edittools,
	is404,
	name,
	subBlog,
	subBlogLocation,
	variantUri,
} = serverData;

// Create the event to re-render the list lander table
const listLanderTableEvent = new CustomEvent('listLanderTable');

document.addEventListener('DOMContentLoaded', () => {
	const htmlElement = document.getElementsByTagName('html')[0];
	const headElement = document.getElementsByTagName('head')[0];
	const mainRowsContainer = document.querySelector('body>.main-content>main');

	let promotedContentCache = {};

	let isEditToolsInitialized = false;

	/**
	 * Insert jQuery onto the page so that edittools loader
	 * (that is dependent on jQuery) doesn't blow up.
	 */
	function insertJQueryScript() {
		const script = document.createElement('script');
		script.src = JQUERY_SCRIPT;

		document.body.appendChild(script);
	}

	/**
	 * Insert the edittools loader script.
	 */
	function insertEditToolsScript() {
		const script = document.createElement('script');
		script.src = getEditToolsScriptSrc(edittools);

		document.body.appendChild(script);
	}

	/**
	 * Insert the fbs-typography stylesheet from headend.
	 */
	function insertFbsTypographyStylesheet() {
		const link = document.createElement('link');
		link.href = TYPOGRAPHY_STYLESHEET;
		link.type = 'text/css';
		link.rel = 'stylesheet';
		headElement.appendChild(link);
	}

	/**
	 * Insert HTML and run scripts that may be in it
	 */
	function insertHtml(text) {
		const div = document.createElement('div');
		div.innerHTML = text;

		const fragment = new DocumentFragment();
		fragment.appendChild(div);

		const scripts = fragment.querySelectorAll('script');
		scripts.forEach((element) => {
			const script = document.createElement('script');
			script.innerText = element.innerText;

			headElement.appendChild(script);

			element.remove();
		});

		mainRowsContainer.innerHTML = '';

		let node = div.firstChild;
		while (node) {
			mainRowsContainer.appendChild(node);
			mainRowsContainer?.classList.add('injectButtons');
			node = div.firstChild;
		}

		mainRowsContainer?.classList.add('injectButtons');
	}

	/**
	 * Fetch server rendered HTML for rows given Edit Tools data
	 */
	function fetchAndRenderRows(promotedContent) {
		let reqBody = {};
		serverData.promotedContent = promotedContent;

		if (serverData.pageType === 'll') {
			reqBody.promotedContent = promotedContent;
		} else if (channelId) {
			reqBody = getChanSecReqBody(serverData);
		} else if (blogSlug) {
			reqBody = {
				content: {
					promotedContent,
				},
				serverData,
				subBlogLocation,
			};
		} else {
			reqBody = { ...promotedContent };
		}

		// TODO - just do this server side and pass the edittools path for all in clientConfigService
		let path;
		if (serverData.pageType === 'll') {
			path = `/simple-data/lists/${serverData.landerName}`;
		} else if (blogSlug && authorSlug) {
			path = `/simple-data/contributor-homepage/rows/${blogSlug}/people/${authorSlug}`;
		} else if (blogSlug) {
			path = `/simple-data/contributor-homepage/rows/${blogSlug}`;
			if (subBlog) {
				path += `/${subBlog}`;
			}
		} else if (channelId) {
			path = `/simple-data/chansec/${name}/rows`;
		} else if (variantUri) {
			path = `/simple-data/homepage/${variantUri}/rows`;
		}

		fetch(path, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(reqBody),
		}).then((data) => data.text()).then((text) => {
			insertHtml(text);
			window.jQuery('.injectButtons').trigger('change');
			document.dispatchEvent(listLanderTableEvent);
		});
	}

	/**
	 * Listen to Edit Tools jQuery events
	 */
	function attachEventListeners() {
		window.jQuery(document)
			.on('editToolsPreviewInit', (event, response) => {
				promotedContentCache = response.data.promotedContent;
				fetchAndRenderRows(promotedContentCache);
			})
			.on('editToolsPreviewUpdate', (event, response) => {
				Object.keys(response.data.promotedContent).forEach((key) => {
					if (promotedContentCache) {
						promotedContentCache[key] = response.data.promotedContent[key];
					}
				});
				fetchAndRenderRows(promotedContentCache);
			});
	}

	/**
	 * Do necessary things to put edittools onto the page.
	 */
	function launchEditTools() {
		window.fbs_settings = {};

		insertJQueryScript();

		const jQueryInterval = setInterval(() => {
			if (window.jQuery) {
				clearInterval(jQueryInterval);

				attachEventListeners();
				insertEditToolsScript();
			}
		}, 200);
	}

	/**
	 * Check for edit tools initialization and toggle sidebar
	 */
	function createEditToolsButtonHandler(labelElement, containerElement) {
		return () => {
			// Check to see if ET is initialized
			if (!isEditToolsInitialized) {
				launchEditTools();
				isEditToolsInitialized = true;
				labelElement?.classList.add('et-label-show');
				labelElement.textContent = 'Hide Tools';
				containerElement.style.marginRight = 'calc(15% + 23px)';
			} else if (isEditToolsInitialized) {
				// Hide and show side bar
				const textContent = htmlElement.classList.contains('et-on') ? '' : 'HideTools';
				htmlElement.classList.toggle('et-on');
				labelElement?.classList.toggle('et-label-show');
				labelElement?.classList.toggle('et-label-hide');
				labelElement.textContent = textContent;
				containerElement.style.marginRight = textContent ? 'calc(15% + 11px)' : 'calc(15% + 23px)';
			}
		};
	}

	/**
	 * Add UI element that allows a logged in user to launch edittools.
	 */
	function insertLaunchButton() {
		insertFbsTypographyStylesheet();

		const container = document.createElement('div');
		const button = document.createElement('button');
		const icon = document.createElement('i');
		const label = document.createElement('span');
		const centerNav = document.getElementsByClassName('center')[0];
		container.setAttribute('class', 'et-btn-container');
		icon.setAttribute('class', 'icon icon-cog');
		label.setAttribute('class', 'et-label');
		button.setAttribute('class', 'edittools-btn');
		button.setAttribute('aria-label', 'Edit Tools');
		button.appendChild(icon);
		button.appendChild(label);
		container.appendChild(button);
		centerNav.appendChild(container);
		button.onclick = createEditToolsButtonHandler(label, container);
	}

	/**
	 * Get this party started.
	 */
	function init() {
		if (editToolsUserAuthorized() && allowEditTools(edittools, is404)) {
			insertLaunchButton();
		}
	}

	init();
});
