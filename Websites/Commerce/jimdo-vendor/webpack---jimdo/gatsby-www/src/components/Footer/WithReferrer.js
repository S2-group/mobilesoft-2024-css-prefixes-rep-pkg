import React, { useEffect, useState } from 'react';

export const WithReferrer = ({ enabled, ...otherProps }) =>
    enabled ? <WithReferrerView {...otherProps} /> : <WithInitialHref {...otherProps} />;

const WithInitialHref = ({ children, href }) => children({ href });

const WithReferrerView = ({ children, href: initialHref }) => {
    const [href, setHref] = useState(initialHref);

    useEffect(() => {
        setHref(`${initialHref}?referrer=${encodeURIComponent(location.href)}`);
    }, [initialHref]);

    return children({ href });
};
