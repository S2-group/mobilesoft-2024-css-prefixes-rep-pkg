import React from 'react';

import clsx from 'clsx';

import * as classes from './index.module.scss';

type AnimateVideoProps = {
    animation: string;
    animationTitle?: string;
    lazy?: boolean;
};

export const AnimateVideo = ({ animation, animationTitle, lazy = true }: AnimateVideoProps) => {
    const video = React.useRef<HTMLVideoElement | null>(null);

    React.useEffect(() => {
        if (!lazy) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const videoElement = entry.target as HTMLVideoElement;

                const source = videoElement.firstChild as HTMLSourceElement | null;

                if (!source || !source.dataset.src) {
                    return;
                }

                source.src = source.dataset.src;
                videoElement.oncanplay = () => {
                    videoElement.classList.add(classes.appear);
                };

                videoElement.load();
                observer.unobserve(videoElement);
            },
            { rootMargin: '150px' }
        );

        if (video.current) {
            observer.observe(video.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [lazy]);

    const src = `/assets/animations/${animation}.mp4`;

    return (
        <video
            className={clsx(classes.root, lazy && classes.lazy)}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            ref={video}
        >
            <source
                type="video/mp4"
                title={animationTitle}
                {...(lazy ? { 'data-src': src } : { src })}
            />
        </video>
    );
};
