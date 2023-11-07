/**
 * Check server response status and throw error for status code out of range
 * @param {Object} response server response object
 * @returns {Object} response object from the server if no error is thrown
 */
export default function checkStatus(response) {
	if (response.status < 200 || response.status >= 300) {
		const error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
	return response;
}
