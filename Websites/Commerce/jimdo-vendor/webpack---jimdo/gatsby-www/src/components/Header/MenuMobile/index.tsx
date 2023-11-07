import React from 'react';

import clsx from 'clsx';

import { AvatarPropsOptionalUser, MobileAvatar } from '../Avatar';
import { NavExternal } from '../NavItem';

import * as classes from './index.module.scss';

type NavItem = {
    label: string;
    link: string;
};

type Products = {
    title: string;
    path: string;
};

type MenuMobileProps = {
    open: boolean;
    logOut: NavItem;
    dashboard: NavItem;
    logIn: NavItem;
    signUp: NavItem;
    products: { dropdownItems: Products[] };
    blog: NavItem;
    features?: NavItem;
    productAgency?: NavItem;
    inspiration: NavItem;
    pricing: NavItem;
    isLoggedIn: boolean;
    avatarData: AvatarPropsOptionalUser;
};

const menuMobileIsOpen = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { checked } = target;

    document.documentElement.style.overflow = checked ? 'hidden' : 'visible';
};

export const MenuMobile = ({
    open,
    logOut,
    dashboard,
    logIn,
    signUp,
    products,
    blog,
    features,
    productAgency,
    inspiration,
    pricing,
    isLoggedIn,
    avatarData,
}: MenuMobileProps) => (
    <div className={classes.root}>
        <input
            className={classes.checkbox}
            type="checkbox"
            id={'menuMobile'}
            defaultChecked={open}
            onClick={menuMobileIsOpen}
        />
        <div>
            <label
                htmlFor={'menuMobile'}
                data-tracking="nav_mobile_open"
                className={classes.iconHamburgerLabel}
            >
                <span className={classes.iconHamburger}>
                    <span className={classes.iconHamburgerLine}></span>
                    <span className={classes.iconHamburgerLine}></span>
                    <span className={classes.iconHamburgerLine}></span>
                    <span className={classes.iconHamburgerLine}></span>
                </span>
            </label>
            <div className={classes.container}>
                <div className={classes.containerInner}>
                    <ul className={classes.list}>
                        {products.dropdownItems.map(item => (
                            <li key={item.title} className={clsx(classes.listItem, 'hs')}>
                                <NavExternal
                                    data-tracking="nav_mobile_item"
                                    data-tracking-label={item.title}
                                    label={item.title}
                                    link={item.path}
                                />
                            </li>
                        ))}

                        <li className={classes.listItem}>
                            <NavExternal
                                data-tracking="nav_mobile_inspiration"
                                label={inspiration.label}
                                link={inspiration.link}
                            />
                        </li>
                        <li className={classes.listItem}>
                            <NavExternal
                                data-tracking="nav_mobile_pricing"
                                label={pricing.label}
                                link={pricing.link}
                            />
                        </li>
                        {blog ? (
                            <li className={classes.listItem}>
                                <NavExternal
                                    data-tracking="nav_mobile_blog"
                                    label={blog.label}
                                    link={blog.link}
                                />
                            </li>
                        ) : null}
                        {features ? (
                            <li className={classes.listItem}>
                                <NavExternal
                                    data-tracking="nav_mobile_features"
                                    label={features.label}
                                    link={features.link}
                                />
                            </li>
                        ) : null}
                        {productAgency ? (
                            <li className={classes.listItem}>
                                <NavExternal
                                    data-tracking="nav_mobile_productAgency"
                                    label={productAgency.label}
                                    link={productAgency.link}
                                />
                            </li>
                        ) : null}
                    </ul>
                    {isLoggedIn ? (
                        <div key="logout" className={classes.userLogin}>
                            <MobileAvatar data={avatarData} />
                            <div className={classes.actionsWrapper}>
                                <div className={classes.actionsDash}>
                                    <NavExternal
                                        data-tracking="nav_mobile_to_dashboard"
                                        label={dashboard.label}
                                        link={dashboard.link}
                                    />
                                </div>
                                <NavExternal
                                    className={classes.actions}
                                    data-tracking="nav_mobile_logout"
                                    label={logOut.label}
                                    link={logOut.link}
                                />
                            </div>
                        </div>
                    ) : (
                        <div key="login" className={classes.userLogout}>
                            <NavExternal
                                className={classes.signup}
                                data-tracking="nav_mobile_signup"
                                label={signUp.label}
                                link={signUp.link}
                            />
                            <NavExternal
                                className={classes.login}
                                data-tracking="nav_mobile_login"
                                label={logIn.label}
                                link={logIn.link}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);
