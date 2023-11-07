import React from 'react';

import clsx from 'clsx';

import { useNotification } from '@jimdo/notifications';

import { Button } from '@components/Button';
import { GridColumnFullWidth, GridFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { SignUpLightboxButton } from '@components/SignUpLightboxButton';
import { Text } from '@components/Text';

import { Langs } from 'types/langs';

import LogoWhite from '../../images/logos/jimdo_logo_white.svg';

import * as classes from './index.module.scss';

type DividerProps = {
    data?: Partial<{
        title: string;
        subtitle?: string;
        buttonLabel?: string;
        buttonHref?: string;
        backgroundWhite?: boolean;
        buttonOpensSignupLightboxForLang?: Array<Langs>;
        discountCode?: string;
        snackbarText?: string;
        legalText?: string;
        textSectionForLogoVariant?: string;
    }>;
    secondaryTrackLabel?: string;
    trackLabel?: string;
    id: string;
    lang?: Langs;
};

export const Divider = ({ data, secondaryTrackLabel, trackLabel, id, lang }: DividerProps) => {
    const { pushSnackbar } = useNotification();

    if (!data) {
        return null;
    }

    const {
        title,
        subtitle,
        buttonLabel,
        buttonHref,
        backgroundWhite,
        buttonOpensSignupLightboxForLang,
        discountCode,
        snackbarText,
        legalText,
        textSectionForLogoVariant,
    } = data;

    const showSnackbar = () => {
        pushSnackbar({
            type: 'info',
            message: `${snackbarText}`,
        });
    };

    return (
        <div className={clsx(backgroundWhite ? classes.white : classes.navy, classes.root)} id={id}>
            <GridFullWidth>
                <GridColumnFullWidth s="4" sStart="2" l="8" lStart="3" xl="6" xlStart="4">
                    {/* TODO: rename prop to title */}
                    {subtitle && (
                        <Headline
                            value={subtitle}
                            tag="h2"
                            className={clsx(classes.subtitle, 'hl')}
                        />
                    )}

                    {/* TODO: rename prop to text */}
                    {title && <Text className={clsx('hs', classes.title)} value={title} />}
                    <div className={classes.buttonContainer}>
                        {discountCode && snackbarText && (
                            <Button
                                data-tracking={secondaryTrackLabel}
                                color="blueInverted"
                                className={clsx(classes.button)}
                                onClick={() => {
                                    navigator.clipboard.writeText(discountCode);
                                    showSnackbar();
                                }}
                            >
                                {discountCode}
                            </Button>
                        )}
                        {Array.isArray(buttonOpensSignupLightboxForLang) &&
                        lang &&
                        buttonLabel &&
                        buttonOpensSignupLightboxForLang.includes(lang) ? (
                            <SignUpLightboxButton
                                lang={lang}
                                trackLabel={trackLabel}
                                className={clsx(
                                    textSectionForLogoVariant && classes.buttonWithSpacing,
                                    classes.button,
                                    discountCode && classes.noInlineMargin
                                )}
                                center
                            >
                                {buttonLabel}
                            </SignUpLightboxButton>
                        ) : (
                            buttonLabel &&
                            buttonHref && (
                                <Button
                                    data-tracking={trackLabel}
                                    href={buttonHref}
                                    className={clsx(
                                        textSectionForLogoVariant && classes.buttonWithSpacing,
                                        classes.button,
                                        discountCode && classes.noInlineMargin
                                    )}
                                    center
                                >
                                    {buttonLabel}
                                </Button>
                            )
                        )}
                    </div>
                    {legalText && <p className={classes.legalText}>{legalText}</p>}
                    {textSectionForLogoVariant && (
                        <div className={classes.logoSection}>
                            <LogoWhite className={classes.logo} />
                            {textSectionForLogoVariant && (
                                <Text
                                    className={classes.logoSectionText}
                                    value={textSectionForLogoVariant}
                                />
                            )}
                        </div>
                    )}
                </GridColumnFullWidth>
            </GridFullWidth>
        </div>
    );
};

Divider.displayName = 'Divider';
