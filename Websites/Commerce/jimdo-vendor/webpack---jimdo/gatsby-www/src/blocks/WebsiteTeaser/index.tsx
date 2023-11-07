import React from 'react';

import clsx from 'clsx';

import { AnimateVideo } from '@components/AnimateVideo';
import { Button } from '@components/Button';
import { CheckedList, ListItems } from '@components/CheckedList';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { GatsbyImageData, Image as DynamicImage } from '@components/Image';
import { Link } from '@components/Link';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';

import { StaticImageComponentType } from 'images/static/types/staticImageComponentType';

import { Langs } from 'types/langs';

import * as classes from './index.module.scss';

type WebsiteteaserProps = {
    data: Partial<{
        listItems: ListItems[];
        linkHref?: string;
        linkText?: string;
        buttonHref?: string;
        buttonLabel?: string;
        animation?: string;
        Image: StaticImageComponentType;
        image: GatsbyImageData;
        imageAlt: string;
        buttonOpensSignupLightboxForLang?: Array<Langs>;
    }>;
    imageRight?: boolean;
    trackLabel?: string;
    secondaryTrackLabel?: string;
    lang: Langs;
    id: string;
};

export const WebsiteTeaser = ({
    data: {
        listItems,
        linkHref,
        linkText,
        buttonHref,
        buttonLabel,
        animation,
        Image,
        image,
        imageAlt,
        buttonOpensSignupLightboxForLang,
    },
    imageRight,
    trackLabel,
    secondaryTrackLabel,
    lang,
    id,
}: WebsiteteaserProps) => (
    <GridFullWidth className={clsx(classes.root, imageRight && classes.columnReversed)} id={id}>
        <GridColumnFullWidth l="7" className={classes.image}>
            {animation && <AnimateVideo animation={animation} />}
            {Image && <Image alt={imageAlt ?? ''} className={classes.image} />}
            {image && <DynamicImage className={classes.image} image={image} alt={imageAlt ?? ''} />}
        </GridColumnFullWidth>
        <GridColumnFullWidth l="5" className={classes.contentWrapper}>
            {listItems && <CheckedList listItems={listItems} className={classes.list} />}
            {buttonLabel && (
                <React.Fragment>
                    {Array.isArray(buttonOpensSignupLightboxForLang) &&
                    buttonOpensSignupLightboxForLang.includes(lang) ? (
                        <SignUpLightboxButton
                            lang={lang}
                            trackLabel={secondaryTrackLabel}
                            className={classes.button}
                        >
                            {buttonLabel}
                        </SignUpLightboxButton>
                    ) : (
                        buttonHref && (
                            <Button
                                data-tracking={secondaryTrackLabel}
                                href={buttonHref}
                                className={classes.button}
                            >
                                {buttonLabel}
                            </Button>
                        )
                    )}
                </React.Fragment>
            )}
            {linkHref && linkText && (
                <Link data-tracking={trackLabel} href={linkHref}>
                    {linkText}
                </Link>
            )}
        </GridColumnFullWidth>
    </GridFullWidth>
);

WebsiteTeaser.displayName = 'WebsiteTeaser';
