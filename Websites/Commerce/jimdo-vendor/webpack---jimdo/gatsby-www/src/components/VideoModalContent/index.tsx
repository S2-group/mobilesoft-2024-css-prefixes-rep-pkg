import React from 'react';

import CloseIcon from '../../images/icons/plusIcon.svg';

import * as classes from './index.module.scss';

type VideoModalContentProps = {
    onCloseClick: React.MouseEventHandler;
    video: {
        url: string;
        title?: string;
    };
};

export const VideoModalContent = ({
    onCloseClick,
    video: { url, title },
}: VideoModalContentProps) => {
    return (
        <div className={classes.modal}>
            <div className={classes.background} onClick={onCloseClick} />
            <div className={classes.modalContent}>
                <a className={classes.close}>
                    <CloseIcon onClick={onCloseClick} />
                </a>
                <video className={classes.video} controls={true} autoPlay>
                    <source src={url} type="video/mp4" title={title} />
                </video>
            </div>
        </div>
    );
};
