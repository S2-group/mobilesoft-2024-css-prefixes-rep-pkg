const { default: GlobalHeaderSubscribeToNewsletters } = require('@forbes/fbs-components/dist/cjs/components/GlobalHeader/GlobalHeaderSubscribeToNewsletters/GlobalHeaderSubscribeToNewsletters');
const { useReactComponent } = require('../app/shared/componentLibraryService');
const { newsLetterSubscribeTracking } = require('../assets/js/shared/trackingUtils');
/**
 * Gets newsLetterSubscriptions react component.
 * @returns Server side ready react component
 */
const getNewsLetterSubscriptionsComponent = () => useReactComponent(
	GlobalHeaderSubscribeToNewsletters,
	{ trackingProps: newsLetterSubscribeTracking },
);

module.exports = {
	getNewsLetterSubscriptionsComponent,
};
