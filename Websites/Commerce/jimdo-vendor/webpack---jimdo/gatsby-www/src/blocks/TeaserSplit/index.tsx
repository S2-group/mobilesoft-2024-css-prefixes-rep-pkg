import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { CheckedList, ListItems } from '@components/CheckedList';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { GatsbyImageData, Image as DynamicImage } from '@components/Image';
import { Link } from '@components/Link';

import { StaticImageConstructor } from 'images/static/static-images-map';

import * as classes from './index.module.scss';

type TeaserSplitProps = {
    data: Partial<{
        title: string;
        text: string;
        listItems: ListItems[];
        buttonHref: string;
        buttonLabel: string;
        linkHref?: string;
        linkLabel?: string;
        Image: StaticImageConstructor;
        image: GatsbyImageData;
        imageAlt: string;
        right?: boolean;
    }>;
    trackLabel: string;
    secondaryTrackLabel?: string;
    id: string;
};

export const TeaserSplit = ({ data, trackLabel, secondaryTrackLabel, id }: TeaserSplitProps) => {
    if (!data) {
        return null;
    }

    const {
        title,
        text,
        listItems,
        buttonLabel,
        buttonHref,
        linkHref,
        linkLabel,
        Image,
        image,
        imageAlt,
        right,
    } = data;

    const hasImages = !!image || !!Image;

    if (!title || !buttonLabel || !hasImages || !text || !listItems) {
        return null;
    }

    return (
        <GridFullWidth className={classes.root} noGutter={true} noPadding={true} id={id}>
            <GridColumnFullWidth className={right ? classes.columnContentRight : ''}>
                <div className={classes.content}>
                    <Headline
                        value={title}
                        tag="h2"
                        className={clsx('hm', classes.title)}
                    ></Headline>
                    <p className={clsx('pl', classes.text)}>{text}</p>
                    <CheckedList listItems={listItems} className={classes.list} />
                    <Button href={buttonHref} data-tracking={trackLabel} className={classes.button}>
                        {buttonLabel}
                    </Button>
                    {linkLabel && linkHref && (
                        <Link
                            data-tracking={secondaryTrackLabel || trackLabel}
                            href={linkHref}
                            className={classes.link}
                        >
                            {linkLabel}
                        </Link>
                    )}
                </div>
            </GridColumnFullWidth>
            {Image && (
                <GridColumnFullWidth>
                    <Image alt={imageAlt ?? ''} className={classes.image} objectPosition="50% 0" />
                </GridColumnFullWidth>
            )}
            {image && (
                <GridColumnFullWidth>
                    <DynamicImage
                        image={image}
                        alt={imageAlt ?? ''}
                        className={classes.image}
                        objectPosition="50% 0"
                    />
                </GridColumnFullWidth>
            )}
        </GridFullWidth>
    );
};

TeaserSplit.displayName = 'TeaserSplit';
