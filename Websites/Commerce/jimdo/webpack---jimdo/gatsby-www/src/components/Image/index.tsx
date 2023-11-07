import React, { useContext } from 'react';

import { GatsbyImageProps } from 'gatsby-plugin-image';

import { AppContext } from 'store/createContext';

import { GatsbyImage } from './GatsbyImage';
import { GatsbyImageData } from './types';

type ImageProps = Omit<GatsbyImageProps, 'image'> & {
    image: GatsbyImageData | string;
};

export const Image = (props: ImageProps) => {
    const { DI } = useContext(AppContext);
    const ImageImpl = DI?.Image ?? GatsbyImage;
    return <ImageImpl {...props} />;
};

export * from './types';
