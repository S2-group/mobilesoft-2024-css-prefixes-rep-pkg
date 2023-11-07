import React from 'react';

import clsx from 'clsx';

import { Button } from '@components/Button';
import { GridFullWidth, GridColumnFullWidth } from '@components/GridFullWidth';
import { Headline } from '@components/Headline';
import { Link } from '@components/Link';

import { TextTags } from 'types/textTags';

import * as classes from './index.module.scss';

type HeadlineCopyProps = {
    data?: Partial<{
        title: string;
        subtitle?: string;
        text?: string;
        tag?: TextTags;
        buttonHref?: string;
        buttonLabel?: string;
        buttonSubtitle?: string;
        buttonColor?: string;
        linkHref?: string;
        linkLabel?: string;
        bgColor?: 'none' | 'grey';
        headlineSize?: 'hs' | 'titlemedium' | 'hm' | 'hl' | 'hx' | 'hxx';
    }>;
    trackLabel?: string;
    id: string;
};

export const HeadlineCopy = ({ data, trackLabel, id }: HeadlineCopyProps) => {
    if (!data) {
        return null;
    }

    const {
        title,
        subtitle,
        text,
        tag,
        buttonHref,
        buttonLabel,
        buttonSubtitle,
        buttonColor,
        linkHref,
        linkLabel,
        bgColor,
        headlineSize,
    } = data;

    if (!title) {
        return null;
    }

    return (
        <GridFullWidth className={clsx(classes.root, bgColor === 'grey' && classes.bgGrey)} id={id}>
            <GridColumnFullWidth l="8" lStart="3" className={classes.column}>
                {subtitle && <p className={clsx('hs', classes.subtitle)}>{subtitle}</p>}

                <Headline
                    value={title}
                    tag={tag || 'h2'}
                    className={clsx(classes.title, headlineSize ?? 'hx')}
                />

                {text && <p className={clsx('pl', classes.text)}>{text}</p>}

                {buttonLabel && buttonHref && (
                    <Button
                        href={buttonHref}
                        data-tracking={trackLabel}
                        color={buttonColor ? 'blueInverted' : 'blue'}
                        center
                        className={classes.button}
                        subtitle={buttonSubtitle}
                    >
                        {buttonLabel}
                    </Button>
                )}

                {linkHref && linkLabel && (
                    <Link data-tracking={trackLabel} href={linkHref}>
                        {linkLabel}
                    </Link>
                )}
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};

HeadlineCopy.displayName = 'HeadlineCopy';
