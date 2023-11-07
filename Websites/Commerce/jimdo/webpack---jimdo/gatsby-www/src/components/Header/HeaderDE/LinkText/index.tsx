import React from 'react';

import clsx from 'clsx';

import * as classes from './LinkText.module.scss';

type AnchorText = {
    tag: 'a';
    href: string;
    openInNewTab?: boolean;
};

type GenericText = {
    tag: keyof Omit<JSX.IntrinsicElements, 'a'>;
    onClick?: () => void;
};

export type LinkTextProps = {
    children?: string | React.ReactNode;
    className?: string;
    cursorPointer?: boolean;
    dataTrackingId?: string;
} & (AnchorText | GenericText);

export const LinkText = (props: LinkTextProps) => {
    const { children, className, cursorPointer, tag, dataTrackingId } = props;
    const Tag = tag ?? 'div';
    return (
        <Tag
            className={clsx(classes.root, cursorPointer && classes.cursorPointer, className)}
            data-tracking={dataTrackingId}
            href={tag === 'a' ? props.href : undefined}
            target={tag === 'a' && props.openInNewTab ? '_blank' : undefined}
            onClick={tag !== 'a' ? props.onClick : undefined}
        >
            {children}
        </Tag>
    );
};
