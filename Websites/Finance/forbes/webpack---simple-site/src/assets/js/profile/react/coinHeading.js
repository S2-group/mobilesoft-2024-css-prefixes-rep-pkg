const React = require('react');
const { default: CoinHeading } = require('@forbes/fbs-components/dist/cjs/components/CoinHeading/CoinHeading');
const { default: WatchlistButton } = require('@forbes/fbs-components/dist/cjs/components/Button/WatchlistButton/WatchlistButton');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');
const { reactComponentsTracking } = require('../../shared/react-tracking');
const { fireGAEvent } = require('../../shared/trackingUtils');

const options = {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json',
	},
};

/**
 * Prepares tracking props data for watchlist button
 * @param {string} profileName The profile name
 * @returns tracking props data
 */
const getWatchlistbuttonTracking = (profileName) => ({
	track: reactComponentsTracking,
	category: 'Forbes Digital Assets',
	action: 'Click',
	watchLabel: `Watch{${profileName}}`,
	unwatchLabel: `RemovefromWatchlist{${profileName}}`,
});

/**
 * Handles removing from the watchlist
 * @param {string} symbol of the digital coin
 * @param {Function} callback React useState hook
 */
const removeFromWatchlist = (symbol) => (callback) => {
	const { user } = window.Zephr || {};
	const { userSessionId } = window.forbes?.['simple-site'] || {};

	if (!user || !userSessionId) {
		return;
	}

	fetch('/simple-data/unwatch', {
		body: JSON.stringify({
			symbol,
			userId: userSessionId,
		}),
		...options,
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.UpdateTime) {
				callback(false);
			}
		});
};

/**
 * Handles adding to the watchlist
 * @param {string} symbol of the digital coin
 * @param {Function} callback React useState hook
 */
const addToWatchlist = (symbol) => (callback) => {
	const watchTime = new Date().toUTCString();
	const { user, utils } = window.Zephr || {};
	const { userSessionId } = window.forbes?.['simple-site'] || {};

	if (!user || !userSessionId) {
		utils?.showLogin?.();

		fireGAEvent('Zephr', 'daRegWall', 'shown');

		return;
	}

	fetch('/simple-data/watch', {
		body: JSON.stringify({
			symbol,
			userId: userSessionId,
			watchTime,
		}),
		...options,
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.UpdateTime) {
				callback(true);
			}
		});
};

/**
 * Gets Coin Heading component
 * @param {Object} coinData content crypto data
 * @param {Object} keyMetrics fundamental data
 * @param {Object} isLoggedIn true if user is logged in
 * @returns Server side ready react component
 */
const getCoinHeading = (coinData = {}, keyMetrics = {}, isLoggedIn = false) => {
	const {
		logo, name, isAddedToWatchlist: added, symbol: originalSymbol,
	} = coinData;
	const { displaySymbol: symbol } = keyMetrics;

	const watchlistButton = React.createElement(WatchlistButton, {
		added,
		removeFromWatchlist: removeFromWatchlist(originalSymbol),
		addToWatchlist: addToWatchlist(originalSymbol),
		trackingProps: isLoggedIn && getWatchlistbuttonTracking(coinData.name),
	});

	return useReactComponent(CoinHeading, {
		logo, name, symbol,
	}, watchlistButton);
};

module.exports = {
	getCoinHeading,
};
