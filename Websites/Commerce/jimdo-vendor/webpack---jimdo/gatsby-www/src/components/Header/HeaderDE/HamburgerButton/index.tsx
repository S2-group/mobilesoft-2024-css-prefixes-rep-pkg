import React from 'react';

import clsx from 'clsx';

import * as classes from './HamburgerButton.module.scss';

type HamburgerButtonProps = {
    open?: boolean;
    onClick?: () => void;
    className?: string;
};

export const HamburgerButton = ({ open = false, onClick, className }: HamburgerButtonProps) => {
    return (
        <span className={clsx(classes.root, open && classes.active, className)} onClick={onClick}>
            <span className={classes.iconHamburgerLine}></span>
            <span className={classes.iconHamburgerLine}></span>
            <span className={classes.iconHamburgerLine}></span>
            <span className={classes.iconHamburgerLine}></span>
        </span>
    );
};
