const pianoToaster = document.querySelector('.piano-toaster');

/**
 * handel NewsLetter toaster animation for vetted channel section pages
 * to slide in after the top ad is unsticking Immediately
 */
const handelVettedToasterAnimation = () => {
	const topAdWrapper = document.querySelector('.fbs-ad--top-wrapper');
	const observer = new MutationObserver(((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				const currentClassState = mutation.target.classList.contains('fbs-ad--top-wrapper--sticky');
				if (!currentClassState) {
					if (pianoToaster) {
						setTimeout(() => {
							pianoToaster.classList.add('piano-toaster--sticky');
						}, 2000);
					}
				}
			}
		});
	}));
	observer.observe(topAdWrapper, { attributes: true });
};

document.addEventListener('fbs-piano-init', () => {
	const { primaryChannel: isHomePage = '' } = window.forbes['simple-site'].tracking;
	// home page logic
	if (isHomePage === 'home') {
		window.addEventListener('scroll', () => {
			const percentagePageScroll = Math.round((window.scrollY / document.body.scrollHeight) * 100);
			if (pianoToaster && percentagePageScroll === 5) {
				setTimeout(() => {
					pianoToaster.classList.add('piano-toaster--sticky');
				}, 2000);
				handelVettedToasterAnimation();
			}
		});
	}	else handelVettedToasterAnimation(); // vetted chansec logic
});
