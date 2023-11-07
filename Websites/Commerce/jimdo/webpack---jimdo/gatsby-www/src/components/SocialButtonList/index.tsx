import React from 'react';

import Facebook from '@icons/social/facebook.svg';
import Instagram from '@icons/social/instagram.svg';
import Pinterest from '@icons/social/pinterest.svg';
import Twitter from '@icons/social/twitter.svg';
import Youtube from '@icons/social/youtube.svg';

import * as classes from './index.module.scss';

type Label = {
    href: string;
    label: string;
};

export type SocialButtonData = {
    facebook: Label;
    twitter: Label;
    instagram: Label;
    youTube: Label;
    pinterest: Label;
};

type SocialButtonListProps = {
    socialButtonData: Partial<SocialButtonData>;
};

const socialButtonsMap = {
    facebook: {
        dataTracking: 'footer_visit_facebook',
        Icon: Facebook,
    },
    twitter: {
        dataTracking: 'footer_visit_twitter',
        Icon: Twitter,
    },
    instagram: {
        dataTracking: 'footer_visit_instagram',
        Icon: Instagram,
    },
    youTube: {
        dataTracking: 'footer_visit_youtube',
        Icon: Youtube,
    },
    pinterest: {
        dataTracking: 'footer_visit_pinterest',
        Icon: Pinterest,
    },
};

export const SocialButtonList = ({ socialButtonData }: SocialButtonListProps) => {
    const socialButtonsElms = Object.entries(socialButtonData).map(([key, value], index) => {
        if (!Object.keys(socialButtonsMap).includes(key) || !value) return;

        const { label, href } = value;
        const buttonKey = key as keyof typeof socialButtonsMap;

        const { Icon, dataTracking } = socialButtonsMap[buttonKey];

        return (
            <li className={classes.list} key={index}>
                <a
                    data-tracking={dataTracking}
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Icon />
                </a>
            </li>
        );
    });

    return <ul className={classes.root}>{socialButtonsElms}</ul>;
};
