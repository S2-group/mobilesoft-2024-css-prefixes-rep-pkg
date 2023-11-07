/**
 * Apparently, you cannot pass a blank string to GPT and have it
 * show up in the Ad Inspector as a page level target. Adops expects
 * certain keys to appear in the bookmarklet even if they are blank. To
 * force those keys as page level targeting and show up in the bookmarket,
 * you can pass an empty array to GPT.
 *
 * Ad Inspector: https://github.com/forbes/ad-inspector
 *
 * @param {String} value
 * @return {Array|String}
 */
export function checkForNone(value) {
	return value === 'none' ? [] : value;
}

/**
 * Removes spaces and lowercases the param value
 * @param {String} type The param to parse
 * @returns {String} the clean param value
 */
export function removeSpaceAndLowerCase(param) {
	if (typeof param === 'string') {
		return (param || '').replace(/\s*/gi, '').toLowerCase();
	}
	return param;
}

/**
 * Removes certain characters from the channel section ad param strings
 * @param {String} params the value to clean up
 * @returns {String} the clean param value
 */
function sanitizeChanSecParams(params = '') {
	return (params || '').toLowerCase().replace(/[\s'"]+/g, '');
}

/**
 * Returns sanitized tracking values
 * @param {Object} The values from the tracking object
 * @param {String} type The param to parse
 */
export function getSanitizedTrackingValues(trackingValues = {}, type) {
	const updatedValue = removeSpaceAndLowerCase(checkForNone(trackingValues[`${type}Names`] || trackingValues[`${type}`])) || '';
	const res = sanitizeChanSecParams(updatedValue);
	return res;
}

/**
 * Parses and sets the ChanSec values for targeting
 * @param {Object} trackingValues The values from the tracking object
 * @param {String} type The param to parse
 * @returns {String} the clean param value
 */
export function setChanSecParam(trackingValues = {}, type = '') {
	if (!type || !Object.keys(trackingValues || {}).length) {
		return '';
	}

	return getSanitizedTrackingValues(trackingValues, type);
}

/**
 * Returns the section values for targeting when isVetted present
 * @returns {String} Final section value
 */
export function setSectionParamVetted() {
	let finalParam = '';
	const currentURL = window.location.pathname;
	const [section, subsection] = currentURL.split('/').filter((e) => !(e === '' || e === 'vetted')).map((item) => item.replace(/-/g, '&'));

	if (subsection) {
		finalParam = section ? `forbesvetted:${section}/${subsection} , forbesvetted:${section}` : `forbesvetted:/${subsection} , forbesvetted`;
	} else {
		finalParam = section ? `forbesvetted:${section}` : 'forbesvetted';
	}

	return finalParam;
}
