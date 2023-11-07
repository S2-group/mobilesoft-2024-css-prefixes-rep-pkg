import React from 'react';

import ColoredLogo from '../../../images/logos/jimdo_logo_navy.svg';

import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile, SessionData } from './HeaderMobile';
import { LinkText } from './LinkText';
import { MenuFormatNew } from './types';

import * as classes from './HeaderDE.module.scss';

export type HeaderDEProps = {
    homeLink: string;
    loginAvatarElm: React.ReactNode;
    mainNavData: { [key: string]: MenuFormatNew };
    rightNavData: { [key: string]: MenuFormatNew };
    sessionData: SessionData;
};

export const HeaderDE = ({
    loginAvatarElm,
    mainNavData,
    rightNavData,
    sessionData,
    homeLink,
}: HeaderDEProps) => {
    const logoElm = (
        <LinkText tag="a" href={homeLink} className={classes.logoLink} cursorPointer>
            <ColoredLogo className={classes.logoSVG} />
        </LinkText>
    );

    return (
        <div className={classes.root}>
            <div className={classes.headerMobile}>
                <HeaderMobile
                    mainNavData={mainNavData}
                    rightNavData={rightNavData}
                    sessionData={sessionData}
                    logoElm={logoElm}
                />
            </div>
            <div className={classes.headerDesktop}>
                <HeaderDesktop
                    mainNavData={mainNavData}
                    rightNavData={rightNavData}
                    logoElm={logoElm}
                    loginAvatarElm={loginAvatarElm}
                />
            </div>
        </div>
    );
};
