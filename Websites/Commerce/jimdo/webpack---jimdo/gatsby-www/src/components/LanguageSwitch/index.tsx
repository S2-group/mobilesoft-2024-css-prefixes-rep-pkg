import React, { useRef, useState } from 'react';

import {
    autoUpdate,
    useFloating,
    shift,
    flip,
    useTransitionStyles,
    useHover,
    useDismiss,
    useFocus,
    useRole,
    useInteractions,
    FloatingPortal,
    useListNavigation,
    safePolygon,
} from '@floating-ui/react';
import clsx from 'clsx';

import Down from '@icons/Down.svg';

import { Langs } from '@shared-types/langs';

import { switchLanguage } from '../../helpers/langSwitch';
import DeFlag from '../../images/flags/de.svg';
import EsFlag from '../../images/flags/es.svg';
import FrFlag from '../../images/flags/fr.svg';
import ItFlag from '../../images/flags/it.svg';
import JpFlag from '../../images/flags/jp.svg';
import NlFlag from '../../images/flags/nl.svg';
import UkFlag from '../../images/flags/uk.svg';
import UsFlag from '../../images/flags/us.svg';

import * as classes from './index.module.scss';

type AvailableLang = {
    label: string;
    flag: React.ReactNode;
    lang: Langs;
};

type LanguageSwitchProps = {
    availableLangs?: AvailableLang[];
    lang?: Langs;
    type?: string;
};

// taking care of too long strings...

const exAvailableLangs: AvailableLang[] = [
    {
        label: 'English',
        flag: [<UkFlag key="uk" />, <UsFlag key="us" />],
        lang: Langs.EN_US,
    },
    {
        label: 'Deutsch',
        flag: <DeFlag />,
        lang: Langs.DE_DE,
    },
    {
        label: 'Español',
        flag: <EsFlag />,
        lang: Langs.ES_ES,
    },
    {
        label: 'Français',
        flag: <FrFlag />,
        lang: Langs.FR_FR,
    },
    {
        label: 'Italiano',
        flag: <ItFlag />,
        lang: Langs.IT_IT,
    },
    {
        label: '日本語',
        flag: <JpFlag />,
        lang: Langs.JA_JP,
    },
    {
        label: 'Nederlands',
        flag: <NlFlag />,
        lang: Langs.NL_NL,
    },
];

// Tracking keys
const SWITCH_LANG_KEY = 'lang_switch';
const SWITCH_LANG_OPEN_KEY = 'lang_switch_open';
const SWITCH_LANG_OPTION_KEY = 'lang_switch_choice';

const onLangChange = (lang: string) => {
    if (typeof location === 'undefined') {
        return;
    }

    switchLanguage(lang, 'manual');
};

export const DesktopLanguageSwitch = ({
    availableLangs = exAvailableLangs,
    lang: currentLang,
    type = 'footer',
}: LanguageSwitchProps) => {
    const currentLangObj = availableLangs.find(langObj => currentLang === langObj.lang);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const listRef = useRef<Array<HTMLElement | null>>([]);

    const { refs, x, y, strategy, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: 'top',
        // keep the tooltip anchored to the button while scrolling or resizing
        whileElementsMounted: autoUpdate,
        middleware: [
            flip(), // fallback to another position if there is no space in the preferred position
            shift(), // shift the tooltip if there is no space in the preferred position
        ],
    });

    const { isMounted, styles: animationStyles } = useTransitionStyles(context, {
        common: ({ side }) => ({
            transformOrigin: {
                top: 'bottom',
                bottom: 'top',
                left: 'right',
                right: 'left',
            }[side],
        }),
        close: {
            transform: 'scale(0.8)',
            opacity: 0,
        },
        duration: 250,
    });

    const hover = useHover(context, {
        handleClose: safePolygon(),
    });
    // We always enable focus interaction too, to make sure the overlay is accessible for not-mouse users
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const roleInteraction = useRole(context, { role: 'listbox' });
    const listNav = useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
    });
    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
        roleInteraction,
        hover,
        focus,
        dismiss,
        listNav,
    ]);

    if (!currentLangObj) {
        return null;
    }

    return (
        <div data-tracking={`${type}_${SWITCH_LANG_KEY}_${currentLang}`} className={classes.root}>
            <button
                className={classes.buttonSelector}
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                <div className={classes.flag}>{currentLangObj.flag}</div>
                <span className="pm">{currentLangObj.label}</span>
                <Down />
            </button>
            <FloatingPortal>
                {isMounted && (
                    <div
                        {...getFloatingProps()}
                        className={classes.dropdown}
                        data-tracking-onhover="true"
                        data-tracking={`${type}_${SWITCH_LANG_OPEN_KEY}`}
                        ref={refs.setFloating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            ...animationStyles,
                        }}
                    >
                        {availableLangs
                            .filter(langObj => langObj.lang !== currentLang) // TODO: show current language selected
                            .map((langObj, index) => (
                                <div
                                    className={classes.buttonList}
                                    data-tracking={`${type}_${SWITCH_LANG_OPTION_KEY}_${langObj.lang}`}
                                    data-tracking-from={currentLangObj.label}
                                    data-tracking-to={langObj.label}
                                    key={langObj.label}
                                    role="option"
                                    ref={node => {
                                        listRef.current[index] = node;
                                    }}
                                    tabIndex={index === activeIndex ? 0 : -1}
                                    {...getItemProps({
                                        onClick() {
                                            onLangChange(langObj.lang);
                                        },
                                        onKeyDown(event) {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                onLangChange(langObj.lang);
                                            }
                                        },
                                    })}
                                >
                                    <span className={classes.flag}>{langObj.flag}</span>
                                    <span className={clsx('pm', classes.text)}>
                                        {langObj.label}
                                    </span>
                                </div>
                            ))}
                    </div>
                )}
            </FloatingPortal>
        </div>
    );
};

/** MOBILE LANGUAGE SWTICH */

export const MobileLanguageSwitch = ({
    availableLangs = exAvailableLangs,
    lang,
    type,
}: LanguageSwitchProps) => {
    const currentLangObj = availableLangs.find(currentLang => lang === currentLang.lang);

    if (!currentLangObj) {
        return null;
    }

    return (
        <label htmlFor="languageSwitch" className={classes.mobileWrapper}>
            <div className={classes.flag}>{currentLangObj.flag}</div>

            <select
                id="languageSwitch"
                name="languageSwitch"
                onChange={event => onLangChange(event.currentTarget.value)}
                aria-label="Switch Language"
                defaultValue={lang}
                className={classes.selection}
            >
                {availableLangs.map(lang => (
                    <option
                        data-tracking={`${type}_${SWITCH_LANG_OPTION_KEY}_${lang.lang}`}
                        key={lang.lang}
                        value={lang.lang}
                    >
                        {lang.label}
                    </option>
                ))}
            </select>
            <Down />
        </label>
    );
};
