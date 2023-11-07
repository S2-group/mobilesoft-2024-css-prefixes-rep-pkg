import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { GatsbyImageData, Image } from '@components/Image';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { StaticImageConstructor } from 'images/static/static-images-map';

import { Langs } from '@shared-types/langs';

import * as classes from './index.module.scss';

export type HeroVisualProps = {
    data: Partial<{
        title: string;
        text: string;
        buttonLabel?: string;
        buttonLabel2?: string;
        buttonHref?: string;
        buttonSubtitle?: string;
        Images?: {
            heroVisualDesktop: StaticImageConstructor;
            heroVisualMobile: StaticImageConstructor;
        };
        images?: {
            heroVisualDesktop: GatsbyImageData;
            heroVisualMobile: GatsbyImageData;
        };
        imageAlt?: string;
        buttonOpensSignupLightboxForLang: Langs[];
        noBackground?: boolean;
    }>;
    trackLabel?: string;
    lang?: Langs;
    id: string;
};

export const HeroVisual = ({
    data: {
        title,
        text,
        buttonLabel,
        buttonLabel2,
        buttonHref,
        buttonSubtitle,
        Images,
        images,
        imageAlt,
        buttonOpensSignupLightboxForLang,
        noBackground,
    },
    trackLabel,
    lang,
    id,
}: HeroVisualProps) => {
    return (
        <div className={clsx(noBackground ? classes.noBackgroundColor : classes.root)} id={id}>
            <GridFullWidth className={classes.contentContainer}>
                <GridColumnFullWidth xl="5" xlStart="2">
                    {title && <Headline tag="h1" value={title} className="hxx" />}
                </GridColumnFullWidth>
                <GridColumnFullWidth xl="5" xlStart="7">
                    <p className={classes.text}>{text}</p>

                    {Array.isArray(buttonOpensSignupLightboxForLang) && lang ? (
                        <SignUpLightboxButton
                            className={classes.button}
                            lang={lang}
                            trackLabel={trackLabel}
                            subtitle={buttonSubtitle}
                        >
                            {buttonLabel}
                            {buttonLabel2 && (
                                <span className={classes.buttonMobile}>{buttonLabel2}</span>
                            )}
                        </SignUpLightboxButton>
                    ) : (
                        buttonHref && (
                            <Button
                                href={buttonHref}
                                data-tracking={trackLabel}
                                className={classes.button}
                                subtitle={buttonSubtitle}
                            >
                                {buttonLabel}
                            </Button>
                        )
                    )}
                </GridColumnFullWidth>
            </GridFullWidth>
            {images && (
                <React.Fragment>
                    <Image
                        image={images.heroVisualDesktop}
                        className={classes.imageDesktop}
                        alt={imageAlt ?? ''}
                    />
                    <Image
                        image={images.heroVisualMobile}
                        className={classes.imageMobile}
                        alt={imageAlt ?? ''}
                    />
                </React.Fragment>
            )}
            {Images && (
                <React.Fragment>
                    <div className={classes.imageDesktop}>
                        <Images.heroVisualDesktop alt={imageAlt} />
                    </div>
                    <div className={classes.imageMobile}>
                        <Images.heroVisualMobile alt={imageAlt} />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

HeroVisual.displayName = 'HeroVisual';
