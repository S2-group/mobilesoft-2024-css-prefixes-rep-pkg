import { getSubnav } from '../profile/react/subnav';

/**
 * Hydrates the Subnav component after being rendered from the server.
 */
const hydrateFdaSubnav = () => {
	const subnavContainer = document.getElementById('subnav__container--fda');
	const { fdaSubNav, coinData = {} } = window.forbes['simple-site'];

	if (subnavContainer && fdaSubNav) {
		getSubnav(fdaSubNav, coinData.name).hydrate(subnavContainer);
	}
};

export default hydrateFdaSubnav;
