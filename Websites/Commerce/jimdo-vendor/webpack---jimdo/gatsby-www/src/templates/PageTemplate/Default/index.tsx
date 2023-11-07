import React, { useCallback, useMemo } from 'react';

import { MetadataContextFunc, MetadataOverridesProvider } from '@hooks/useOverrides';
import { usePageInitializers } from '@hooks/usePageInitializers';

import { trackEvent, getAnonId } from '@jimdo/consent-management-tracking';
import { ExperimentsProvider, JimdoApp } from '@jimdo/growth-tools';
import { Breakpoints } from '@jimdo/growth-tools/dist/components/Experimenter/types';

import { Langs } from 'types/langs';

import '../../../index.scss';
import { Layout as DefaultLayout } from '../../../Layouts/Default';
import { Block, getBlock } from '../BlockHelper';
import { generateLocalsData, mapLocales } from '../mapLocales';

type Href = { lang: Langs; href: string };

type IsLang = `isLang${keyof typeof Langs}`;

type KeyValueObj = { [key: string]: string };

export type CustomLayout = {
    // TODO: use a generic typescript type to resolve data as component props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: React.JSXElementConstructor<any>;
    data?: { [key: string]: unknown };
};

export type PageContext = {
    lng: Langs;
    prefix: string;
    draft: boolean;
    isTranslationEnv: boolean;
    pageHrefs: Href[];
    href: Href;
    translations: KeyValueObj;
    noindex: boolean;
    skipHeader: boolean;
    headerMinibackgroundColor?: 'White' | 'DarkBlue';
    noHrefLang: boolean;
    footerType: 'mini' | 'big';
    footerMiniDarkBackground?: boolean;
    pageBackgroundColor?: 'LightGrey' | 'LightBlue' | 'White';
    transparentHeader: boolean;
    previewImage?: string;
    hideHeader?: boolean;
    links: KeyValueObj;
} & Record<IsLang, boolean>;

export type PageProps<D extends Record<string, unknown> = Record<string, never>> = {
    pageContext: PageContext;
    data?: D;
};

type PageTemplateProps = {
    pageContext: PageContext;
    children: Block | Block[];
    metadataOverrides?: MetadataContextFunc;
    layout?: CustomLayout;
};

export function resolvePrefixToHref(prefix: string, links: PageContext['links']) {
    const href = links[prefix];
    if (!href) throw Error(`Unable to resolve prefix "${prefix}" to a page href!`);
    return href;
}

export const PageTemplate = ({
    pageContext,
    children,
    metadataOverrides,
    layout: customLayout,
}: PageTemplateProps) => {
    const { lng, prefix, draft, isTranslationEnv, translations } = pageContext;
    const localsData = generateLocalsData(translations, prefix, draft, isTranslationEnv);
    const locales = mapLocales(localsData);

    const getTranslations = useCallback(
        (blockName: string, blockId: string): { [key: string]: string } => {
            return locales[prefix].module[blockName]?.[blockId] || {};
        },
        [locales, prefix]
    );

    usePageInitializers(lng);
    getAnonId();

    const layoutElm = useMemo(() => {
        const LayoutComp = customLayout ? customLayout.Component : DefaultLayout;
        return (
            <LayoutComp
                lang={pageContext.lng}
                prefix={pageContext.prefix}
                href={pageContext.href}
                hrefs={pageContext.pageHrefs}
                head={locales[pageContext.prefix].seo}
                noindex={pageContext.noindex}
                skipHeader={pageContext.skipHeader}
                headerMinibackgroundColor={pageContext.headerMinibackgroundColor}
                footerType={pageContext.footerType}
                footerMiniDarkBackground={pageContext.footerMiniDarkBackground}
                noHrefLang={pageContext.noHrefLang}
                pageBackgroundColor={pageContext.pageBackgroundColor}
                transparentHeader={pageContext.transparentHeader}
                previewImage={pageContext.previewImage} // TODO: fix previewImage not resolving to an image with correct path
                hideHeader={pageContext.hideHeader}
                {...(customLayout ? customLayout.data : undefined)}
            >
                {React.Children.map(children, block => getBlock(block, lng, getTranslations))}
            </LayoutComp>
        );
    }, [children, customLayout, getTranslations, lng, locales, pageContext]);

    return (
        <MetadataOverridesProvider value={metadataOverrides}>
            <ExperimentsProvider
                language={lng}
                track={trackEvent}
                jimdoApp={JimdoApp.LandingPage}
                mobileBreakpoint={Breakpoints.LG}
            >
                {layoutElm}
            </ExperimentsProvider>
        </MetadataOverridesProvider>
    );
};

export default PageTemplate;
