import React from 'react';

import clsx from 'clsx';

import { Langs } from 'types/langs';

import * as classes from './index.module.scss';

export type ButtonColor =
    | 'blue'
    | 'blueInverted'
    | 'blueGreyBorder'
    | 'navy'
    | 'navyInverted'
    | 'offWhite'
    | 'offWhiteInverted'
    | 'success'
    | 'upgrade';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
    fullWidth?: boolean;
    color?: ButtonColor;
    size?: 'default' | 'small';
    targetBlank?: boolean;
    // TODO: fix this prop: its misleading and doesnt atatch tracking events properly
    // (currently using data-tracking instead)
    dataTrackingId?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    lang?: Langs;
    fullwidth?: boolean;
    download?: string;
    center?: boolean;
    subtitle?: string;
};

// TODO: add data dataTrackingId prop (instead forwarding all props to button or anchor tag)
export const Button = (props: ButtonProps) => {
    const {
        className,
        fullWidth,
        color = 'blue',
        targetBlank,
        size = 'default',
        center,
        subtitle,
        ...rest
    } = props;

    const buttonClasses = clsx(
        'pm',
        classes.root,
        fullWidth && classes.fullWidth,
        color && classes[color],
        size === 'small' && classes.sizeSmall
    );

    if (rest.href) {
        return (
            <div className={clsx(classes.container, className, center && classes.buttonCentered)}>
                <a
                    {...rest}
                    // render target attribute only in case it's different than the standard ("_self")
                    {...(targetBlank && { target: '_blank' })}
                    className={buttonClasses}
                />
                {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
            </div>
        );
    } else {
        // TODO: fix invalid react props passed to button element
        return (
            <div className={clsx(classes.container, className, center && classes.buttonCentered)}>
                <button {...props} className={buttonClasses} />
                {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
            </div>
        );
    }
};
