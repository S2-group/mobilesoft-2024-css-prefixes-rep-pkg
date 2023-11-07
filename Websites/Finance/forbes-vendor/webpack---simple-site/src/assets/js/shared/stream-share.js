function addHandlers() {
	const shareElements = [...document.querySelectorAll('.social-share__icon')];

	for (let i = 0; i < shareElements.length; i++) {
		const shareEl = shareElements[i];
		shareEl.onclick = (e) => {
			e.preventDefault();
			const link = shareEl.getAttribute('href');
			if (!shareEl.classList.contains('search-hidden-icon')) {
				window.open(link, '', 'width=400,height=500,resizable=1');
			}
		};
	}
}

/**
 * this function returns wither the article is masthead or preimum
 */
function checkArticleIsPremiumOrMasthead() {
	const check = window.forbes['simple-site'] || {};

	if (check.tracking.templateType === 'premium' || check.tracking.templateSubType === 'masthead') {
		return true;
	}

	return false;
}

function toggleIcons() {
	const sharrows = [...document.querySelectorAll('.social-share__arrow')];

	for (let i = 0; i < sharrows.length; i++) {
		const arrow = sharrows[i];
		arrow.onclick = () => {
			if (window.outerWidth <= 1024) {
				const parent = arrow.parentElement;
				parent.classList.toggle('social-share--share-open');
			}
		};
	}
}

document.addEventListener('DOMContentLoaded', () => {
	addHandlers();
	toggleIcons();
});

module.exports = {
	addHandlers,
	toggleIcons,
	checkArticleIsPremiumOrMasthead,
};
