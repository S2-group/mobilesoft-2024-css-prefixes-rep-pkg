import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { GlobalHeaderMenu } from '@forbes/fbs-components';
import { newsLetterSubscribeTracking } from './trackingUtils';

const GlobalHeaderMenuWrapper = ({ ...restProps }) => {
	const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
	const props = { isNavMenuOpen, setIsNavMenuOpen };

	return (
		<GlobalHeaderMenu
			{...restProps}
			{...props}
			newsLetterSubscribeTrackingProps={newsLetterSubscribeTracking}
			showNewslettersSubscribeUI
		/>
	);
};

const renderGlobalHeaderMenu = () => {
	const globalHeaderMenu = document.getElementById('globalHeaderMenu');
	const globalHeaderData = window.forbes['simple-site'].globalHeaderData;

	if (globalHeaderMenu) {
		ReactDOM.render(<GlobalHeaderMenuWrapper menuConfig={globalHeaderData} />,
			globalHeaderMenu);
	}
};

renderGlobalHeaderMenu();
