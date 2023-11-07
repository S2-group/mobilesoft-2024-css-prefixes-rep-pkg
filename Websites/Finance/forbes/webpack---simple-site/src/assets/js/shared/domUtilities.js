/**
* Handles simple element creation.
@param {string} [type='div'] The type of element you'd like to create.
@param {Object} [attributes={}] The attributes you'd like to add to new element.
@return {Element} Returns an element with all attributes added.
*/
function createSimpleElement(type = 'div', attributes = {}) {
	const simpleElement = document.createElement(type);
	Object.keys(attributes).forEach((key) => simpleElement.setAttribute(key, attributes[key]));
	return simpleElement;
}

/**
 * Toggle class into dom element
 * @param {String} className contains the class name to toggle
 * @param {DomElement} element the element that we want to toggle the event to
 */
const toggleClassEventListener = (className, element) => {
	element?.classList.toggle(className);
};

/**
 * make the expanded and collapse button classes
 * @param {String} buttonClass has the class name of the div that has the truncate
 * @param {Boolean} isGallery shows if the truncate is for a gallery
 * @param {Boolean} isCollaps shows if it a collapse or expande
 * @returns {String} a string that contains the class for a truncate or expand
 */
function getExpandButtons(buttonClass, isGallery = false, isCollaps = false) {
	let button = `${buttonClass} `;

	if (isGallery) {
		button = '.gallery-info__section';
	}

	button = button.concat(`${isCollaps ? '.truncate-text' : '.expand-text'}`);
	return button;
}

/**
 *	Adds the functionalty to truncate text and expand it in event listener
 * @param {String} parentClass contains the father class of the elements
 * @param {String} expandedClass contains the expanded button class
 * @param {String} shortendClass contains the collapesed button class
 * @param {Boolean} isGallary showes if its a gallery
 */
function truncateCaption(parentClass, expandedClass, shortendClass, isGallery = false) {
	const parentElement = document.querySelector(parentClass);

	if (parentElement && parentElement.querySelector('.expandable')) {
		const shortenedText = parentElement.querySelector(shortendClass);
		const expandedText = parentElement.querySelector(expandedClass);
		const expandButton = getExpandButtons(shortendClass, isGallery, true);
		const collapseButton = getExpandButtons(expandedClass, isGallery, false);

		[expandButton, collapseButton].forEach((selector, index) => {
			document.querySelectorAll(selector).forEach((el) => {
				el.setAttribute('data-ga-track', `${isGallery === true ? 'Galleries ' : ''}Caption - ${index === 0 ? 'Expand' : 'Reduce'}`);
			});
		});

		[expandedText, shortenedText].forEach((caption) => {
			if (!caption.hasAttribute('clickable')) {
				caption.addEventListener('click', () => {
					toggleClassEventListener('hidden', expandedText);
					toggleClassEventListener('hidden', shortenedText);
				});
				caption.setAttribute('clickable', '');
			}
		});
	}
}

/**
 * Loop through the elements and toggle className.
 * @param {Object} The DOM element.
 * @param {string} The element class name.
 * @param {string} The action to apply to element classList.
 */
const updateElementClass = (element, className, action) => {
	if (element) {
		element.classList[action](className);
	}
};

export {
	createSimpleElement,
	updateElementClass,
	truncateCaption,
	toggleClassEventListener,
};
