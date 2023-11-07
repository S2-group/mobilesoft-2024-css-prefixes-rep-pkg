import { updateNodeValue } from '../../../../shared/commonUtils';

const splitRegexMap = {
	words: /\s+/,
	chars: '',
};

const maxHeight = 53; // px value that can fit 2 lines of bio on any viewport
const WORDS = 'words';
const CHARS = 'chars';

/**
 * Traverse DOM tree starting at element and keep only nodes with combined up to limit words
 * @param {Node} element from in dom
 * @param {integer} limit the number of words to limit by
 * @param {string} splitKey A key to reference how we want to split the text
 * @returns {integer} The new limit
 */

// Client side version of same function within dataParseService.js
function traverse(element, limit = 0, splitKey = WORDS) {
	try {
		if (!element) return limit;

		// Positive limit means process this element normally. Negative or zero limit means remove it.
		const expression = splitKey === WORDS ? ' ' : '';
		if (limit > 0) {
			// Text nodes have non empty words that are split on whitespace. Other node types do not have words.
			const splitText = (element.nodeType === window.Node.TEXT_NODE ? element.nodeValue.replace(/\s+/, ' ').split(expression).filter(Boolean) : []);
			limit -= splitText.length;
			// If this node has too many words - extra words are removed.
			// Remaining words are separated by a single space.
			// Original whitespace characters that separated the word are not important because this goes into HTML.
			if (limit < 0) {
				if (splitKey === WORDS) {
					const leadingSpace = element.nodeValue.match(/^\s+/) ? ' ' : '';
					element.nodeValue = leadingSpace + splitText.slice(0, splitText.length + limit).join(' '); // Limit is negative here (see the if before this)
				}

				if (splitKey === CHARS) {
					element.nodeValue = updateNodeValue(splitText, limit);
				}
			}

			let i = 0;
			while (i < element.childNodes.length) {
				const newLimit = traverse(element.childNodes[i], limit, splitKey);

				// Negative or zero limit means traverse invocation above removed a node (see else clause below)
				// Next node is at i if a node was removed or at i + 1 if a node was not removed
				// Make sure to increment i when a node is found that goes over the limit, otherwise it will go back
				// into the while loop and remove the last node which should still be there.
				if (newLimit > 0 || (limit >= 0 && newLimit < 0)) {
					i++;
				}

				limit = newLimit;
			}
		} else {
			element.remove();
		}

		return limit;
	} catch (err) {
		return undefined;
	}
}

function createElementFromHTML(htmlString) {
	const div = document.createElement('div');
	const innerDiv = document.createElement('div');
	div.appendChild(innerDiv);
	innerDiv.innerHTML = htmlString.trim();
	return div.firstChild || div;
}

/**
 * Limit the number of words in arbitrarily nested HTML structure
 * @param {string} htmlString html to limit as a string.
 * @param {integer} limit the number to limit the truncation count to.
 * @param {string} splitKey the key to split the regex by.
 * @returns {string} Truncated html
 */

// Client side version of same function within dataParseService.js
function limitTextContent(htmlString, limit, splitKey = WORDS) {
	try {
		const el = createElementFromHTML(htmlString);
		const splitText = el.textContent.split(splitRegexMap[splitKey]);
		if (splitText.length > limit) {
			traverse(el, limit, splitKey);
		}
		return el.innerHTML;
	} catch (err) {
		return undefined;
	}
}

const checkIfElementOverFlowing = (elem, _maxHeight) => elem.getBoundingClientRect().height > _maxHeight;

const getElemBios = (streamIndex) => {
	try {
		return document.getElementById(`article-stream-${streamIndex}`).querySelectorAll('.contrib-bio');
	} catch {
		return [];
	}
};

const getFullHtmlDescription = (elem) => elem.dataset.authorHtmlDescription;

const setInnerHtmltoFullDescription = (elem, fullDescription) => {
	elem.innerHTML = fullDescription || '';
};

const setAndCheckIfFullTextCanFit = (elem, _maxHeight, fullDescription) => {
	setInnerHtmltoFullDescription(elem, fullDescription);
	return !checkIfElementOverFlowing(elem, _maxHeight);
};

const setIsExpanded = (elem, bool) => {
	elem.dataset.isExpanded = (bool ? 'true' : 'false');
};

const getIsExpanded = (elem) => elem.dataset.isExpanded === 'true';

const appendReadMoreBtn = (elem) => {
	try {
		setIsExpanded(elem, false);
		const span = document.createElement('span');
		span.className = 'read-more-container';
		span.innerText = '...';

		const buttonReadMore = document.createElement('button');
		buttonReadMore.className = 'toggle-description contributor-about__read-more';
		buttonReadMore.innerHTML = '&nbsp;Read More';

		span.appendChild(buttonReadMore);
		elem.appendChild(span);
	} catch (err) {
		console.log('APPEND READ MORE ERROR', err);
	}
};

const appendReadLessBtn = (elem) => {
	setIsExpanded(elem, true);

	const buttonReadLess = document.createElement('button');
	buttonReadLess.className = 'toggle-description contributor-about__read-less';
	buttonReadLess.innerHTML = '&nbsp;Read Less';
	elem.appendChild(buttonReadLess);
};

const getWordsArray = (fullDescription) => {
	const textBio = createElementFromHTML(fullDescription).innerText;
	return textBio
		.trim()
		.split(/&nbsp;|\s/)
		.filter((c) => c !== '');
};

const getAndSetNumberOfWordsThatCanFit = (elem, _maxHeight) => {
	const fullDescription = getFullHtmlDescription(elem);
	const wordsArray = getWordsArray(fullDescription);
	let prevBio = '';
	let textThatCanFit = '';
	appendReadMoreBtn(elem);

	for (let i = 1; i < wordsArray.length; i++) {
		textThatCanFit = limitTextContent(fullDescription, i, WORDS);
		elem.innerHTML = textThatCanFit;
		appendReadMoreBtn(elem);
		const isOverFlowing = checkIfElementOverFlowing(elem, _maxHeight);
		if (isOverFlowing) {
			elem.innerHTML = prevBio;
			appendReadMoreBtn(elem);
			break;
		}
		if (textThatCanFit) {
			prevBio = textThatCanFit;
		}
	}
};

/**
 * Truncate all contributor bios for an article to two lines
 * @param {integer} streamIndex index of article in the stream
 * @param {boolean} isPremiumTemplateType whether the article template has a premium template or not
 */

const truncateContribBiosForArticle = (streamIndex, isPremiumTemplateType) => {
	const truncate = (elemBio) => {
		const isExpanded = getIsExpanded(elemBio);

		const update = () => {
			const fullDescription = getFullHtmlDescription(elemBio);
			if (!fullDescription) {
				elemBio.innerHTML = '';
				return;
			}
			const canShowFullText = setAndCheckIfFullTextCanFit(elemBio, maxHeight, fullDescription);

			if (canShowFullText) return;

			if (isExpanded) {
				setInnerHtmltoFullDescription(elemBio, fullDescription);
				appendReadLessBtn(elemBio);
				return;
			}

			getAndSetNumberOfWordsThatCanFit(elemBio, maxHeight);
		};

		const addClickHandlerDataAttributesAndClassToBtn = (elem) => {
			const btnReadMoreOrLess = elem.querySelector('button');
			if (!btnReadMoreOrLess) return;

			const handleBtnClick = () => {
				setIsExpanded(elem, !isExpanded);
				truncate(elem);
			};

			const addDataAttributesToBtn = () => {
				const dataVal = `contrib block ${isExpanded ? 'reduce' : 'expand'}`;
				btnReadMoreOrLess.dataset.varsEventLabal = dataVal;
				btnReadMoreOrLess.dataset.gaTrack = dataVal;
			};

			if (isPremiumTemplateType) {
				btnReadMoreOrLess.classList.add('color-body');
			}

			btnReadMoreOrLess.removeEventListener('click', handleBtnClick);
			btnReadMoreOrLess.addEventListener('click', handleBtnClick);

			addDataAttributesToBtn();
		};

		update();
		addClickHandlerDataAttributesAndClassToBtn(elemBio);
	};

	const elemsNodeList = getElemBios(streamIndex);
	const elems = Array.prototype.slice.call(elemsNodeList);

	for (let i = 0; i < elems.length; i++) {
		truncate(elems[i], i);
	}
};

export default truncateContribBiosForArticle;
