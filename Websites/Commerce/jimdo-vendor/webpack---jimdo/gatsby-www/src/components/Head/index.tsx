import React from 'react';

import { Location } from '@gatsbyjs/reach-router';
import { StaticQuery, graphql } from 'gatsby';

import { Href } from '@shared-types/href';
import { Langs } from '@shared-types/langs';

import { Head } from './component';

type HeadWithQueryProps = {
    hrefs: Href[];
    head: { title: string; description: string };
    noindex: boolean;
    noHrefLang: boolean;
    previewImage?: string;
    lang: Langs;
};

export const HeadWithQuery = ({
    hrefs,
    head,
    noindex,
    noHrefLang,
    previewImage,
    lang,
}: HeadWithQueryProps) => (
    <StaticQuery
        query={graphql`
            query MetaDataQuery {
                site {
                    siteMetadata {
                        siteTitle
                        siteUrl
                        themeColor
                        social {
                            twitter
                            fbAppId
                        }
                    }
                }
            }
        `}
        render={data => (
            <Location>
                {({ location }) => (
                    <Head
                        {...data.site.siteMetadata}
                        hrefs={hrefs}
                        title={head.title}
                        description={head.description}
                        noindex={noindex}
                        noHrefLang={noHrefLang}
                        location={location}
                        lang={lang}
                        previewImage={previewImage}
                    />
                )}
            </Location>
        )}
    />
);
