function lGet(a) {
	try {
		return localStorage.getItem(a);
	} catch (e) {
		console.log('localstorage failed to get - ', a);
		return null;
	}
}

function lSet(a, b) {
	try {
		localStorage.setItem(a, b);
	} catch (e) {
		console.log('localstorage failed to set - ', a, b);
	}
}

function lRemove(a) {
	try {
		localStorage.removeItem(a);
	} catch (e) {
		console.log('localstorage failed to remove - ', a);
	}
}

function sGet(a) {
	try {
		return sessionStorage.getItem(a);
	} catch (e) {
		console.log('sessionstorage failed to get - ', a);
		return null;
	}
}

function sSet(a, b) {
	try {
		sessionStorage.setItem(a, b);
	} catch (e) {
		console.log('sessionstorage failed to set - ', a, b);
	}
}

function sRemove(a) {
	try {
		sessionStorage.removeItem(a);
	} catch (e) {
		console.log('sessionstorage failed to remove - ', a);
	}
}

module.exports = {
	lGet,
	lSet,
	lRemove,
	sGet,
	sSet,
	sRemove,
};
