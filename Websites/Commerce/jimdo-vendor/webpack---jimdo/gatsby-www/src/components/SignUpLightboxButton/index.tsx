import React, { useEffect, useState } from 'react';

import { Modal } from '@jimdo/ui';

import { Langs } from 'types/langs';

import { track } from 'helpers/track';

import { Button, ButtonColor } from '../Button';
import { SignupLightboxModal } from '../SignupLightboxModal';

import * as classes from './index.module.scss';

type SignUpLightboxButtonProps = {
    children: React.ReactNode;
    className?: string;
    lang: Langs;
    trackLabel?: string;
    fullwidth?: boolean;
    buttonColor?: ButtonColor;
    center?: boolean;
    subtitle?: string;
};

export const SignUpLightboxButton = ({
    children,
    className,
    lang,
    trackLabel,
    fullwidth,
    buttonColor,
    center,
    subtitle,
}: SignUpLightboxButtonProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (modalIsOpen) {
            track({
                eventAction: 'open',
                eventLabel: 'signupOverlay',
                payload: {
                    trackLabel,
                },
            });
        }
    }, [modalIsOpen, trackLabel]);

    return (
        <>
            <Button
                data-tracking={trackLabel}
                className={className}
                fullwidth={fullwidth}
                onClick={() => {
                    setModalIsOpen(true);
                }}
                color={buttonColor}
                center={center}
                subtitle={subtitle}
            >
                {children}
            </Button>
            {modalIsOpen && (
                <Modal
                    onCloseClick={() => setModalIsOpen(false)}
                    closeable={false}
                    modalSize="large"
                    className={classes.modalContainer}
                    isOpen={modalIsOpen}
                >
                    <SignupLightboxModal lang={lang} onCloseHandler={() => setModalIsOpen(false)} />
                </Modal>
            )}
        </>
    );
};
