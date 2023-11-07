import React from 'react';

import { GatsbyImage as _GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';

export const GatsbyImage = ({ image, loading = 'lazy', ...rest }: GatsbyImageProps) => {
    const gatsbyImage = getImage(image);

    if (gatsbyImage === undefined) {
        return null;
    }

    return <_GatsbyImage image={gatsbyImage} loading={loading} {...rest} />;
};
