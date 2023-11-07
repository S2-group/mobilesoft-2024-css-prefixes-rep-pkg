import React, { useEffect } from 'react';

import clsx from 'clsx';

import { FooterWithQuery } from '@components/Footer';
import { HeadWithQuery } from '@components/Head';
import { HeaderWithQuery } from '@components/Header';
import { HeaderMini } from '@components/HeaderMini';

import { MetaDataComp } from '@blocks/MetaDataComp';

import useConsentManagement from 'hooks/useConsentManagement';

import { SetUserAccountInformation } from 'helpers/checkLoginState';
import { generateBreadCrumbJSONLD } from 'helpers/seoMarkups';

import { Href } from '@shared-types/href';
import { Langs } from '@shared-types/langs';

import * as classes from './index.module.scss';

type HeadProps = {
    title: string;
    description: string;
};

type LayoutProps = {
    href: Href;
    hrefs: Href[];
    prefix: string;
    children: React.ReactNode;
    head: HeadProps;
    skipHeader: boolean;
    transparentHeader: boolean;
    noindex: boolean;
    noHrefLang: boolean;
    previewImage?: string;
    footerType: 'big' | 'mini';
    footerMiniDarkBackground?: boolean;
    lang: Langs;
    pageBackgroundColor?: 'LightGrey' | 'LightBlue' | 'White';
    headerMinibackgroundColor?: 'White' | 'DarkBlue' | 'Blue';
    hideHeader?: boolean;
};

const Layout = ({
    href,
    hrefs,
    prefix,
    children,
    head,
    skipHeader = false,
    transparentHeader = false,
    noindex,
    noHrefLang,
    previewImage,
    footerType,
    footerMiniDarkBackground,
    lang,
    pageBackgroundColor,
    headerMinibackgroundColor,
    hideHeader,
}: LayoutProps) => {
    const [ConsentManagementComponent, consentManagementProps] = useConsentManagement();

    // TODO: remove this block when all VWO tests disable Manual campaign activation
    useEffect(() => {
        window.VWO = window.VWO || [];
        window.VWO.push(['activate', false, [36, 55, 56, 38, 46, 45], true]);
    }, []);

    return (
        <div className={clsx(classes.root, classes[`background${pageBackgroundColor}`])}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadCrumbJSONLD(href, prefix)),
                }}
            />
            <SetUserAccountInformation />
            <HeadWithQuery
                lang={lang}
                head={head}
                previewImage={previewImage}
                hrefs={hrefs}
                noindex={noindex}
                noHrefLang={noHrefLang}
            />
            {ConsentManagementComponent && consentManagementProps ? (
                <ConsentManagementComponent {...consentManagementProps} />
            ) : null}
            <main>
                {skipHeader && <HeaderMini headerMinibackgroundColor={headerMinibackgroundColor} />}
                {!skipHeader && !hideHeader ? (
                    <HeaderWithQuery lang={lang} transparentHeader={transparentHeader} />
                ) : (
                    hideHeader && !skipHeader && <header></header>
                )}
                {children}
                <MetaDataComp data={head} />
            </main>
            <FooterWithQuery
                footerType={footerType || 'big'}
                lang={lang}
                footerMiniDarkBackground={footerMiniDarkBackground}
            />
        </div>
    );
};

export { Layout };
