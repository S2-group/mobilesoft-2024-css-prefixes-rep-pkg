import React from 'react';

import * as classes from './index.module.scss';

type DropdownMenuItemProps = {
    data: { path: string; title: string; desc: string };
    trackingId: string;
    openInNewTab?: boolean;
};

export const DropdownMenuItem = ({ data, trackingId, openInNewTab }: DropdownMenuItemProps) => (
    <a
        className={classes.link}
        href={data.path}
        data-tracking={trackingId}
        data-tracking-item={data.title}
        {...(openInNewTab && { target: '_blank', rel: 'noopener' })}
    >
        <p className="pm">
            <b>{data.title}</b>
        </p>
        <p className="pxs">{data.desc}</p>
    </a>
);
