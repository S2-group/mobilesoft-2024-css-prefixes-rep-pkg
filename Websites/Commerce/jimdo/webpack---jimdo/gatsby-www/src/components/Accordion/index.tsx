import React from 'react';

import clsx from 'clsx';

import Down from '@icons/Down.svg';
import PlusIcon from '@icons/plusIcon.svg';

import { TextTags } from 'types/textTags';

import * as classes from './index.module.scss';

// TODO: taking care of too long strings...

type AccordionProps = {
    children: React.ReactNode;
    title: string;
    id?: string;
    open?: boolean;
    useArrow?: boolean;
    hideIcon?: boolean;
    trackLabel?: string;
    tag?: TextTags;
};

// TODO: refactor to use proper state instead of label/input hack
export const Accordion = ({
    children,
    title,
    id,
    open,
    useArrow,
    hideIcon,
    trackLabel,
    tag,
}: AccordionProps) => {
    const TitleTag = tag ?? 'span';
    const elmId = id || title.replace(' ', '_');
    return (
        <div>
            <input className={classes.input} type="checkbox" id={elmId} defaultChecked={open} />
            <label htmlFor={elmId} data-tracking={trackLabel} data-tracking-title={title}>
                <span className={clsx(useArrow ? classes.footerWrapper : classes.contentWrapper)}>
                    <TitleTag className={clsx('hs', classes.title)}>{title}</TitleTag>
                    {!hideIcon && (
                        <span className={classes.icon}>
                            {useArrow ? (
                                <span className={classes.arrow}>
                                    <Down />
                                </span>
                            ) : (
                                <span className={classes.plus}>
                                    <PlusIcon />
                                </span>
                            )}
                        </span>
                    )}
                </span>
                <span className={classes.children}>{children}</span>
            </label>
        </div>
    );
};
