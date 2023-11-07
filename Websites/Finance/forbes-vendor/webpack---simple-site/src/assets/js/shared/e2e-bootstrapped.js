import { serverData } from './clientConfigService';

document.addEventListener('DOMContentLoaded', () => {
	if (serverData.isE2E) {
		window.isE2EBootstrapped = true;
	}
});
