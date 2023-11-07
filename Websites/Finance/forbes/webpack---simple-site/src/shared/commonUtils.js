const profileNames = {
	COLLEGE: 'collegeprofile',
	COMPANY: 'companyprofile',
	PERSON: 'personprofile',
	TEAM: 'teamprofile',
	NFT: 'nftprofile',
	EXAMPLE: 'exampleprofile',
	DIGITAL_ASSETS: 'digitalassetsprofile',
	DIGITAL_EXCHANGES: 'digitalexchangesprofile',
};

const isEmpty = (obj) => Object.keys(obj).length === 0;

const videoExtractor = (videos) => (
	Array.isArray(videos)
		? videos.find((content) => ((content || {}).video || {}).videoId)
		: null
);

/**
 * creates a string to be used as a node value from an array of strings
 * @param {Array} splitText array of strings to be edited
 * @param {Number} limit the index in negative to where the split text will be edited
 * @returns a string to be used as a node value
 */
const updateNodeValue = (splitText = [], limit) => {
	const truncatedText = splitText.slice(0, splitText.length + limit).join('');
	const lastSpace = splitText[splitText.length + limit] === ' ' ? -1 : truncatedText.lastIndexOf(' ');
	const nodeValue = truncatedText.slice(0, lastSpace !== -1 ? lastSpace : truncatedText.length);

	return nodeValue;
};

module.exports = {
	profileNames,
	isEmpty,
	videoExtractor,
	updateNodeValue,
};
