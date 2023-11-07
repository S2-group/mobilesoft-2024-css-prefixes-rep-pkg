import React, { useState, useEffect } from 'react';

import clsx from 'clsx';

import { showConsentBanner, isConsentManagementLoaded } from '@jimdo/consent-management';

import * as classes from './index.module.scss';

type ConsentManagementButtonProps = {
    label: string;
    'data-tracking'?: string;
    className?: string;
};

const showBanner = () => showConsentBanner({ layer: 2 });

export const ConsentManagementButton = ({
    label,
    className,
    ...props
}: ConsentManagementButtonProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        isConsentManagementLoaded()
            .then(setVisible)
            .catch(() => setVisible(false));
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <button
            className={clsx(classes.root, className)}
            data-tracking={props['data-tracking']}
            onClick={showBanner}
        >
            {label}
        </button>
    );
};

export default ConsentManagementButton;
