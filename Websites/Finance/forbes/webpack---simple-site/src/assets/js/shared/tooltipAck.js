import { lSet, lGet } from './storageUtils';

function setAcknowledgement(key) {
	lSet(key, JSON.stringify({ ack: false, session: 0 }));
}

function getAcknowledgement(key) {
	return lGet(key);
}

function updateSessionCount(key, session) {
	lSet(key, JSON.stringify({ ack: false, session: session + 1 }));
}

function acceptAcknowledgement(key) {
	lSet(key, JSON.stringify({ ack: true }));
}

export {
	setAcknowledgement,
	getAcknowledgement,
	updateSessionCount,
	acceptAcknowledgement,
};
