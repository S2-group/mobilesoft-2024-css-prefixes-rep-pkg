/**
 * Check whether to make the number have 2 digits or 4 digits.
 *
 * @param {number} num The value to format.
 * @returns {number} How many digits after the point.
 */

function generalCaseFormatting(num) {
	return num >= 1 || num <= -1 || Number(num.toFixed(4)) === 0 ? 2 : 4;
}

/**
 * Get the number of zeros after the decimal.
 *
 * @param {number} num The value to check its zeros.
 * @returns {number} Amount of zeros after the decimal.
 */

function zerosAfterTheDecimal(num) {
	if (num > 1 || num === 0) return 0;
	return -Math.floor(Math.log10(num) + 1);
}

/**
 * Check whether to make the number have 6 digits or 8 digits.
 *
 * @param {number} num The value to format.
 * @returns {number} How many digits after the point.
 */

function formatDigits(num) {
	if (zerosAfterTheDecimal(num) >= 5 && num < 0.000005) return 8;
	if (zerosAfterTheDecimal(num) >= 3 && num < 0.0005) return 6;
	return generalCaseFormatting(num);
}

/**
 * Sanitizes string data
 * @param {string} data CoinData description which may contain HTML tags
 * @returns string data with removed HTML characters
 */
const removeHtmlFromData = (data) => {
	if (!data) return '';
	// TODO: We need to improve this regex to have more flexibility
	const regexToRemoveHTMLTags = /(<([^>]+)>)/gi;
	return data.replace(regexToRemoveHTMLTags, '');
};

module.exports = {
	formatDigits,
	generalCaseFormatting,
	removeHtmlFromData,
	zerosAfterTheDecimal,
};
