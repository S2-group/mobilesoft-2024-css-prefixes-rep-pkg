import React from 'react';

import clsx from 'clsx';

import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';

import { DataTrackingId, getDataTrackingId } from '../data-tracking';
import { NavButton } from '../NavButton';
import { NavDropdown } from '../NavDropdown';
import { MenuFormatNew } from '../types';

import * as classes from './HeaderDesktop.module.scss';

type HeaderDesktopProps = {
    logoElm: React.ReactNode;
    loginAvatarElm: React.ReactNode;
    mainNavData: { [key: string]: MenuFormatNew };
    rightNavData: { [key: string]: MenuFormatNew };
    lang?: string;
};

export const HeaderDesktop = ({
    logoElm,
    loginAvatarElm,
    mainNavData,
    rightNavData,
}: HeaderDesktopProps) => {
    return (
        <GridFullWidth>
            <GridColumnFullWidth className={classes.gridColumn} xs="0" s="4" m="4" l="2">
                <div className={classes.navElement}>{logoElm}</div>
            </GridColumnFullWidth>
            <GridColumnFullWidth className={classes.gridColumn} l="6">
                {Object.entries(mainNavData).map(([key, data]) => (
                    <NavButton
                        key={key}
                        label={data.label}
                        dropdown={<NavDropdown sections={data.sections} />}
                        classNames={{ root: classes.navElement }}
                        direction="vertical"
                        dataTracking={getDataTrackingId(key as DataTrackingId)}
                    />
                ))}
            </GridColumnFullWidth>
            <GridColumnFullWidth
                className={clsx(classes.gridColumn, classes.rightContainer)}
                xs="1"
                s="2"
                l="4"
            >
                {Object.entries(rightNavData).map(([key, data]) => (
                    <NavButton
                        key={key}
                        label={data.label}
                        dropdown={<NavDropdown sections={data.sections} />}
                        dropdownDirection="right"
                        classNames={{ root: classes.navElement }}
                        direction="vertical"
                        dataTracking={getDataTrackingId(key as DataTrackingId)}
                    />
                ))}
                <div className={classes.navElement}>{loginAvatarElm}</div>
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};
