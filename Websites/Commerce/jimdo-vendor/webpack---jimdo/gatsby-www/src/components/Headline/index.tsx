import React from 'react';

import { Text, TextCompProps } from '../Text';

type HeadlineCompProps = TextCompProps;

const HeadlineComp = ({ value, className = 'hl', tag = 'h3', classes }: HeadlineCompProps) => {
    return <Text value={value} className={className} tag={tag} classes={classes} />;
};

// TODO: debug to see if memo is needed here
export const Headline = React.memo(HeadlineComp);
