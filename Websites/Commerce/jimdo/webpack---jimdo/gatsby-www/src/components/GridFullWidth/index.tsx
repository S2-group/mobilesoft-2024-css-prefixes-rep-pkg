import React from 'react';

import clsx from 'clsx';

import * as classes from './index.module.scss';

export type GridColumnXSValues = '0' | '1' | '2' | '3' | '4' | '5' | '6';
export type GridColumnLValues = GridColumnXSValues | '7' | '8' | '9' | '10' | '11' | '12';

type GridFullWidthProps = {
    className?: string;
    id?: string;
    children: React.ReactNode;
    noGutter?: boolean;
    noPadding?: boolean;
};

type GridColumnFullWidthSizes = {
    xs?: GridColumnXSValues;
    s?: GridColumnXSValues;
    m?: GridColumnXSValues;
    l?: GridColumnLValues;
    xl?: GridColumnLValues;
};

type GridColumnFullWidthProps = {
    xsStart?: GridColumnXSValues;
    sStart?: GridColumnXSValues;
    mStart?: GridColumnXSValues;
    lStart?: GridColumnLValues;
    xlStart?: GridColumnLValues;
    className?: string;
    children: React.ReactNode;
} & GridColumnFullWidthSizes;

export const GridFullWidth = ({
    className,
    id,
    children,
    noGutter,
    noPadding,
}: GridFullWidthProps) => {
    const gridClasses = clsx(
        className,
        classes.gridRoot,
        noGutter && classes.noGutter,
        noPadding && classes.noPadding
    );
    return (
        <div className={gridClasses} id={id}>
            {children}
        </div>
    );
};

export const GridColumnFullWidth = ({
    xs = '6',
    s,
    m,
    l,
    xl,
    xsStart,
    sStart,
    mStart,
    lStart,
    xlStart,
    className,
    children,
}: GridColumnFullWidthProps) => {
    const columnClasses = clsx(
        className,
        classes.columnRoot,
        xs && classes['xs' + xs],
        xsStart && classes['xsStart' + xsStart],
        s && classes['s' + s],
        sStart && classes['sStart' + sStart],
        m && classes['m' + m],
        mStart && classes['mStart' + mStart],
        l && classes['l' + l],
        lStart && classes['lStart' + lStart],
        xl && classes['xl' + xl],
        xlStart && classes['xlStart' + xlStart]
    );

    return <div className={columnClasses}>{children}</div>;
};
