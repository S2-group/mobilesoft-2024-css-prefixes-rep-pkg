import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Langs } from 'types/langs';

import { Header } from './Header';

type HeaderWithQueryProps = {
    lang: Langs;
    transparentHeader?: boolean;
};

export const HeaderWithQuery = ({ lang, transparentHeader = false }: HeaderWithQueryProps) => {
    const data = useStaticQuery(graphql`
        query HeaderDataQuery {
            site {
                siteMetadata {
                    header {
                        lang
                        homeLink
                        logOut {
                            label
                            link
                        }
                        website {
                            label
                            sections {
                                header
                                secondary
                                items {
                                    trackingId
                                    label
                                    subline
                                    href
                                }
                            }
                        }
                        onlineshop {
                            label
                            sections {
                                header
                                items {
                                    trackingId
                                    label
                                    subline
                                    href
                                }
                            }
                        }
                        businessTools {
                            label
                            sections {
                                header
                                items {
                                    trackingId
                                    label
                                    subline
                                    href
                                }
                            }
                        }
                        blog {
                            label
                            sections {
                                header
                                items {
                                    trackingId
                                    label
                                    subline
                                    href
                                }
                            }
                        }
                        dashboard {
                            label
                            link
                        }
                        logIn {
                            label
                            link
                        }
                        signUp {
                            label
                            link
                        }
                        avatar {
                            altProfile
                            altFallback
                        }
                        products {
                            label
                            dropdownItems {
                                title
                                desc
                                path
                            }
                        }
                        inspiration {
                            label
                            link
                        }
                        pricing {
                            label
                            link
                        }
                        blog {
                            label
                            link
                        }
                        features {
                            label
                            link
                        }
                        productAgency {
                            label
                            link
                        }
                        help {
                            label
                            sections {
                                header
                                items {
                                    trackingId
                                    label
                                    subline
                                    href
                                    openInNewTab
                                }
                            }
                            dropdownHeading
                            dropdownItems {
                                title
                                desc
                                path
                            }
                        }
                    }
                }
            }
        }
    `);

    const props = data.site.siteMetadata.header.find((x: { lang: Langs }) => x.lang === lang);

    // TODO: "transparentHeader" is used to make header transparent and give it bottom margin.
    // they should be decoupled and json pages updated accordingly
    return (
        <Header
            {...props}
            lang={lang}
            transparentHeader={transparentHeader}
            headerBottomMargin={transparentHeader}
            id="navi"
        />
    );
};
