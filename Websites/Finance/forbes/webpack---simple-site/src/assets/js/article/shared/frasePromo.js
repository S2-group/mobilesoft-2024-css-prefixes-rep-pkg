const { primeInviewEvent } = require('../../shared/tracking');

const addScrollTrackingToFrasePromo = () => {
	const frasePromo = document.querySelector('.frase-promo');
	primeInviewEvent(frasePromo, 'frase-promo-in-view');
};

export default addScrollTrackingToFrasePromo;
