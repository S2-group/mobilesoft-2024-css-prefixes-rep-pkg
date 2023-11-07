import React, { ComponentProps } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const dir = '../../../content/images';

type StaticImageType = ComponentProps<typeof StaticImage>;

export type StaticImageOptions = {
    alt?: string;
    className?: string;
    objectFit?: StaticImageType['objectFit'];
    objectPosition?: StaticImageType['objectPosition'];
    style?: StaticImageType['style'];
    backgroundColor?: StaticImageType['backgroundColor'];
};

export type StaticImageConstructor = (options: StaticImageOptions) => JSX.Element;

export const SharedStaticImages = {
    homepage: {
        heroVisualDesktop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/homepage/homepage_tests-hero-image-desktop-2x.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        heroVisualMobile: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/homepage/homepage_tests-hero-image-mobile-2x.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        matze: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/homepage/matze.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    marketingOnlineshopEasy: {
        hero: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_onlineshop_easy/hero.jpg`}
                alt={alt}
                layout="fixed"
                className={className}
                objectFit={objectFit}
            />
        ),
        testimonial: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_onlineshop_easy/testimonial.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    marketingWebsiteEasy: {
        hero: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_website_easy/hero.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        testimonial: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_website_easy/testimonial.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    marketingToolsYouNeed: {
        Teaser1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/teaser1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Teaser2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/teaser2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Teaser3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/teaser3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustedShops: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/trustedshops.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/example1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/example2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/example3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_tools_you_need/example4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    shared: {
        shop_section: ({ alt = '', className, objectFit, objectPosition }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/shop-related/shop_section.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
                objectPosition={objectPosition}
            />
        ),
        website_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_wedding: {
        example_wedding_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/example-wedding-1.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        example_wedding_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/example-wedding-2.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        example_wedding_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/example-wedding-3.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        example_wedding_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/example-wedding-4.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_teacher: {
        Example_Teacher_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Teacher_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Teacher_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Teacher_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_8: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-8.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_14: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-14.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_selbermachen: {
        image_website_teaser: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/image-website-teaser.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_salon: {
        Example_Beauty_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Beauty_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Beauty_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Beauty_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_restaurant: {
        dummy_website_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_7: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-7.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_realestate: {
        ltg_visual_en: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/ltg-visual-en.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        bl_visual: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/bl-visual.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_RealEstate_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_RealEstate_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_RealEstate_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_RealEstate_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_RealEstate_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_RealEstate_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Architect_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Architect_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_RealEstate_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_RealEstate_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_photography: {
        website_12: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-12.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_11: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-11.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_8: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-8.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_music: {
        website_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Music_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Music_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Music_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Music_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Music_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Music_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_10: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-10.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_medical: {
        ltg_visual_en: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/ltg-visual-en.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        bl_visual: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/bl-visual.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_local_business: {
        store_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_coaching: {
        ltg_visual_en: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/ltg-visual-en.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        bl_visual: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/bl-visual.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_business: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        ltg_visual_en: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/ltg-visual-en.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        bl_visual: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/bl-visual.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Coaching_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Coaching_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Health_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Health_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_author: {
        Example_Author_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Author_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Author_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Author_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Author_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Author_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Author_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Author_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Author_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Author_5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_artist: {
        Example_Artist_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Artist_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Artist_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Artist_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Architect_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Architect_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_12: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-12.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_11: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-11.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    vertical_architecture: {
        Example_Architect_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Architect_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Architect_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Architect_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Example_Architect_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/Example_Architect_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/website-5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_logo_creator: {
        Logo_SliderImage_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/logo-related/Logo_SliderImage_1.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_domain_suggestions: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_domain_search: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_creator: {
        creator_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/creator-1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        creator_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/creator-2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        creator_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/creator-3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        creator_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/creator-4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        creator_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/creator-5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        creator_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/creator-6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_addon_legal_text: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        image_website_teaser: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/image-website-teaser.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_addon_fbe: {
        TrustBadges_EN_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustBadges_DE_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-DE-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustBadges_ES_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-ES-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustBadges_FR_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-FR-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustBadges_IT_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-IT-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustBadges_NL_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-NL-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_addon_booking_new: {
        TrustBadges_DE_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-DE-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    product_addon_booking: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    pricing: {
        image_website_teaser: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/image-website-teaser.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    misc_website_builder: {
        dummy_website_7: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-7.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_8: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-8.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_9: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-9.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_10: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-10.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_11: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-11.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    misc_support: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    misc_gratis: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_7: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-7.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_8: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-8.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_9: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-9.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_10: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-10.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_11: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-11.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    misc_ai_builder: {
        hero_visual_en: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/visual-cms/hero_visual_en.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        store_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/store-4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        dummy_website_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/lp-website-examples/dummy-website-6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    marketing_homepage: {
        TrustBadges_DE_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-DE-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        shop_section: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/shop-related/shop_section.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_1.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    marketing_business_box: {
        TrustBadges_DE_Shop: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-DE-Shop.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    marketing_affiliate_traffic: {
        TrustBadges_EN_Website: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-EN-Website.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        shop_section: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/shop-related/shop_section.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_5.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_4.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_3.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        website_6: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/website_6.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        mobile_2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/website-examples-new/mobile_2.png`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        carpenter: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/craft-related/carpenter.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
        Logo_SliderImage_1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/logo-related/Logo_SliderImage_1.jpg`}
                alt={alt}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
    trusted_badges: {
        website_de: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/shared/trust-badges/TrustBadges-DE-Website.png`}
                alt={alt}
                quality={90}
                layout="constrained"
                objectFit={objectFit ?? 'contain'}
                className={className}
            />
        ),
        hero: ({ alt = '', className, objectFit }: StaticImageOptions) => (
            <StaticImage
                src={`${dir}/marketing_bookingtool/hero.png`}
                alt={alt}
                quality={95}
                className={className}
                objectFit={objectFit}
            />
        ),
    },
};
