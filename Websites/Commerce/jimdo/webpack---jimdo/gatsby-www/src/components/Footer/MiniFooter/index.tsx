import React from 'react';

import clsx from 'clsx';

import { Legal } from '../FooterMobile';
import { LegalProps } from '../types';

import * as classes from './index.module.scss';

type MiniFooterProps = LegalProps & { displayLogo?: boolean; footerMiniDarkBackground?: boolean };

export const MiniFooter = ({
    legalLinks,
    consentManagementButton,
    footerMiniDarkBackground,
}: MiniFooterProps) => {
    return (
        <div className={clsx(classes.root, footerMiniDarkBackground && classes.backgroundDarkBlue)}>
            <Legal legalLinks={legalLinks} consentManagementButton={consentManagementButton} />
        </div>
    );
};
