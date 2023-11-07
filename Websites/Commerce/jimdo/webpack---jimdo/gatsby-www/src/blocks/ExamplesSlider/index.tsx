import React from 'react';

import { GatsbyImageData, Image } from '@components/Image';
import { SliderComponent } from '@components/Slider';

import { StaticImageConstructor } from 'images/static/static-images-map';
import { StaticImageComponentType } from 'images/static/types/staticImageComponentType';

import * as classes from './index.module.scss';

type Slides = {
    childImageSharp: GatsbyImageData & { base64?: string };
    image: GatsbyImageData;
    imageAlt: string;
};

type ImageAlts = {
    imageAlt: string;
};

type ImageSizeProps = {
    width: string;
    height: string;
};

// TODO: refactor and cleanup the images/Images/ExamplesSlider mess
type ExampleSliderProps = {
    data?: Partial<{
        ExamplesSlider?: Array<Slides>;
        images?: Array<Slides>;
        imageAlts: Array<ImageAlts>;
        imageSize: Array<ImageSizeProps>;
        Images?: StaticImageComponentType[] | StaticImageConstructor[];
    }>;
    id: string;
};

export const ExamplesSlider = ({ data, id }: ExampleSliderProps) => {
    if (!data) {
        return null;
    }

    const {
        ExamplesSlider: legacyImages,
        images,
        imageAlts,
        imageSize: imagesize = [],
        Images,
    } = data;

    const slides = images || legacyImages;

    if ((!slides || slides.length === 0) && (!Images || Images.length === 0)) {
        return null;
    }

    return (
        <div className={classes.root} id={id}>
            <SliderComponent gap={0} centered infinite showDots>
                {!Images
                    ? slides?.map(({ childImageSharp, image, imageAlt }, index) => (
                          <div
                              className={classes.sliderElm}
                              key={(childImageSharp && childImageSharp.base64) || index}
                          >
                              <div
                                  className={classes.image}
                                  style={{
                                      width: imagesize[index]?.width,
                                      height: imagesize[index]?.height,
                                  }}
                              >
                                  <Image
                                      image={image ?? childImageSharp}
                                      alt={imageAlt || (imageAlts?.[index].imageAlt ?? '')}
                                      objectFit="contain"
                                      backgroundColor="transparent"
                                  />
                              </div>
                          </div>
                      ))
                    : Images.map((Image, index) => (
                          <div className={classes.sliderElm} key={index}>
                              <div
                                  className={classes.image}
                                  style={{
                                      width: imagesize[index]?.width,
                                      height: imagesize[index]?.height,
                                  }}
                              >
                                  <Image
                                      alt={imageAlts?.[index].imageAlt}
                                      objectFit="contain"
                                      backgroundColor="transparent"
                                  />
                              </div>
                          </div>
                      ))}
            </SliderComponent>
        </div>
    );
};

ExamplesSlider.displayName = 'ExamplesSlider';
