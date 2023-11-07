/**
 * Return next midnight time in UTC format.
 * @returns {Object} Date
 */
const expiresMidnight = () => {
	const midnight = new Date();
	midnight.setUTCHours(24, 0, 0, 0);

	return midnight;
};

/**
 * Creates a new cookie string.
 * @param {String} key The cookie name to add
 * @param {String} value The value of the cookie
 * @param {Date} duration Date in milliseconds
 * @returns {String} The cookie string to be added client side
 */
const createCookie = (key = '', value = '', duration = Date.now()) => (`${key}=${value}; expires=${duration}; path=/; domain=forbes.com`);

/**
 * Parses through the cookie string and returns a cookie matching the name given to the function along with its value.
 * @param {String} cookies The cookie string to parse through.
 * @param {String} cookieName The name of the cookie to get.
 * @returns {String} The cookie with the requested name and its value.
 */
const getCookie = (cookies = '', cookieName) => (cookies.split(';').find((cookie) => (cookie.indexOf(`${cookieName}=`) > -1)));

/**
 * Split and return the cookie value.
 * @param {String} cookies The cookie string to parse through.
 * @param {String} cookieName The name of the cookie to get.
 * @returns {String} cookie value.
 */
const getCookieValue = (cookies = '', cookieName) => ((getCookie(cookies, cookieName) || '').split('=')[1]);

/**
 * Get the client id from the cookie string.
 * @param {String} cookies The cookie string to parse through.
 * @param {Boolean} isE2E Used to check if E2E.
 * @returns {String} The client id value
 */
const getCookieClientId = (cookie = '', isE2E) => {
	const E2E_CLIENT_ID = '00000000000000000000000000000000000';
	return isE2E ? E2E_CLIENT_ID : getCookieValue(cookie, 'client_id');
};

module.exports = {
	expiresMidnight,
	createCookie,
	getCookie,
	getCookieValue,
	getCookieClientId,
};
