import React, { useCallback } from 'react';

import clsx from 'clsx';

import * as classes from './index.module.scss';

type SliderDotsProps = {
    count: number;
    current?: number;
    onChange?: (slideIndex: number) => void;
    className?: string;
};

export const SliderDots = ({ count, current, onChange, className }: SliderDotsProps) => {
    const onClickHandler = useCallback(
        (index: number) => () => onChange && onChange(index),
        [onChange]
    );

    if (!count) {
        return null;
    }

    const dotElms = [...new Array(count)].map((_, index) => (
        <li
            key={index}
            className={clsx(classes.dot, current === index && classes.active, className)}
            onClick={onClickHandler(index)}
        />
    ));

    return <React.Fragment>{dotElms}</React.Fragment>;
};
