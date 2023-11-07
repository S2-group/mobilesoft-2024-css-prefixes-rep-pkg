const React = require('react');
const { default: StickyAdContainer } = require('@forbes/fbs-components/dist/cjs/components/StickyAdContainer/StickyAdContainer');
const { useReactComponent } = require('../../../../app/shared/componentLibraryService');

const {
	createElement,
	useEffect,
	useState,
	useRef,
} = React;

const onStickyAdClose = () => {
	const footer = document.querySelector('.footer');
	footer?.classList.remove('footer--mobile');
};

const StickyAd = () => {
	const [adRendered, setAdRendered] = useState(0);
	const fbsAdRef = useRef(null);

	useEffect(() => {
		if (!fbsAdRef.current) {
			return null;
		}

		const callBackOnRender = () => {
			setAdRendered(true);
		};

		const fbsAdElement = fbsAdRef.current;
		fbsAdElement.addEventListener('render', callBackOnRender);
		return () => {
			fbsAdElement.removeEventListener('render', callBackOnRender);
		};
	}, []);

	const fbsAd = createElement('fbs-ad', {
		ref: fbsAdRef,
		position: 'mobile',
		'ad-id': 'mobile-sticky',
	}, null);

	return createElement(StickyAdContainer, {
		visible: adRendered,
		className: 'sticky-ad',
		onClose: onStickyAdClose,
	}, fbsAd);
};

/**
 * Gets sticky Ad container component
 * @param {React.children} children prop to be passed to component
 * @returns Server side ready react component
 */
const getStickyAd = (children) => useReactComponent(StickyAd, {}, children);

module.exports = {
	getStickyAd,
};
