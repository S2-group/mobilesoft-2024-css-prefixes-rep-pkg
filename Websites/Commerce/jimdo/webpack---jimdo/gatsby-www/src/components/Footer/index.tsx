import React from 'react';

import { useMetadataOverrides } from '@hooks/useOverrides';
import { StaticQuery, graphql } from 'gatsby';

import { useGetExperimentGroupById } from '@jimdo/growth-tools';

import { useIsDesktopAndSmaller } from 'hooks/useIsDesktopAndSmaller';

import { Langs } from '@shared-types/langs';

import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';
import { MiniFooter } from './MiniFooter';
import { FooterProps } from './types';

import * as classes from './index.module.scss';

type FooterWithQueryProps = {
    footerType: 'big' | 'mini';
    lang: Langs;
    footerMiniDarkBackground?: boolean;
};

type Child = {
    experiment: string;
};

export const FooterWithQuery = (props: FooterWithQueryProps) => {
    const cancelPlanPageLinkVariation = useGetExperimentGroupById(
        'experiment-CI2-12-cancel-plan-link'
    );

    const applyMetadataOverrides = useMetadataOverrides();

    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    site {
                        siteMetadata {
                            socialButtonList {
                                lang
                                facebook {
                                    href
                                    label
                                }
                                twitter {
                                    href
                                    label
                                }
                                youTube {
                                    href
                                    label
                                }
                                instagram {
                                    href
                                    label
                                }
                                pinterest {
                                    href
                                    label
                                }
                            }
                            footer {
                                lang
                                homeLink
                                footerLinks {
                                    headerText
                                    childs {
                                        label
                                        href
                                        experiment
                                        withReferrerQueryParam
                                        openInNewTab
                                    }
                                }
                                legalLinks {
                                    label
                                    href
                                }
                                consentManagementButton {
                                    label
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const { lang } = props;
                const siteMetadata = applyMetadataOverrides
                    ? applyMetadataOverrides(data.site.siteMetadata)
                    : data.site.siteMetadata;
                const socialButtonData = siteMetadata.socialButtonList.find(
                    (translation: { lang: Langs }) => translation.lang === lang
                );
                const { homeLink, footerLinks, legalLinks, consentManagementButton } =
                    siteMetadata.footer.find(
                        (translation: { lang: Langs }) => translation.lang === lang
                    );

                const filteredFooterLinks =
                    cancelPlanPageLinkVariation === 'target'
                        ? footerLinks
                        : footerLinks.map((section: { childs: Child[] }) => ({
                              ...section,
                              childs: section.childs.filter(child => !child.experiment),
                          }));

                return props.footerType === 'big' ? (
                    <Footer
                        {...{
                            homeLink,
                            footerLinks: filteredFooterLinks,
                            legalLinks,
                            consentManagementButton,
                            socialButtonData,
                            lang,
                        }}
                    />
                ) : (
                    <MiniFooter
                        legalLinks={legalLinks}
                        consentManagementButton={consentManagementButton}
                        footerMiniDarkBackground={props.footerMiniDarkBackground}
                    />
                );
            }}
        />
    );
};

export const Footer = ({
    homeLink,
    footerLinks,
    legalLinks,
    consentManagementButton,
    socialButtonData,
    lang,
}: FooterProps) => {
    const isDesktopAndLarger = !useIsDesktopAndSmaller();
    return (
        <footer className={classes.root}>
            <div>
                {isDesktopAndLarger ? (
                    <FooterDesktop
                        {...{
                            homeLink,
                            footerLinks,
                            legalLinks,
                            consentManagementButton,
                            socialButtonData,
                            lang,
                        }}
                    />
                ) : (
                    <FooterMobile
                        {...{
                            homeLink,
                            footerLinks,
                            legalLinks,
                            consentManagementButton,
                            socialButtonData,
                            lang,
                        }}
                    />
                )}
            </div>
        </footer>
    );
};
