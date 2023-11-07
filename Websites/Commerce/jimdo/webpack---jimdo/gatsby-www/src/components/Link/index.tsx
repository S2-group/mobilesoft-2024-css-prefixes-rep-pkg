import React, { ReactNode } from 'react';

import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';

import ArrowRight from '@icons/arrow-right.svg';

import * as classes from './index.module.scss';

type LinkProps = {
    'data-tracking'?: string;
    href: string;
    targetBlank?: boolean;
    fileDownloadLabel?: boolean;
    children?: ReactNode | string;
    ariaLabel?: string;
    className?: string;
    noArrow?: boolean;
};

export const Link = ({
    href,
    targetBlank,
    fileDownloadLabel,
    children,
    ariaLabel,
    className,
    noArrow,
    ...props
}: LinkProps) => {
    const internal = /^\/(?!\/)/.test(href);

    if (!children) {
        return null;
    }
    if (typeof window === 'undefined' && !href) {
        throw new Error(`E4354: Every Link needs a href`);
    }
    if (internal) {
        return (
            <GatsbyLink
                className={clsx('pm', classes.root, className)}
                aria-label={ariaLabel}
                to={href}
                // render target attribute only in case it's different than the standard ("_self")
                {...(targetBlank && { target: '_blank' })}
                download={fileDownloadLabel}
                {...props}
            >
                {children}
                {noArrow ? (
                    ''
                ) : (
                    <span className={classes.icon}>
                        <ArrowRight />
                    </span>
                )}
            </GatsbyLink>
        );
    }
    return (
        <a
            className={clsx('pm', classes.root, className)}
            aria-label={ariaLabel}
            href={href}
            // render target attribute only in case it's different than the standard ("_self")
            {...(targetBlank && { target: '_blank' })}
            download={fileDownloadLabel}
            {...props}
        >
            {children}
            {noArrow ? (
                ''
            ) : (
                <span className={classes.icon}>
                    <ArrowRight />
                </span>
            )}
        </a>
    );
};
