import { zephr } from '@forbes/fbs-tracking';
import { isProd } from './clientConfigService';

/**
 * OpenWeb’s single sign-on (SSO) process.
 */
export default function startSSO() {
	const callback = (codeA, completeSSOCallback) => {
		// call your backend to receive codeB and return it
		// to OpenWeb via completeSSOCallback function

		let stagingLink = '-staging';
		if (/www-staging-\d+\.forbes\.com/.test(window.location.host)) {
			stagingLink += window.location.host.slice(11, 13);
		}
		fetch(`https://www${!isProd ? stagingLink : ''}.forbes.com/gcf-openweb-proxy/sso`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				code_a: codeA,
			}),
			credentials: 'include',
		}).then((res) => res.json()).then((res) => {
			if (res.codeB) {
				completeSSOCallback(res.codeB);
			}
		});
	};

	window.SPOTIM.startSSO(callback).then((userData) => {
		console.log('SpotIM user logged in!', userData);
	}).catch((reason) => {
		console.error('Error logging into spotim:', reason);
	});
}

/**
 * Check if SPOTIM.logout exists
 * @returns boolean true if SPOTIM.logout is available.
 */
function logOutOpenWeb() {
	if (window.SPOTIM && window.SPOTIM.logout) {
		return true;
	}
	return false;
}

document.addEventListener('spot-im-login-start', () => {
	zephr.showLogin();
});

// sync login for forbes with openWeb
document.addEventListener('fbs-zephr-init', (event) => {
	const zephrEvent = event.detail;
	if (zephrEvent?.user) {
		document.addEventListener('spot-im-api-ready', startSSO, false);
	} else if (logOutOpenWeb()) {
		window.SPOTIM.logout();
	}
});
