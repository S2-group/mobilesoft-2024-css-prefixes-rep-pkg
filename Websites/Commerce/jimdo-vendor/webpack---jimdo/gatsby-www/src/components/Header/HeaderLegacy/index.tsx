import React from 'react';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { DropDownItem, NavExternal, NavMenu } from '@components/Header/NavItem';

import * as classes from './index.module.scss';

type Item = {
    label: string;
    link: string;
};

export type PropductProps = {
    label: string;
    dropdownItems: DropDownItem[];
};

type MainNavDataProps = {
    products: PropductProps;
    inspiration: Item;
    pricing: Item;
    blog: Item;
    features: Item;
    productAgency: Item;
};

export type HelpProps = {
    label: string;
    dropdownHeading: string;
    dropdownItems: DropDownItem[];
};

type RightNavDataProps = {
    help: HelpProps;
};

type HeaderLegacyProps = {
    logoElm: React.ReactNode;
    loginAvatarElm: React.ReactNode;
    menuMobileElm: React.ReactNode;
    mainNavData: MainNavDataProps;
    rightNavData: RightNavDataProps;
    lang?: string;
};

export const HeaderLegacy = ({
    loginAvatarElm,
    mainNavData,
    rightNavData,
    logoElm,
    menuMobileElm,
}: HeaderLegacyProps) => {
    return (
        <GridFullWidth className={classes.grid}>
            <GridColumnFullWidth xs="2" s="4" m="4" l="2" className={classes.column}>
                <div className={classes.logoContainer}>{logoElm}</div>
            </GridColumnFullWidth>
            <GridColumnFullWidth xs="0" l="6">
                <nav className={classes.middle}>
                    <NavMenu
                        label={mainNavData.products.label}
                        dropDownItems={mainNavData.products.dropdownItems}
                        dataTracking="topnav_subproduct"
                    />
                    <NavExternal
                        data-tracking="topnav_to_example"
                        label={mainNavData.inspiration.label}
                        link={mainNavData.inspiration.link}
                    />
                    <NavExternal
                        data-tracking="topnav_to_pricing"
                        label={mainNavData.pricing.label}
                        link={mainNavData.pricing.link}
                    />
                    {mainNavData.blog ? (
                        <NavExternal
                            data-tracking="topnav_to_blog"
                            label={mainNavData.blog.label}
                            link={mainNavData.blog.link}
                        />
                    ) : null}
                    {mainNavData.features ? (
                        <NavExternal
                            data-tracking="topnav_to_features"
                            label={mainNavData.features.label}
                            link={mainNavData.features.link}
                        />
                    ) : null}
                    {mainNavData.productAgency ? (
                        <NavExternal
                            data-tracking="topnav_to_productAgency"
                            label={mainNavData.productAgency.label}
                            link={mainNavData.productAgency.link}
                        />
                    ) : null}
                </nav>
            </GridColumnFullWidth>
            <GridColumnFullWidth
                xs="1"
                xsStart="6"
                s="2"
                lStart="9"
                l="4"
                className={classes.mobileWrapper}
            >
                {menuMobileElm}
                <nav className={classes.asideItems}>
                    <div className={classes.helpMenu}>
                        <NavMenu
                            label={rightNavData.help.label}
                            dropDownHeading={rightNavData.help.dropdownHeading}
                            dropDownItems={rightNavData.help.dropdownItems}
                            dataTracking="topnav_help"
                            openInNewTab
                            rightAlign
                        />
                    </div>
                    {loginAvatarElm}
                </nav>
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};
