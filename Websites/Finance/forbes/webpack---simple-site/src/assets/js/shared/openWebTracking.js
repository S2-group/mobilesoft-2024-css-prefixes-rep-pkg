import { fireGAEvent } from './tracking';

const trackingEvent = {
	eventCategory: 'Template Area Interaction',
	eventAction: 'Click',
	eventLabel: '',
};

/**
 * Add event listener for commenting related actions
 * @param {String} event tracking event
 * @param {String} label tracking label
 * @param {String} action tracking action
 */
function addOpenWebInteractionEventListener(event, label, action) {
	document.addEventListener(event, () => {
		trackingEvent.eventLabel = label;
		trackingEvent.eventAction = action;
		fireGAEvent(trackingEvent);
	});
}

// The user has clicked the Send button.
addOpenWebInteractionEventListener('spot-im-current-user-sent-message-clicked', 'commenting user click on send button', 'Click');

// The user has clicked the Show More Comments button.
addOpenWebInteractionEventListener('spot-im-show-more-comments-clicked', 'commenting user click on show more comments button', 'Click');

// The user has opened the list of likers.
addOpenWebInteractionEventListener('spot-im-hover-like-details', 'commenting user opens list of likers', 'mouseenter');

// The user has clicked to up vote a comment (thumbs up).
addOpenWebInteractionEventListener('spot-im-user-up-vote-click', 'commenting user click on thumbs up', 'Click');

// The user has clicked the Share button.
addOpenWebInteractionEventListener('spot-im-share-drop-down', 'commenting user click on share button', 'Click');

// The user has clicked the notifications (bell) icon.
addOpenWebInteractionEventListener('spot-im-notification-drop-down-link', 'commenting user click on notification bell icon', 'Click');

// The user has clicked a specific notification.
addOpenWebInteractionEventListener('spot-im-user-notifications-click', 'commenting user click on specific notification', 'Click');

// The user triggered a new log in process.
addOpenWebInteractionEventListener('spot-im-login-start', 'commenting user triggers registration through commenting section', 'Click');

// A user logged in to the system. Fired once after a successful login process.
addOpenWebInteractionEventListener('spot-im-post-login', 'commenting user signs in through commenting section', 'Click');

// The Conversation is initially viewed by the user.
addOpenWebInteractionEventListener('spot-im-conversation-viewed', 'user views commenting section', 'View');
