import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Langs } from '@shared-types/langs';

import { SignupLightboxModal as SignupLightboxModalComp } from './SignupLightboxModal';

type SignupLightboxModalProps = {
    onCloseHandler: React.MouseEventHandler;
    lang: Langs | 'en-US';
};

export const SignupLightboxModal = ({
    onCloseHandler,
    lang = 'en-US',
}: SignupLightboxModalProps) => {
    const dataQuery = useStaticQuery(graphql`
        query SignupPopupButtonQuery {
            site {
                siteMetadata {
                    lightboxedCtas {
                        lang
                        buttonsTitle
                        buttonLabelApple
                        buttonHrefApple
                        buttonLabelEmail
                        buttonHrefEmail
                        buttonLabelFacebook
                        buttonHrefFacebook
                        buttonLabelGoogle
                        buttonHrefGoogle
                        loginHref
                        loginLabel
                        loginText
                        listItems {
                            text
                        }
                        text
                        title
                    }
                }
            }
        }
    `);

    const data = dataQuery.site.siteMetadata.lightboxedCtas.find(
        (translation: { lang: Langs }) => translation.lang === lang
    );
    return <SignupLightboxModalComp {...{ data, onCloseHandler }} />;
};
