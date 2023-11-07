import React from 'react';

import clsx from 'clsx';

import { DataTrackingId, getDataTrackingId } from '../data-tracking';
import { LinkText } from '../LinkText';

import * as classes from './NavDropdownSection.module.scss';

export type NavDropdownSectionProps = {
    header: string;
    items: Array<{
        trackingId: string;
        label?: string;
        subline?: string;
        href: string;
        openInNewTab?: boolean;
    }>;
    classNames?: Partial<{
        root: string;
        li: string;
    }>;
    lineWrap?: boolean;
    fullWidth?: boolean;
};

export const NavDropdownSection = ({
    header,
    items,
    classNames,
    lineWrap = false,
    fullWidth = false,
}: NavDropdownSectionProps) => {
    return (
        <section className={clsx(classes.root, classNames?.root)}>
            <header className={clsx(classes.header, lineWrap && classes.lineWrap)}>{header}</header>
            <ul>
                {items.map(({ trackingId, label, subline, href, openInNewTab }, index) => (
                    <li key={index} className={clsx(classes.listItem, classNames?.li)}>
                        <LinkText
                            tag="a"
                            href={href}
                            dataTrackingId={getDataTrackingId(trackingId as DataTrackingId)}
                            openInNewTab={openInNewTab}
                            className={clsx(fullWidth && classes.fullWidth, classes.link)}
                            cursorPointer
                        >
                            {label && (
                                <p className={clsx(classes.title, lineWrap && classes.lineWrap)}>
                                    {label}
                                </p>
                            )}
                            {subline && (
                                <p className={clsx(classes.subline, lineWrap && classes.lineWrap)}>
                                    {subline}
                                </p>
                            )}
                        </LinkText>
                    </li>
                ))}
            </ul>
        </section>
    );
};
