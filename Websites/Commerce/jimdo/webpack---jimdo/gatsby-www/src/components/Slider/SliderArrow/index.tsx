import React from 'react';

import clsx from 'clsx';

import ChevronLeft from '@icons/chevron-left.svg';

import * as classes from './index.module.scss';

type SliderArrowProps = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: string;
    type: 'next' | 'prev';
    style?: React.CSSProperties;
};

export const SliderArrow = ({ onClick, className, type, style }: SliderArrowProps) => {
    const next = type === 'next';
    return (
        <div
            className={clsx(classes.root, next && classes.flip, className)}
            onClick={onClick}
            style={style}
        >
            <ChevronLeft />
        </div>
    );
};
