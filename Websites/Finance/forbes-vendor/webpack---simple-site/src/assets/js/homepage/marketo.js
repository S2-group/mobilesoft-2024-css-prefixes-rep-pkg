document.addEventListener('DOMContentLoaded', () => {
	const marketoForm = document.querySelector('.consumer__mktoForm');
	const confirmationText = document.querySelector('.consumer-marketing__confirmation');

	function insertLibrary() {
		const script = document.createElement('script');
		script.src = 'https://app-ab13.marketo.com/js/forms2/js/forms2.min.js';
		marketoForm.parentElement.appendChild(script);
	}

	function executeInterval() {
		let counter = 0;

		const executionInterval = setInterval(() => {
			counter++;
			if (counter >= 20) {
				clearInterval(executeInterval);
			} else if (window.MktoForms2) {
				clearInterval(executionInterval);
				const formId = (marketoForm.id || '').replace('mktoForm_', '');
				window.MktoForms2.loadForm('https://app-ab13.marketo.com', '790-SNV-353', formId, (form) => {
					form.onSuccess(() => {
						form.getFormElem().hide();
						confirmationText.style.display = 'block';
						return false;
					});
				});
			}
		}, 500);
	}

	if (marketoForm) {
		insertLibrary();
		executeInterval();
	}
});
