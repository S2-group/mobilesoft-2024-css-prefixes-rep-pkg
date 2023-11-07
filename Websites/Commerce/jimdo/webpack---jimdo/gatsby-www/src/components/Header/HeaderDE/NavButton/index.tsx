import React from 'react';

import clsx from 'clsx';

import Down from '@icons/Down.svg';

import { LinkText } from '../LinkText';

import * as classes from './NavButton.module.scss';

const ArrowIcon = ({ className }: { className: string }) => <Down className={className} />;

type ButtonWithDropdown = {
    dropdown: React.ReactNode;
    dropdownDirection?: 'right' | 'left';
};

type ButtonWithClickHandler = {
    onClick: () => void;
};

export type NavButtonProps = {
    label: string;
    classNames?: {
        root?: string;
        button?: string;
    };
    dataTracking?: string;
    hideArrow?: boolean;
    hideActiveIndicator?: boolean;
    direction?: 'horizontal' | 'vertical';
} & (ButtonWithDropdown | ButtonWithClickHandler);

export const NavButton = (props: NavButtonProps) => {
    const {
        label,
        classNames,
        dataTracking,
        hideArrow,
        hideActiveIndicator,
        direction = 'vertical',
    } = props;
    const isHorizontal = direction === 'horizontal';

    if ('onClick' in props) {
        return (
            <div
                className={clsx(
                    classes.root,
                    {
                        [classes.horizontal]: isHorizontal,
                        [classes.hideActiveIndicator]: hideActiveIndicator,
                    },
                    classNames?.root
                )}
                data-tracking={dataTracking}
                onClick={props.onClick}
            >
                <LinkText className={clsx(classes.button, classNames?.button)} tag="p">
                    <span>{label}</span> {!hideArrow && <ArrowIcon className={classes.arrowIcon} />}
                </LinkText>
            </div>
        );
    }

    const rootContainerClasses = clsx(
        {
            [classes.horizontal]: isHorizontal,
            [classes.hideActiveIndicator]: hideActiveIndicator,
        },
        classes.root,
        classNames?.root
    );

    return (
        <div className={rootContainerClasses} data-tracking={dataTracking}>
            <LinkText className={clsx(classes.button, classNames?.button)} tag="button">
                <span>{label}</span> {!hideArrow && <ArrowIcon className={classes.arrowIcon} />}
            </LinkText>
            <div
                className={clsx(
                    classes.dropdownContainer,
                    props.dropdownDirection === 'right' && classes.directionRight
                )}
            >
                {props.dropdown}
            </div>
        </div>
    );
};
