import { FbsCarouselComponent } from '@forbes/fbs-carousel';
import carouselNavigateByDots from './carousel-navigate';
import { eventCalculate } from '../shared/carouselUtilities';

// Functionality for the related/key connections module on company and team pages.
customElements.define('fbs-carousel', FbsCarouselComponent);
document.addEventListener('DOMContentLoaded', () => {
	const carouselConnectionsCompany = document.getElementsByClassName('profile-connections__slider')[0];
	const connectionCompanyCarouselDots = [...document.querySelectorAll('.profile-connections .dots')];

	if (carouselConnectionsCompany) {
		eventCalculate(carouselConnectionsCompany, connectionCompanyCarouselDots);
	}

	carouselNavigateByDots(connectionCompanyCarouselDots, carouselConnectionsCompany);
});
