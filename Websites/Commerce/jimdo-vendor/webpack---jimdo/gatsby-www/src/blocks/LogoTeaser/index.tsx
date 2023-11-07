import React, { useMemo } from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';

import { StaticImageConstructor } from 'images/static/static-images-map';

import * as classes from './index.module.scss';

type LogoTeaserProps = {
    id: string;
    trackLabel?: string;
    data: Partial<{
        Images: StaticImageConstructor[];
        imageAlts: string[];
        subtitle?: string;
        buttonLabel?: string;
        buttonHref?: string;
    }>;
};

export const LogoTeaser = ({
    data: { imageAlts, subtitle, buttonLabel, buttonHref, Images = [] },
    id,
    trackLabel,
}: LogoTeaserProps) => {
    const imageElms = useMemo(() => {
        return Images?.map((Image, index) => (
            <GridColumnFullWidth
                xs="3"
                l="2"
                lStart={index % 5 === 0 ? '2' : '0'}
                key={index}
                className={clsx(
                    Images.length % 2 !== 0 && index === Images.length - 1
                        ? classes.displayNone
                        : ''
                )}
            >
                <div className={classes.image}>
                    <Image alt={imageAlts?.[index] ?? ''} />
                </div>
            </GridColumnFullWidth>
        ));
    }, [Images, imageAlts]);

    return (
        <GridFullWidth className={classes.root} id={id}>
            <GridColumnFullWidth l="12">
                <p className={clsx('hs', classes.subtitle)}>{subtitle}</p>
            </GridColumnFullWidth>
            {imageElms}
            <GridColumnFullWidth xs="4" xsStart="2" lStart="5">
                {buttonLabel && buttonHref && (
                    <Button
                        href={buttonHref}
                        data-tracking={trackLabel}
                        color="blueInverted"
                        center
                    >
                        {buttonLabel}
                    </Button>
                )}
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};

LogoTeaser.displayName = 'LogoTeaser';
