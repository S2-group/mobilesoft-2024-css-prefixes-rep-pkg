import { insertAd } from './adInsertion';
import { isMobile } from './is-mobile';

/**
 * Get the default grid state to manage various grids on the page.
 * @param {Boolean} [hasAds=false] True if we want the grid to insert ads, false otherwise.
 * @returns {Object} The default state for grid management.
 */
const getGridState = (hasAds = false) => ({
	activeGrids: [],
	lazyGrids: [],
	batchCount: null,
	loadMoreButton: null,
	contextElement: null,
	activeSeasonItem: null,
	initialized: false,
	hasAds,
});

/**
 * Adds a new ad to to th grid whenever the view more button is clicked
 * @param {HTMLNode} lazyGridItem first video grid item to be shown
 */
function addNewAd(lazyGridItem) {
	const newAdWrapperDiv = document.createElement('div');
	newAdWrapperDiv.classList.add('grid__ad-container');
	const newAd = document.createElement('div');
	const adType = isMobile ? 'mobilex' : 'topx';
	newAd.classList.add(`fbs-ad--${adType}-wrapper`);
	newAdWrapperDiv.append(newAd);

	lazyGridItem.parentNode.insertBefore(newAdWrapperDiv, lazyGridItem);
	insertAd(adType, newAdWrapperDiv);
}

/**
 * Destroys ads and removes them from the DOM.
 * @param {HTMLNode[]} ads The ads to remove/
 */
const destroyAds = (ads) => {
	ads.forEach((ad) => {
		ad.setAttribute('destroyed', 'true');
		ad.destroyAd();
		ad.parentNode.parentNode.remove();
	});
};

/**
 * Performs all the necessary actions when requesting to show the next lazy grid wrapper set.
 * @param {Object} state The grid management state.
 */
const handleLazyGrids = (state) => {
	const { lazyGrids, loadMoreButton } = state;
	const noLongerLazy = lazyGrids.shift();
	noLongerLazy?.classList.remove('grid__wrapper--lazy');

	if (state.hasAds) {
		addNewAd(noLongerLazy);
	}

	if (!lazyGrids.length) {
		loadMoreButton?.classList.add('hidden');
	}
};

/**
 * Toggles the load more button within the grid.
 * @param {Object} state The grid management state.
 */
const handleLoadMoreButton = (state) => {
	const { loadMoreButton, lazyGrids } = state;
	if (loadMoreButton && loadMoreButton.classList.contains('hidden') && lazyGrids.length) {
		loadMoreButton.classList.remove('hidden');
	} else if (loadMoreButton && !loadMoreButton.classList.contains('hidden') && !lazyGrids.length) {
		loadMoreButton.classList.add('hidden');
	}
};

/**
 * Parses through the grid wrappers and gets the grids that are lazy.
 * @param {HTMLNode[]} grids The grid wrapper sets within the grid.
 * @returns {HTMLNode[]} The lazy grid wrapper sets.
 */
const getLazyGrids = (grids = []) => (grids.filter((grid) => grid.classList.contains('grid__wrapper--lazy')));

/**
 * Displays the appropriate grid wrapper sets when selecting a new season.
 * @param {MousedownEvent} event mousedown event.
 * @param {Object} state The grid management state.
 * @param {HTMLNode} seasonDropdownText Node containing the season dropdown text and the HTML nodes within the dropdown.
 * @param {HTMLNode} episodeText Node containing the episode text.
 */
function seasonChange(event, state, seasonDropdownText, episodeText) {
	const selectedSeason = event.target.dataset.seasonindex || '1';
	const currentSeason = state.activeSeasonItem.dataset.seasonindex;

	if (currentSeason !== selectedSeason) {
		destroyAds(state.contextElement.querySelectorAll('.grid fbs-ad'));

		state.activeGrids.forEach((grid, i) => {
			if (i >= state.batchCount && !grid.classList.contains('grid__wrapper--lazy')) {
				grid.classList.add('grid__wrapper--lazy');
			}
			grid.classList.remove('active');
		});

		state.activeSeasonItem.classList.toggle('selected');

		// swap to newly selected grids with the corresponding season
		state.activeGrids = [...state.contextElement.querySelectorAll(`.season__${selectedSeason}`)];
		state.activeGrids.forEach((grid) => (grid.classList.add('active')));
		state.lazyGrids = getLazyGrids(state.activeGrids);
		state.batchCount = state.activeGrids.length - state.lazyGrids.length;

		const episodeCount = state.activeGrids.reduce((acc, grid) => (acc + Array.from(grid.querySelectorAll('.grid__item')).length), 0);
		seasonDropdownText.innerText = `Season ${selectedSeason}`;
		episodeText.innerText = episodeCount === 1 ? `${episodeCount} Episode` : `${episodeCount} Episodes`;
		handleLoadMoreButton(state);
		state.activeSeasonItem = event.target;
		state.activeSeasonItem.classList.toggle('selected');
	}
}

/**
 * Initialize the grid.
 * @param {HTMLNode} contextElement = The HTMLNode to use as the context for the grid. (HTML node containing your grid)
 * @param {Object} state - The grid management state.
 */
const initGrid = (contextElement, state) => {
	state.contextElement = contextElement;
	state.activeGrids = [...contextElement.querySelectorAll('.grid__wrapper.active')];
	state.lazyGrids = getLazyGrids(state.activeGrids);
	state.batchCount = state.activeGrids.length - state.lazyGrids.length;
	state.loadMoreButton = contextElement.querySelector('.grid__load-more');
	const seasonDropdownText = contextElement.querySelector('.grid__season-dropdown__text');
	const episodeText = contextElement.querySelector('.grid__episodes');

	if (!state.initialized && state.loadMoreButton) {
		state.initialized = true;
		state.loadMoreButton.addEventListener('click', () => {
			handleLazyGrids(state);
		});
		if (contextElement.querySelector('.grid__season-dropdown')) {
			const seasonsList = [...contextElement.querySelectorAll('.grid__season-item')];
			state.activeSeasonItem = seasonsList[seasonsList.length - 1];

			seasonsList.forEach((item) => {
				item.addEventListener('click', (e) => seasonChange(e, state, seasonDropdownText, episodeText));
			});

			contextElement.querySelector('.grid__season-dropdown').addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				contextElement.querySelector('.grid__season-dropdown')?.classList.toggle('active');
			});
		}
	}

	handleLoadMoreButton(state);
};

export {
	initGrid,
	getGridState,
};
