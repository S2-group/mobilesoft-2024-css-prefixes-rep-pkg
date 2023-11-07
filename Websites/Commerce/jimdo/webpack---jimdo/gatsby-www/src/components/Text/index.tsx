import React from 'react';

import clsx from 'clsx';

import { TextTags } from 'types/textTags';

import * as cls from './index.module.scss';

export type TextCompProps = {
    value: string;
    className?: string;
    tag?: TextTags;
    classes?: Partial<{
        root: string;
        em: string;
        bold: string;
    }>;
};

/**
 * these string templates, when encountered in text, will be replaced by a proper symbol
 * TODO: implement a cleaner Regex based solution
 */
const templates = {
    '&ast;': '*',
    '&num;': '#',
};

function resolveTemplates(text: string) {
    return text.replaceAll(/(&ast;|&num;)/gi, value => templates[value as keyof typeof templates]);
}

const TextComp = ({ value, className = 'pm', tag, classes }: TextCompProps) => {
    const Tag = tag ?? 'p';
    const lines = value.split(/\n/);
    const elms = lines.map((line, index) => {
        const words = line
            .trim()
            .split(/(\*[^*]*\*|#[^*]*#)/)
            .filter(Boolean);

        const nodesElm = words.map(word => {
            const highlight = /(\*[^*]*\*)/.test(word);
            const bold = /(#.*#)/.test(word);
            const nodeText = highlight || bold ? resolveTemplates(word.slice(1, -1)) : word;

            if (highlight) {
                return (
                    <em key={index} className={clsx(cls.em, className, classes?.em)}>
                        {nodeText}
                    </em>
                );
            } else if (bold) {
                return (
                    <b key={index} className={clsx(cls.bold, className, classes?.bold)}>
                        {nodeText}
                    </b>
                );
            } else {
                return nodeText;
            }
        });

        const isLastLine = lines.length - 1 === index;
        return (
            <React.Fragment key={`${line}_${index}`}>
                {nodesElm}
                {!isLastLine && <br />}
            </React.Fragment>
        );
    });
    return <Tag className={clsx(className, classes?.root)}>{elms}</Tag>;
};

// TODO: debug to see if memo is needed here
export const Text = React.memo(TextComp);
