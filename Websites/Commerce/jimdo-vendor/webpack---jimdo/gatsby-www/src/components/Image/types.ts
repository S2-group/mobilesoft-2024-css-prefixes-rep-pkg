import { Node } from 'gatsby';
import { IGatsbyImageDataParent } from 'gatsby-plugin-image/dist/src/components/hooks';

import { StaticImageConstructor } from 'images/static/static-images-map';

export type GatsbyImageData = {
    childImageSharp: Pick<IGatsbyImageDataParent<Node>, 'gatsbyImageData'>;
};

export type GraphQlImage = { nodes: GatsbyImageData[] };

export function isDynamicImage(
    image: StaticImageConstructor | GatsbyImageData | undefined
): image is GatsbyImageData {
    return typeof image === 'object' && !!image.childImageSharp;
}
