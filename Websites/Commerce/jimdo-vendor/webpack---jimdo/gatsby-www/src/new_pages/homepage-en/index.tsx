import React from 'react';

import { PageTemplate, PageProps } from 'templates/PageTemplate/Default';

import { AutoLangSwitch } from '@components/AutoLangSwitch';

import { Divider } from '@blocks/Divider';
import { ExamplesSlider } from '@blocks/ExamplesSlider';
import { HeadlineCopy } from '@blocks/HeadlineCopy';
import { HeroCopy } from '@blocks/HeroCopy';
import { HeroVisual } from '@blocks/HeroVisual';
import { LinkListSection } from '@blocks/LinkListSection';
import { LogoTeaser } from '@blocks/LogoTeaser';
import { MissionStatement } from '@blocks/MissionStatement';
import { TeaserSplit } from '@blocks/TeaserSplit';
import { WebsiteTeaser } from '@blocks/WebsiteTeaser';

import { SharedStaticImages } from 'images/static/static-images-map';

import { ReplaceLinks } from 'helpers/replaceLinks';

import { Langs } from '@shared-types/langs';

import { StaticImages } from './static-images';

const HomePage = ({ pageContext }: PageProps) => {
    const { lng: lang } = pageContext;

    return (
        <PageTemplate pageContext={pageContext}>
            <HeroCopy
                trackLabel="hero_lightbox_cta"
                lang={lang}
                id="herocopy"
                data={{ backgroundColor: 'DarkBlue', extraLargeHeadlineSize: true }}
            />
            <HeroVisual
                id="hero"
                trackLabel="hero_fullwidth_create_website"
                lang={lang}
                data={{
                    buttonOpensSignupLightboxForLang: [Langs.EN_US],
                    Images: {
                        heroVisualDesktop: SharedStaticImages.homepage.heroVisualDesktop,
                        heroVisualMobile: SharedStaticImages.homepage.heroVisualMobile,
                    },
                }}
            />
            <AutoLangSwitch />
            <ReplaceLinks />
            <HeadlineCopy id="website_title" />
            <WebsiteTeaser
                id="website"
                trackLabel="website_create"
                lang={lang}
                data={{
                    animation: 'website_section',
                }}
            />
            <Divider
                id="divider_website"
                trackLabel="divider_create_website"
                data={{ buttonOpensSignupLightboxForLang: [Langs.EN_US] }}
            />
            <TeaserSplit
                id="shop-teaser"
                trackLabel="create_shop_teaser"
                secondaryTrackLabel="shop_how_to_teaser"
                data={{ Image: StaticImages.shopRelatedSection }}
            />
            <HeadlineCopy id="examples-title" trackLabel="examples_website" />
            <ExamplesSlider
                id="examples"
                data={{
                    Images: [
                        StaticImages.mobile1,
                        StaticImages.website1,
                        StaticImages.mobile2,
                        StaticImages.website2,
                        StaticImages.mobile3,
                    ],
                    imageSize: [
                        { height: '300px', width: '148px' },
                        { height: '300px', width: '450px' },
                        { height: '300px', width: '148px' },
                        { height: '300px', width: '450px' },
                        { height: '300px', width: '148px' },
                    ],
                }}
            />
            <HeadlineCopy id="logo-title" trackLabel="create_logo_info" />
            <LogoTeaser
                id="logo-content"
                trackLabel="create_logo_teaser"
                data={{
                    Images: [
                        StaticImages.logo1,
                        StaticImages.logo2,
                        StaticImages.logo3,
                        StaticImages.logo4,
                        StaticImages.logo5,
                    ],
                }}
            />
            <MissionStatement
                id="mission"
                trackLabel="mission_teaser"
                data={{ Image: SharedStaticImages.homepage.matze }}
            />
            <LinkListSection id="seo-links" trackLabel="industry_examples" data={{}} />
            <Divider
                id="divider"
                trackLabel="divider_create_website_two"
                data={{ buttonOpensSignupLightboxForLang: [Langs.EN_US] }}
            />
        </PageTemplate>
    );
};

export default HomePage;
