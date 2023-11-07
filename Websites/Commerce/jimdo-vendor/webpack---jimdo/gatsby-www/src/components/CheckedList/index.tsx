import React from 'react';

import clsx from 'clsx';

import { Text } from '@components/Text';

import CheckCircle from '@icons/check-circle.svg';

import * as classes from './index.module.scss';

export type ListItems = {
    text: string;
    title?: string;
};

type CheckedListProps = {
    listItems: ListItems[];
    className?: string;
    checkColor?: 'DarkBlue' | 'Blue';
};

export const CheckedList = ({ listItems, className, checkColor = 'Blue' }: CheckedListProps) => (
    <ul className={clsx(className, classes.list)}>
        {listItems.map((item, index) => (
            <li className={classes.listItem} key={`${item.text}_${index}`}>
                <CheckCircle className={classes[`check${checkColor}`]} />
                <div className={classes.item}>
                    {item.title && <p className="hs">{item.title}</p>}
                    <Text value={item.text} tag="p" className="pl" />
                </div>
            </li>
        ))}
    </ul>
);
