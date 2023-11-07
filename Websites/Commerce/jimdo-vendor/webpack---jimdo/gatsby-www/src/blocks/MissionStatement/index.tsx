import React from 'react';

import clsx from 'clsx';

import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { GatsbyImageData, Image as GatsbyImage } from '@components/Image';
import { Link } from '@components/Link';

import { StaticImageConstructor } from 'images/static/static-images-map';

import * as classes from './index.module.scss';

type MissionStatementProps = {
    id: string;
    trackLabel?: string;
    data: Partial<{
        title: string;
        text: string;
        name: string;
        role: string;
        linkHref?: string;
        linkLabel?: string;
        image: GatsbyImageData;
        Image: StaticImageConstructor;
        imageAlt: string;
    }>;
};

export const MissionStatement = ({
    data: { title, text, name, role, linkHref, linkLabel, image, Image, imageAlt },
    id,
    trackLabel,
}: MissionStatementProps) => (
    <div id={id} className={classes.root}>
        <GridFullWidth className={classes.grid}>
            <GridColumnFullWidth l="6">
                <div className={classes.imageContainer}>
                    {image && (
                        <GatsbyImage image={image} alt={imageAlt ?? ''} className={classes.image} />
                    )}
                    {Image && <Image alt={imageAlt} className={classes.image} />}
                    <div className={classes.caption}>
                        <span className="pm">{name}</span>
                        <span className="ps">{role}</span>
                    </div>
                </div>
            </GridColumnFullWidth>
            <GridColumnFullWidth l="6" className={classes.textContainer}>
                <div className={classes.content}>
                    {title && (
                        <Headline value={title} className={clsx('hx', classes.title)} tag="h2" />
                    )}
                    <p className={clsx('pl', classes.text)}>{text}</p>

                    {linkHref && linkLabel && (
                        <Link data-tracking={trackLabel} href={linkHref}>
                            {linkLabel}
                        </Link>
                    )}
                </div>
            </GridColumnFullWidth>
        </GridFullWidth>
    </div>
);

MissionStatement.displayName = 'MissionStatement';
