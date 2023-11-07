import React from 'react';

import clsx from 'clsx';

import Down from '@icons/Down.svg';

import { DropdownMenuItem } from '../DropdownMenuItem';

import * as classes from './index.module.scss';

type NavExternalProps = {
    label: string;
    link: string;
    openInNewTab?: boolean;
    className?: string;
};

export type DropDownItem = {
    path: string;
    desc: string;
    title: string;
};

type NavMenuProps = {
    label: string;
    dropDownHeading?: string;
    dropDownItems: DropDownItem[];
    dataTracking: string;
    openInNewTab?: boolean;
    rightAlign?: boolean;
};

export const NavExternal = ({
    label,
    link,
    openInNewTab,
    className,
    ...props
}: NavExternalProps) => (
    <div className={clsx(className, classes.title)}>
        <div>
            <a
                href={link}
                className="pm"
                {...(openInNewTab && { target: '_blank', rel: 'noopener' })}
                {...props}
            >
                {label}
            </a>
        </div>
    </div>
);

const uniqueId = new Date().getTime();

export const NavMenu = ({
    label,
    dropDownHeading,
    dropDownItems,
    dataTracking,
    openInNewTab,
    rightAlign,
}: NavMenuProps) => (
    <div data-tracking={dataTracking} data-tracking-onhover="true" className={classes.navMenuRoot}>
        <button className={classes.title} aria-controls={`${uniqueId}-${label}`}>
            <span className="pm">{label}</span>
            <Down />
        </button>
        <div
            className={clsx(classes.dropdown, rightAlign && classes.rightAlign)}
            id={`${uniqueId}-${label}`}
        >
            <div>
                {dropDownHeading && (
                    <div className={classes.dropDownHeading}>{dropDownHeading}</div>
                )}

                <ul>
                    {dropDownItems &&
                        dropDownItems.map(item => {
                            return (
                                <li key={item.path + item.desc} className={classes.item}>
                                    <DropdownMenuItem
                                        openInNewTab={openInNewTab}
                                        trackingId={dataTracking}
                                        data={item}
                                        key={item.path + item.desc}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    </div>
);
