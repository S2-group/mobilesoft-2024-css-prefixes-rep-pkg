import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Flicking, { FlickingProps } from '@egjs/react-flicking';
import clsx from 'clsx';

import { SliderArrow } from './SliderArrow';
import { SliderDots } from './SliderDots';

import * as classes from './index.module.scss';

type OnChangeHandler = FlickingProps['onChange'];
type OnSelectHandler = FlickingProps['onSelect'];

type SliderComponentProps = {
    children: React.ReactNode;
    centered?: boolean;
    infinite?: boolean;
    popup?: boolean;
    hideUnfocussed?: boolean;
    gap?: number;
    showDots?: boolean;
    showArrows?: boolean;
    arrowPrevClassName?: string;
    arrowNextClassName?: string;
    dotClassName?: string;
    className?: string;
    onChange?: (slideIndex: number) => void;
};

const onSelectHandler: OnSelectHandler = e => e.panel?.focus?.();

export const SliderComponent = ({
    children,
    centered = false,
    infinite = false,
    popup = false,
    hideUnfocussed = false,
    gap = 10,
    showDots = false,
    showArrows = true,
    arrowPrevClassName,
    arrowNextClassName,
    dotClassName,
    className,
    onChange,
}: SliderComponentProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef<Flicking | null>(null);

    useEffect(() => {
        slideRef.current?.moveTo(currentIndex);
    }, [currentIndex]);

    const slideElms = useMemo(
        () =>
            React.Children.map(children, (child, index) => {
                const active = (popup || hideUnfocussed) && index === currentIndex;
                const inActive = index !== currentIndex ? true : false;
                return (
                    <div
                        className={clsx(
                            popup && classes.popup,
                            hideUnfocussed && classes.hideUnfocussed
                        )}
                    >
                        <div
                            className={clsx(
                                classes.slide,
                                active && classes.active,
                                inActive && classes.inActive
                            )}
                        >
                            <React.Fragment>{child}</React.Fragment>
                        </div>
                    </div>
                );
            }),
        [children, currentIndex, popup, hideUnfocussed]
    );

    const onChangeHandler = useCallback<OnChangeHandler>(
        e => {
            onChange && onChange(e.index);
            setCurrentIndex(e.index);
        },
        [onChange]
    );

    const next = useCallback(() => slideRef.current?.next(), []);
    const prev = useCallback(() => slideRef.current?.prev(), []);

    if (!slideElms) {
        return null;
    }

    const arrowElms = showArrows && (
        <React.Fragment>
            <SliderArrow
                type="prev"
                className={clsx(classes.arrow, classes.arrowPrev, arrowPrevClassName)}
                onClick={prev}
            />
            <SliderArrow
                type="next"
                className={clsx(classes.arrow, classes.arrowPext, arrowNextClassName)}
                onClick={next}
            />
        </React.Fragment>
    );

    return (
        <div className={className}>
            <div className={classes.sliderContainer}>
                {arrowElms}
                <Flicking
                    zIndex={0}
                    classPrefix="slider"
                    ref={slideRef}
                    defaultIndex={currentIndex}
                    autoResize
                    circular={infinite}
                    duration={300}
                    bounce={['10%', '10%']}
                    hanger={centered ? '50%' : 0}
                    anchor={centered ? '50%' : 0}
                    gap={gap}
                    onSelect={onSelectHandler}
                    onChange={onChangeHandler}
                    renderExternal={true}
                    resizeOnContentsReady={true}
                    collectStatistics={false}
                >
                    {slideElms}
                </Flicking>
            </div>
            {showDots ? (
                <div className={classes.dotsContainer}>
                    <SliderDots
                        count={slideElms.length}
                        current={currentIndex}
                        onChange={setCurrentIndex}
                        className={dotClassName}
                    />
                </div>
            ) : null}
        </div>
    );
};
