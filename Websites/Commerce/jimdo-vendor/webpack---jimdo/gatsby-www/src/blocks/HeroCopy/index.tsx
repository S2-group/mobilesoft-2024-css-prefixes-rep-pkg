import React, { useState } from 'react';

import clsx from 'clsx';

import { Button, ButtonColor } from '@components/Button';
import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { GatsbyImageData, Image as DynamicImage } from '@components/Image';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';
import { VideoModalContent } from '@components/VideoModalContent';

import { StaticImageComponentType } from 'images/static/types/staticImageComponentType';

import { Langs } from 'types/langs';

import { resolveAssetUrl } from 'helpers/resolveAssetUrl';

import * as classes from './index.module.scss';

type HeroCopyProps = {
    data?: Partial<{
        text?: string;
        subtitle?: string;
        title: string;
        buttonLabel?: string;
        buttonHref?: string;
        buttonSubtitle?: string;
        linkLabel?: string;
        buttonHrefTargetBlank?: boolean;
        videoFileName?: string;
        videoTitle?: string;
        buttonOpensSignupLightboxForLang?: Array<Langs>;
        hideButtonOnMobile?: boolean;
        extraLargeHeadlineSize?: boolean;
        backgroundColor?: 'DarkBlue' | 'White';
        buttonColor?: ButtonColor;
        image?: GatsbyImageData;
        Image?: StaticImageComponentType;
        qualityBadgeAlt?: string;
    }>;
    trackLabel: string;
    secondaryTrackLabel?: string;
    lang?: Langs;
    id: string;
};

export const HeroCopy = ({ data, trackLabel, secondaryTrackLabel, lang, id }: HeroCopyProps) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!data) {
        return null;
    }

    const {
        text,
        subtitle,
        title,
        buttonLabel,
        buttonHref,
        buttonSubtitle,
        linkLabel,
        buttonHrefTargetBlank,
        videoFileName,
        videoTitle,
        buttonOpensSignupLightboxForLang,
        hideButtonOnMobile,
        extraLargeHeadlineSize,
        backgroundColor,
        buttonColor,
        image,
        Image,
        qualityBadgeAlt,
    } = data;

    if (!title) {
        return null;
    }

    const hasImage = image || Image;

    return (
        <div
            className={clsx(
                classes.root,
                backgroundColor && classes[`background${backgroundColor}`]
            )}
            id={id}
        >
            <GridFullWidth>
                <GridColumnFullWidth
                    l="10"
                    lStart="2"
                    xl="8"
                    xlStart="3"
                    className={classes.contentContainer}
                >
                    <Headline
                        value={title}
                        tag="h1"
                        className={clsx(extraLargeHeadlineSize ? 'hxx' : 'hx')}
                    />
                    {subtitle && <h2 className={clsx('pl', classes.subtitle)}>{subtitle}</h2>}
                    {text && <Headline value={text} tag="p" className={clsx('pl', classes.text)} />}
                </GridColumnFullWidth>
                <GridColumnFullWidth
                    s="4"
                    sStart="2"
                    m="6"
                    mStart="1"
                    l="8"
                    lStart="3"
                    xl="6"
                    xlStart="4"
                    className={clsx(hideButtonOnMobile && classes.hideButtonOnMobile)}
                >
                    <div className={classes.links}>
                        {Array.isArray(buttonOpensSignupLightboxForLang) &&
                        lang &&
                        buttonOpensSignupLightboxForLang.includes(lang) ? (
                            <SignUpLightboxButton
                                lang={lang}
                                trackLabel={trackLabel}
                                buttonColor={buttonColor}
                                className={classes.btn}
                                subtitle={buttonSubtitle}
                            >
                                {buttonLabel}
                            </SignUpLightboxButton>
                        ) : (
                            buttonLabel &&
                            buttonHref && (
                                <Button
                                    data-tracking={trackLabel}
                                    href={buttonHref}
                                    className={classes.btn}
                                    targetBlank={buttonHrefTargetBlank}
                                    color={buttonColor ? buttonColor : 'blue'}
                                    subtitle={buttonSubtitle}
                                >
                                    {buttonLabel}
                                </Button>
                            )
                        )}
                        {linkLabel && (
                            <React.Fragment>
                                <Button
                                    data-tracking={secondaryTrackLabel}
                                    className={classes.btn}
                                    color="blueInverted"
                                    onClick={(e: React.MouseEvent) => {
                                        e.preventDefault();
                                        setIsOpen(true);
                                    }}
                                >
                                    {linkLabel}
                                </Button>
                                {isOpen && videoFileName && (
                                    <VideoModalContent
                                        onCloseClick={() => setIsOpen(false)}
                                        video={{
                                            url: resolveAssetUrl(videoFileName, 'video'),
                                            title: videoTitle,
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        )}
                    </div>
                </GridColumnFullWidth>
                {hasImage && (
                    <GridColumnFullWidth xs="4" xsStart="2" lStart="5">
                        {image ? <DynamicImage image={image} alt={qualityBadgeAlt ?? ''} /> : null}
                        {Image ? <Image alt={qualityBadgeAlt ?? ''} /> : null}
                    </GridColumnFullWidth>
                )}
            </GridFullWidth>
        </div>
    );
};

HeroCopy.displayName = 'HeroCopy';
