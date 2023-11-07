const JQUERY_SCRIPT = 'https://i.forbesimg.com/assets/js/core/jquery-1.7.2.min.js';
const TYPOGRAPHY_STYLESHEET = 'https://images.forbes.com/assets/fonts/fbs-typography/0233/fbs-typography-2.33.css';
const EDIT_TOOLS_URL_PROD = 'edittools.forbes.com';

/**
 * Prevent scenario where a user could edit production data built to a staging server.
 * Also prevent edittools from editing HP content on 404 page.
 * @param {string} edittools the edittools string from the serverData
 * @param {boolean} is404 params to check if the page exists
 * @returns true if the environment of bertie is the same as Forbes website
 */
const allowEditTools = (edittools, is404) => {
	const isProdEdittools = edittools === EDIT_TOOLS_URL_PROD;
	const isStagingUrl = window.location.host.includes('www-staging');
	if ((isProdEdittools && isStagingUrl) || is404) {
		return false;
	}
	return true;
};

/**
 * Check for edittools cookie
 * @returns true if the bertie cookie exist
 */
const editToolsUserAuthorized = () => {
	if (document.cookie.indexOf('forbespress_auth_stage') !== -1 || document.cookie.indexOf('forbespress_auth') !== -1) {
		return fetch('/simple-data/authapi/acl/canUser')
			.then((res) => res.success)
			.catch((error) => console.error('could not fetch auth data', error));
	}
	return false;
};

/**
 * Get the edit tools body data
 * @param {Object} bodyData the edittools data for body
 * @returns an object of the section data
 */
const getChanSecReqBody = (bodyData) => {
	const {
		sectionId, channelId, name, channelName, layout, isVetted, channelColor, promotedContent,
	} = bodyData;

	return {
		channelSectionData: {
			id: sectionId ? channelId.concat(sectionId) : channelId,
			sectionId,
			channelName,
			sectionName: name,
			layout,
			isVetted,
		},
		color: channelColor,
		promotedContent,
	};
};

/**
 * Get the edit tools script source
 * @param {string} baseUrl the edittools string from the serverData
 * @returns the script src for edit tools
 */
const getEditToolsScriptSrc = (baseUrl) => `https://${baseUrl}/tools/init`;

const fetchRowsData = async (serverData, promotedContent) => {
	const { name } = serverData;
	serverData.promotedContent = promotedContent;

	// this needs to be dynamic for each page that uses edit tools
	const path = `/simple-data/chansec/${name}/rows/next`;
	const reqBody = getChanSecReqBody(serverData);

	const newPageData = await fetch(path, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(reqBody),
	});

	return newPageData;
};

export {
	getEditToolsScriptSrc,
	editToolsUserAuthorized,
	allowEditTools,
	TYPOGRAPHY_STYLESHEET,
	JQUERY_SCRIPT,
	fetchRowsData,
	getChanSecReqBody,
};
