import React from 'react';

import clsx from 'clsx';

import { isTranslation } from 'helpers/InjectPhraseApp';

import * as classes from './index.module.scss';

type MetaDataCompProps = {
    data: {
        description?: string;
        title?: string;
    };
};

const renderMetaData = () =>
    isTranslation ||
    (typeof window !== 'undefined' && location.search.indexOf('render_meta_data=true') > 0);

export const MetaDataComp = ({ data: { description, title } }: MetaDataCompProps) => {
    // for testing this component add '/?render_meta_data=true' to the url
    return renderMetaData() ? (
        <div className={clsx('mni', classes.root)}>
            <p className="hs">
                Meta data is only available in the translation environment. It must not be visible
                in the productive page.
            </p>
            <p className={clsx('pm', classes.title)}>Meta Title:</p>
            <p className="ps">{title}</p>
            <p className={clsx('pm', classes.title)}>Meta Description:</p>
            <p className="ps">{description}</p>
        </div>
    ) : null;
};
