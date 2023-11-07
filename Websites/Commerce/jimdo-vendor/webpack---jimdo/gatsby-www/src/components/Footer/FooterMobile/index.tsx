import React from 'react';

import clsx from 'clsx';

import LogoJapanNavy from '../../../images/logos/jimdo_japan_logo_navy.svg';
import LogoNavy from '../../../images/logos/jimdo_logo_navy.svg';
import { Accordion } from '../../Accordion';
import { ConsentManagementButton } from '../../ConsentManagementButton';
import { GridColumnFullWidth, GridFullWidth } from '../../GridFullWidth';
import { MobileLanguageSwitch } from '../../LanguageSwitch';
import { SocialButtonList } from '../../SocialButtonList';
import { FooterProps, LegalProps } from '../types';
import { WithReferrer } from '../WithReferrer';

import * as classes from './index.module.scss';

export const Legal = ({ legalLinks, consentManagementButton }: LegalProps) => (
    <ul className={clsx('pm', classes.legalContainer)}>
        {legalLinks.map(({ label, href }) => (
            <li key={label}>
                <a data-tracking="footer_legal_link" href={href || ''}>
                    {label}
                </a>
            </li>
        ))}
        {consentManagementButton && (
            <li>
                <ConsentManagementButton
                    label={consentManagementButton.label}
                    data-tracking="footer_legal_link"
                    className="pm"
                />
            </li>
        )}
    </ul>
);

export const FooterMobile = ({
    homeLink,
    footerLinks,
    legalLinks,
    consentManagementButton,
    socialButtonData,
    lang,
}: FooterProps) => {
    return (
        <GridFullWidth>
            <GridColumnFullWidth>
                <div className={classes.row}>
                    {footerLinks.map(({ headerText, childs }) => (
                        <Accordion
                            key={headerText}
                            title={headerText}
                            useArrow={true}
                            trackLabel={'footer_accordion'}
                        >
                            <ul className={classes.list}>
                                {childs.map(
                                    ({
                                        label,
                                        href: originalHref,
                                        withReferrerQueryParam,
                                        openInNewTab,
                                    }) => (
                                        <li key={label} className="pm">
                                            <WithReferrer
                                                href={originalHref}
                                                enabled={withReferrerQueryParam}
                                            >
                                                {({ href }: { href: string }) => (
                                                    <a
                                                        data-tracking="footer_accordion_inner_link"
                                                        href={href || ''}
                                                        {...(openInNewTab && {
                                                            target: '_blank',
                                                            rel: 'noopener',
                                                        })}
                                                    >
                                                        {label}
                                                    </a>
                                                )}
                                            </WithReferrer>
                                        </li>
                                    )
                                )}
                            </ul>
                        </Accordion>
                    ))}
                </div>
                <div className={classes.row}>
                    <a
                        className={classes.logo}
                        data-tracking="footer_brand"
                        aria-label="Jimdo"
                        href={homeLink}
                    >
                        {lang === 'ja-JP' ? <LogoJapanNavy /> : <LogoNavy />}
                    </a>
                </div>
                <div className={classes.row}>
                    <SocialButtonList socialButtonData={socialButtonData} />
                </div>
                <div className={classes.row}>
                    <MobileLanguageSwitch lang={lang} type="footer" />
                </div>
                <div className={classes.row}>
                    <Legal
                        legalLinks={legalLinks}
                        consentManagementButton={consentManagementButton}
                    />
                </div>
            </GridColumnFullWidth>
        </GridFullWidth>
    );
};
