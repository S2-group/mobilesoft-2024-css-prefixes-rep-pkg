import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { StaticImageOptions } from 'images/static/static-images-map';

const dir = '../../../content/images';

export const StaticImages = {
    shopRelatedSection: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/shared/shop-related/shop_section.jpg`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    mobile1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/shared/website-examples-en/mobile_1.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    mobile2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/shared/website-examples-en/mobile_2.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    mobile3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/shared/website-examples-en/mobile_3.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    website1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/shared/website-examples-en/website_1.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    website2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/shared/website-examples-en/website_2.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    logo1: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/homepage/logos/logo_1.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    logo2: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/homepage/logos/logo_2.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    logo3: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/homepage/logos/logo_3.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    logo4: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/homepage/logos/logo_4.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
    logo5: ({ alt = '', className, objectFit }: StaticImageOptions) => (
        <StaticImage
            src={`${dir}/homepage/logos/logo_5.png`}
            alt={alt}
            className={className}
            objectFit={objectFit}
        />
    ),
};
