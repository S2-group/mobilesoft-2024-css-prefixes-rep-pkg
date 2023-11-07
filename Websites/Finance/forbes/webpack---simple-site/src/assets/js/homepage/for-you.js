import { zephr } from '@forbes/fbs-tracking';
import DOMPurify from 'dompurify';
import checkStatus from '../shared/checkStatus';
// eslint-disable-next-line import/named
import { userDataObservable } from '../shared/universal-header';
import { fireGAEvent, getFvid, primeInviewEvent } from '../shared/tracking';
import { convertUriToHttps } from '../article/shared/articleUtilities';

// Template Types
// eslint-disable-next-line import/no-unresolved, import/extensions
import { template as createAccountTemplate } from '../../../../dist/templates/_forYouCreateAccount';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { template as noDataTemplate } from '../../../../dist/templates/_forYouNoData';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { template as templateStories } from '../../../../dist/templates/_forYouStories';

const mainElement = document.querySelector('.for-you__main');
let displayedStories = 2;
let forYouKeys = {};
let indexGa = 3;

/**
 * Get the article natural id from element attribute.
 * @param {HTMLElement} headlineElem The element to retrieve the attribute.
 * @returns {String} the article natural Id
 */
const getNaturalId = (headlineElem) => (headlineElem.getAttribute('natural-id') || '');

/**
 * Pass the correct tracking label if key in object
 * @param {String} articleId The articles id.
 * @param {Number} idx Index of story slot.
 * @param {Object} params The data passed to tracking.
 */
const passedParams = (articleId, idx, params = {}) => {
	if (articleId in forYouKeys) {
		params = { eventAction: 'click', eventLabel: `Homepage For You - Refresh - ${articleId}` };
	} else {
		params = { eventAction: 'click', eventLabel: `Homepage For You - Article ${idx} - ${articleId} - Refreshed` };
	}

	forYouKeys = {};
	fireGAEvent(params);
};

/**
 * Update eyebrow html and link.
 * @param {HTMLElement} eyebrow The element of the story.
 * @param {Object} nextStory The next story object.
 * @param {String} id The natural id of the article used for tracking.
 */
const updateEyebrow = (eyebrow, nextStory, id) => {
	if (!nextStory.channelname && !nextStory.sectionname) return;
	eyebrow.innerHTML = DOMPurify.sanitize(nextStory.channelname ? nextStory.channelname : nextStory.sectionname);
	eyebrow.setAttribute('href', nextStory.channel_url);
	eyebrow.setAttribute('data-ga-track', `Homepage For You - Eyebrow - ${id}`);
};

/**
 * Display the next headline on click.
 * @param {Object} forYouData The For-You data object.
 * @param {Number} idx Index of the story slot.
 */
const onClickNextStory = (forYouData, idx) => {
	const story = document.getElementById(`for-you__story-${idx}`);
	const eyebrow = story.querySelector('.for-you__eyebrow');
	const headlineElem = document.getElementById(`for-you__headline-${idx}`);
	passedParams(getNaturalId(headlineElem), headlineElem.getAttribute('data-ga-track'));

	if (forYouData.length) {
		const nextStory = forYouData.shift();
		// create new node to trigger animation
		const newElem = headlineElem.cloneNode(true);
		const naturalId = nextStory.naturalId || nextStory.naturalid;
		newElem.textContent = nextStory.title;
		newElem.setAttribute('href', `${nextStory.uri}?utm_source=for_you_${idx}`);
		newElem.setAttribute('natural-id', naturalId);
		newElem.setAttribute('data-ga-track', `Homepage For You - Article ${indexGa++} - ${naturalId}`);
		headlineElem.parentNode.replaceChild(newElem, headlineElem);
		updateEyebrow(eyebrow, nextStory, naturalId);
		const articleLinks = [headlineElem, newElem];

		articleLinks.forEach((link) => {
			link.addEventListener('click', () => {
				const naturalID = getNaturalId(link);
				forYouKeys[naturalID] = true;
			});
		});
	} else if (displayedStories > 1) {
		displayedStories--;
		headlineElem.parentNode.innerHTML = noDataTemplate({ align: 'left' });
		const target = document.querySelector('.for-you__no-data') || mainElement;
		primeInviewEvent(target, 'Homepage For You - "No More Recs" In-View', 0.05, 'scroll');
	} else {
		mainElement.innerHTML = noDataTemplate();
	}
};

/**
 * Click tracking for eyebrow click
 *
 * @param {HTMLElement} eyebrow The target eyebrow used to change ga-track
 * @param {Number} id The id needed to get the container for eyebrow.
 */
const onClickEyebrow = (eyebrow, id) => {
	const headlineElem = document.getElementById(`for-you__headline-${id}`);
	eyebrow.setAttribute('data-ga-track', `Homepage For You - EyeBrow - ${getNaturalId(headlineElem)}`);
	const params = { eventAction: 'click', eventLabel: `Homepage For You - Eyebrow - ${getNaturalId(headlineElem)}` };
	fireGAEvent(params);
};

/**
 * Display the initial For-You stories and set event listeners.
 * @param {Object} forYouData The For-You story data.
 * @param {string} firstName name to be displayed on the label in for-you block
 */
const initialStories = (forYouData, firstName) => {
	forYouData.forEach((story) => {
		story.uri = convertUriToHttps(story.uri);
	});
	const stories = forYouData.splice(0, displayedStories);
	mainElement.innerHTML = DOMPurify.sanitize(templateStories({ stories, firstName }), { ADD_ATTR: ['natural-id'] });

	const eyebrowElements = mainElement.querySelectorAll('.for-you__eyebrow');
	const replayElements = mainElement.querySelectorAll('.for-you__refresh');
	const headlineElems = mainElement.querySelectorAll('.for-you__headline');

	if (!replayElements || !eyebrowElements) {
		return;
	}

	headlineElems.forEach((link) => {
		link.addEventListener('click', () => {
			const naturalID = link.getAttribute('natural-id');
			forYouKeys[naturalID] = true;
		});
	});

	replayElements.forEach((replay, index) => {
		replay.addEventListener('click', () => onClickNextStory(forYouData, index + 1));
	});

	eyebrowElements.forEach((eyebrow, index) => {
		eyebrow.addEventListener('click', () => onClickEyebrow(eyebrow, index + 1));
	});
};

/**
 * Use user subscriber id or client id if user is not logged in.
 * @param {Object} zephrUser Zephr user object
 * @returns {Object} the user id to use for api call.
 */
const checkUserId = (zephrUser) => ({
	userId: getFvid(),
	defaultData: !!zephrUser,
});

/**
 * Fetch for-you homepage API call.
 * @param {string} userId user id to fetch the data.
 * @param {boolean} defaultData determine to fetch default data.
 * @param {string} api the api to fetch data from
 * @param {string} method method used to access api (defaults to GET)
 * @returns {Object} the for-you API results.
 */
// Temporary ignore unused vars as part of SS-9178
// eslint-disable-next-line arrow-body-style
const fetchForYouData = async ({ userId, defaultData }, api, method = 'GET') => { // eslint-disable-line no-unused-vars
	// const api = `https://seal.forbes.com/user?n=${maxArticles}&userId=${userId}&default=${defaultData}`;
	// Temporary add as part of SS-9178
	const options = { method };
	if (method === 'POST') {
		options.headers = { 'Content-Type': 'application/json' };
		// we need to pass empty body here,
		// if we pass no body at all the endpoint will error out
		options.body = JSON.stringify({});
	}

	return fetch(api, options)
		.then((response) => checkStatus(response))
		.then((res) => res.json())
		.then((data) => data);
};

/**
 * Fetch data for "For You" block, for the logged-in user
 * @param {Object} userParams userParams object.
 * @returns {Promise<Array>} Array containing the data to be used inside For You block.
 */
const fetchDataForLoggedInUser = async (userParams) => {
	const { recommendApi } = window.forbes?.['simple-site'] || {};
	const response = await fetchForYouData(userParams, `https://${recommendApi}/cr/${userParams.userId}`, 'POST');
	return response.data || [];
};

/**
 * Fetch data for "For You" block, for the guest user
 * @param {Object} userParams userParams object.
 * @returns {Promise<Array>} Array containing the data to be used inside For You block.
 */
const fetchDataForGuestUser = async (userParams) => {
	const response = await fetchForYouData(userParams, '/forbesapi/stream/premiumcontent.json?limit=10');
	return response.contentList || [];
};

/**
 * Fetch data for "For You" block, using different endpoints for logged-in vs logged-out users
 * @param {Object} userParams userParams object.
 * @param {string} firstName firstName for the user from Zephr
 * @returns {Promise<Array>} Array containing the data to be used inside For You block.
 */
const fetchForYouDataWrapper = async (userParams, firstName) => {
	try {
		return firstName
			? await fetchDataForLoggedInUser(userParams)
			: await fetchDataForGuestUser(userParams);
	} catch (e) {
		console.error('Error when fetching data for For You block');
		return [];
	}
};

/**
 * Create "Create Account" Template and attach Zephr modal to it
 */
const handleCreateAccountTemplate = () => {
	mainElement.innerHTML = createAccountTemplate();
	const createAccountButton = document.querySelector('.for-you__create-account-button');
	createAccountButton.addEventListener('click', () => {
		zephr.showLogin();
	});
};

/**
 * Prepare to get the for-you homepage data.
 * @param {Object} zephrUser the zephr user window object data.
 */
const prepareForYouBlock = async (zephrUser) => {
	const userParams = checkUserId(zephrUser);
	const firstName = zephrUser?.['first-name'];

	const forYouData = await fetchForYouDataWrapper(userParams, firstName);

	let forYouBlockSelector = '.for-you__create-account';
	let eventLabel = 'Homepage For You - "Create An Account" In-View';

	if (forYouData.length) {
		initialStories(forYouData, firstName);
		forYouBlockSelector = '.for-you__stories-wrapper';
		eventLabel = 'Homepage For You - "For You Articles" In-View';
	} else if (userParams.defaultData) {
		mainElement.innerHTML = noDataTemplate();
		forYouBlockSelector = '.for-you__no-data';
		eventLabel = 'Homepage For You - "No More Recs" In-View';
	} else {
		handleCreateAccountTemplate();
	}

	const target = document.querySelector(forYouBlockSelector) || mainElement;
	primeInviewEvent(target, eventLabel, 0.05, 'scroll');
};

userDataObservable.subscribe(prepareForYouBlock);
