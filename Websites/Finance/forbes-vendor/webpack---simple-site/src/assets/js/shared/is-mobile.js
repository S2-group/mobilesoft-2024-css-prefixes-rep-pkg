const { checkIsIOS, checkIsMobile, checkIsTablet } = require('@forbes/fbs-utils');

const { userAgent } = navigator;

const isMobile = checkIsMobile(userAgent);
const isTablet = checkIsTablet(userAgent);
const isIOS = checkIsIOS(userAgent, window);

module.exports = {
	isMobile,
	isTablet,
	isIOS,
};
