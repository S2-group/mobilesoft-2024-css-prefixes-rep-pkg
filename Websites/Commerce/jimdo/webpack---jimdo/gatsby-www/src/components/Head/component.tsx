import React from 'react';

import { Helmet } from 'react-helmet';

import schemaGenerator from 'helpers/schemaGenerator';

import { Href } from '@shared-types/href';

type LocationProps = {
    pathname: string;
};

type Socials = {
    fbAppId: string;
    twitter: string;
};

type HeadProps = {
    siteTitle: string;
    siteUrl: string;
    pageTitle: string;
    themeColor: string;
    social: Socials;
    location: LocationProps;
    description: string;
    title: string;
    hrefs: Href[];
    previewImage?: string;
    noindex: string;
    noHrefLang: string;
    lang: string;
};

export const Head = ({
    siteTitle,
    siteUrl,
    pageTitle,
    themeColor,
    social,
    location,
    description,
    title,
    hrefs,
    previewImage,
    noindex,
    noHrefLang,
    lang,
}: HeadProps) => {
    const pageTitleFull = pageTitle ? `${siteTitle}: ${pageTitle}` : siteTitle;
    const canonical = siteUrl + (location.pathname || '');

    return (
        <Helmet>
            <html lang={lang} />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width,initial-scale=1.0,user-scalable=yes"
                name="viewport"
            />
            <meta
                name="robots"
                content={`${noindex ? 'noindex, nofollow, noarchive' : 'index, follow, archive'}`}
            />

            <meta content={siteTitle} name="apple-mobile-web-app-title" />
            <meta content={pageTitleFull} property="og:title" />
            <meta content={pageTitleFull} name="twitter:title" />
            <title>{title}</title>

            <meta content={description} name="description" />
            <meta content={description} property="og:description" />
            <meta content={description} name="twitter:description" />

            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
            <meta content={themeColor} name="theme-color" />
            <meta content={siteTitle} name="application-name" />

            <meta content="website" property="og:type" />
            <meta content={siteTitle} property="og:site_name" />
            <meta content={social.fbAppId} property="fb:app_id" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={`@${social.twitter}`} name="twitter:site" />
            <meta content={`@${social.twitter}`} name="twitter:creator" />
            <meta content={pageTitleFull} name="twitter:text:title" />
            <meta content={canonical} property="og:url" />
            <meta content={canonical} name="twitter:url" />
            <link rel="canonical" href={canonical} />

            <meta
                content={`${previewImage ? `${siteUrl}${previewImage}` : `${siteUrl}/preview.png`}`}
                property="og:image"
            />
            <meta content="600" property="og:image:width" />
            <meta content="314" property="og:image:height" />
            <meta
                content={`${siteUrl}${previewImage}` || `${siteUrl}/preview.png`}
                name="twitter:image"
            />
            <meta content="600" name="twitter:image:width" />
            <meta content="314" name="twitter:image:height" />

            <meta content={themeColor} name="msapplication-TileColor" />
            <meta content="/icons/mstile-70x70.png" name="msapplication-square70x70" />
            <meta content="/icons/mstile-144x144.png" name="msapplication-square144x144" />
            <meta content="/icons/mstile-150x150.png" name="msapplication-square150x150" />
            <meta content="/icons/mstile-310x150.png" name="msapplication-wide310x150" />
            <meta content="/icons/mstile-310x310.png" name="msapplication-square310x310" />
            {!noHrefLang &&
                hrefs.map(reference => (
                    <link
                        key={reference.lang}
                        rel="alternate"
                        hrefLang={reference.lang}
                        href={`https://www.jimdo.com${reference.href}`}
                    />
                ))}

            <link href="/manifest.json" rel="manifest" />
            <link href="/icons/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
            <link href="/icons/apple-touch-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
            <link href="/icons/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
            <link href="/icons/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
            <link
                href="/icons/apple-touch-icon-114x114.png"
                rel="apple-touch-icon"
                sizes="114x114"
            />
            <link
                href="/icons/apple-touch-icon-120x120.png"
                rel="apple-touch-icon"
                sizes="120x120"
            />
            <link
                href="/icons/apple-touch-icon-144x144.png"
                rel="apple-touch-icon"
                sizes="144x144"
            />
            <link
                href="/icons/apple-touch-icon-152x152.png"
                rel="apple-touch-icon"
                sizes="152x152"
            />
            <link
                href="/icons/apple-touch-icon-167x167.png"
                rel="apple-touch-icon"
                sizes="167x167"
            />
            <link
                href="/icons/apple-touch-icon-180x180.png"
                rel="icon"
                sizes="180x180"
                type="image/png"
            />

            <link href="/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
            <link href="/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

            <link
                rel="alternate"
                type="application/rss+xml"
                title="Blog"
                href="https://feeds.feedburner.com/jimdo_en"
            />

            <script type="application/ld+json">
                {JSON.stringify(
                    schemaGenerator({
                        location,
                        canonical,
                        siteUrl,
                        pageTitle,
                        siteTitle,
                        pageTitleFull,
                    })
                )}
            </script>

            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'http://schema.org',
                    '@type': 'Organization',
                    name: 'Jimdo GmbH',
                    url: siteUrl,
                    sameAs: ['https://www.facebook.com/Jimdo/', 'https://twitter.com/jimdo'],
                })}
            </script>
        </Helmet>
    );
};
