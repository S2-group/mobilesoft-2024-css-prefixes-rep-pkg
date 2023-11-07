import React from 'react';

import clsx from 'clsx';

import LogoColor from '../../images/logos/jimdo_logo_navy.svg';
import LogoWhite from '../../images/logos/jimdo_logo_white.svg';

import * as classes from './index.module.scss';

type HeaderMiniProps = {
    headerMinibackgroundColor?: 'White' | 'DarkBlue' | 'Blue';
};

export const HeaderMini = ({ headerMinibackgroundColor }: HeaderMiniProps) => {
    return (
        <header
            className={clsx(
                classes.root,
                headerMinibackgroundColor && classes[`background${headerMinibackgroundColor}`]
            )}
        >
            {headerMinibackgroundColor === 'DarkBlue' || headerMinibackgroundColor === 'Blue' ? (
                <LogoWhite className={classes.icon} />
            ) : (
                <LogoColor className={classes.icon} />
            )}
        </header>
    );
};
