// Social Sharing Init and Config
import FbsSharingService from '@forbes/fbs-sharing';
import { serverData } from './shared/clientConfigService';

const fbsShareInstance = new FbsSharingService();

const ShareType = {
	facebook: 'facebook',
	twitter: 'twitter',
	linkedIn: 'linkedin',
	google: 'google',
	email: 'email',
};

// js snippet to fetch query parameter values by name
function getParameterByName(name, url) {
	name = name.replace(/[[\]]/g, '\\$&');
	// the regex will match what comes after query parameter name and extract its value
	// for example, if the query parameter is "subject", it will match what comes after "subject="
	const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
	const results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getListLanderShareTitle() {
	return `#${(document.head.getElementsByTagName('title')[0] || {}).textContent || ''}: ${serverData.shareText}`;
}

function getShareInfo() {
	const title = serverData.pageType === 'll' ? getListLanderShareTitle() : (document.head.getElementsByTagName('title')[0] || {}).textContent || serverData.title || '';
	const description = document.head.querySelector('[name=description]').getAttribute('content') || '';

	return { // TODO: Get meta data more efficiently
		title,
		description,
		uri: `https://www.forbes.com${window.location.pathname}`,
	};
}

function customTwitterShare(meta) {
	const encodedUri = encodeURIComponent(meta.uri);
	const encodedText = encodeURIComponent(meta.description);
	const windowConfig = 'width=400,height=500,resizable=false';
	const link = `https://twitter.com/intent/tweet?url=${encodedUri}&text=${encodedText}`;

	window.open(link, 'Article Share', windowConfig).focus();
}

// Social platforms
const shareFb = [...document.querySelectorAll('.facebook')];
shareFb.forEach((element) => {
	element.addEventListener('click', (event) => {
		fbsShareInstance.shareArticleOnSocial(event, ShareType.facebook, getShareInfo());
	});
});

const shareLi = [...document.querySelectorAll('.linkedin')];
shareLi.forEach((element) => {
	element.addEventListener('click', (event) => {
		fbsShareInstance.shareArticleOnSocial(event, ShareType.linkedIn, getShareInfo());
	});
});

const shareTw = [...document.querySelectorAll('.twitter')];
shareTw.forEach((element) => {
	element.addEventListener('click', (event) => {
		if (serverData.useCustomSharing) {
			customTwitterShare(getShareInfo());
		} else {
			fbsShareInstance.shareArticleOnSocial(event, ShareType.twitter, getShareInfo());
		}
	});
});

const shareEmail = [...document.querySelectorAll('.email')];
shareEmail.forEach((element) => {
	element.addEventListener('click', (event) => {
		const articleLink = event.target.href;
		let shareInfo = getShareInfo();
		// skip the automatic email metadata retrieval
		// if we are already providing metadata in mailto query params
		if (articleLink && articleLink.includes('subject') && articleLink.includes('body')) {
			const subject = getParameterByName('subject', articleLink);
			const body = getParameterByName('body', articleLink);
			// extract the share url from the email body
			const uriMatches = body.match(/\bhttps?:\/\/\S+/gi);
			shareInfo = {
				title: subject,
				description: body,
				uri: uriMatches.length ? uriMatches[0] : `https://www.forbes.com${window.location.pathname}`,
			};
		}
		fbsShareInstance.shareArticleOnSocial(event, ShareType.email, shareInfo);
	});
});
