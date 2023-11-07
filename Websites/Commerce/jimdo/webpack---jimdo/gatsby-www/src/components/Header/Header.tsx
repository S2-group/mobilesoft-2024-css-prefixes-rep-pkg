import React, { createRef, useContext, useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';

import { GoogleSSO } from '@blocks/GoogleSSO';

import { Langs } from 'types/langs';
import { User } from 'types/user';

import { getUserInformation } from 'helpers/checkLoginState';
import { debounce } from 'helpers/debounce';

import { AppContext } from 'store/createContext';

import ColoredJpLogo from '../../images/logos/jimdo_japan_logo_navy.svg';
import ColoredLogo from '../../images/logos/jimdo_logo_navy.svg';
import { Link } from '../Link';

import { DesktopAvatar } from './Avatar';
import { HeaderDE } from './HeaderDE';
import { MenuFormatNew } from './HeaderDE/types';
import { HeaderLegacy, HelpProps, PropductProps } from './HeaderLegacy';
import { MenuMobile } from './MenuMobile';
import { NavExternal } from './NavItem';

import * as classes from './Header.module.scss';

const SCROLL_OFFSET_TO_HIGHLIGHT_NAV = 30;

type Item = { label: string; link: string };

type HeaderDataDE = {
    lang: Langs.DE_DE;
    help: MenuFormatNew;
    blog: MenuFormatNew;
    website: MenuFormatNew;
    onlineshop: MenuFormatNew;
    businessTools: MenuFormatNew;
};

type HeaderDataLegacy = {
    lang: Omit<Langs, Langs.DE_DE>;
    products: PropductProps;
    inspiration: Item;
    pricing: Item;
    features: Item;
    productAgency: Item;
    help: HelpProps;
    blog: Item;
};

type Avatar = {
    altFallback: string;
    altProfile: string;
};

export type HeaderProps = {
    lang: Langs;
    homeLink: string;
    dashboard: Item;
    logIn: Item;
    logOut: Item;
    signUp: Item;
    avatar: Avatar;
    transparentHeader: boolean;
    headerBottomMargin: boolean;
} & (HeaderDataDE | HeaderDataLegacy);

export const Header = (props: HeaderProps) => {
    const {
        homeLink,
        logOut,
        dashboard,
        logIn,
        signUp,
        avatar,
        lang,
        transparentHeader = false,
        headerBottomMargin = false,
    } = props;

    const [headerHighlight, setHeaderHighlight] = useState(false);
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(false);
    const [hasUserInformation, setHasUserInformation] = useState(false);
    const headerRef = createRef<HTMLElement>();
    const { isMobileSidebarVisible } = useContext(AppContext);

    useEffect(() => {
        if (typeof document === 'undefined' || !document.body) {
            return;
        }

        // From https://css-tricks.com/styling-based-on-scroll-position/
        const isPastOffset = window.pageYOffset > SCROLL_OFFSET_TO_HIGHLIGHT_NAV;
        setHeaderHighlight(isPastOffset);

        const handler = debounce(() => {
            const isPastOffset = window.pageYOffset > SCROLL_OFFSET_TO_HIGHLIGHT_NAV;
            setHeaderHighlight(isPastOffset);
        });
        document.addEventListener('scroll', handler, { passive: true });
    }, [setHeaderHighlight]);

    useEffect(() => {
        if (!headerRef?.current?.dataset) {
            return;
        }

        if (isMobileSidebarVisible) {
            headerRef.current.dataset.highlight = 'false';
            return;
        }

        headerRef.current.dataset.highlight = headerHighlight ? 'true' : 'false';
    }, [headerHighlight, headerRef, isMobileSidebarVisible]);

    const isLoggedIn = (user: User | undefined): boolean =>
        Boolean(user) && Boolean(user?.name || user?.email);

    useEffect(() => {
        if (!loading) {
            setLoading(true);
            getUserInformation(
                (data: User) => {
                    if (isLoggedIn(user) !== isLoggedIn(data)) {
                        setUser(data);
                    }
                    setHasUserInformation(true);
                },
                (e: Error) => {
                    // eslint-disable-next-line no-console
                    console.error(e.message);
                    setHasUserInformation(true);
                }
            );
        }
    }, [headerRef, loading, user]);

    const showTransparent = transparentHeader || isMobileSidebarVisible;

    const loginAvatarElm = useMemo(() => {
        if (user && isLoggedIn(user)) {
            return (
                <DesktopAvatar dataAvatar={{ user, avatar }} dataDropdown={{ logOut, dashboard }} />
            );
        }
        return (
            <NavExternal
                data-tracking="NavExternal-Login"
                label={logIn.label}
                link={logIn.link}
                // TODO: remove extra props after migrating NavExternal component to TS
                openInNewTab={false}
                className={undefined}
            />
        );
    }, [avatar, dashboard, logIn.label, logIn.link, logOut, user]);

    const headerNavElms = useMemo(() => {
        if (lang === Langs.DE_DE) {
            const { website, onlineshop, businessTools, help, blog } = props as HeaderDataDE;
            return (
                <HeaderDE
                    mainNavData={{ website, onlineshop, businessTools }}
                    rightNavData={{ blog, help }}
                    loginAvatarElm={loginAvatarElm}
                    sessionData={{
                        userLoggedIn: isLoggedIn(user),
                        logIn,
                        logOut,
                        avatar,
                        signUp,
                        user,
                        dashboard,
                    }}
                    homeLink={homeLink}
                />
            );
        }

        const { products, inspiration, pricing, blog, features, productAgency, help } = props;
        const logoElm = (
            <Link
                data-tracking="topnav_brand_visit_home"
                href={homeLink}
                aria-label="Jimdo"
                noArrow={true}
            >
                {lang === 'ja-JP' ? <ColoredJpLogo /> : <ColoredLogo />}
            </Link>
        );
        return (
            <HeaderLegacy
                mainNavData={{ products, inspiration, pricing, blog, features, productAgency }}
                rightNavData={{ help }}
                menuMobileElm={
                    <MenuMobile
                        open={false}
                        isLoggedIn={isLoggedIn(user)}
                        logOut={logOut}
                        dashboard={dashboard}
                        logIn={logIn}
                        signUp={signUp}
                        products={products}
                        inspiration={inspiration}
                        pricing={pricing}
                        blog={blog}
                        features={features}
                        productAgency={productAgency}
                        avatarData={{ user, avatar }}
                    />
                }
                loginAvatarElm={loginAvatarElm}
                logoElm={logoElm}
            />
        );
    }, [avatar, dashboard, homeLink, lang, logIn, logOut, loginAvatarElm, props, signUp, user]);

    return (
        <header
            ref={headerRef}
            className={clsx(
                classes.root,
                headerBottomMargin && classes.headerBottomMargin,
                showTransparent && classes.transparent
            )}
        >
            {hasUserInformation && !isLoggedIn(user) && <GoogleSSO lang={lang} />}
            {headerNavElms}
        </header>
    );
};
