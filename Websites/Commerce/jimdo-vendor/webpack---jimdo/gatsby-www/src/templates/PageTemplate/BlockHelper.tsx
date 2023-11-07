import React, { JSXElementConstructor } from 'react';

import { Langs } from '@shared-types/langs';

import { LangGuardElm, isLangGuard } from './LangGuard';

export type Block = BlockElm | LangGuardElm | null;

type BlockProps = {
    id: string;
    data: Record<string, unknown>;
    children?: Block | Block[];
};

type BlockConstructor = JSXElementConstructor<BlockProps> & {
    displayName: string;
};

export type BlockElm = React.ReactElement<BlockProps, BlockConstructor>;

export const getBlock = (
    block: Block,
    lang: Langs,
    getTranslations: (blockName: string, blockId: string) => { [key: string]: string }
) => {
    if (!block) return null;
    validateBlock(block);

    const { displayName, name } = block.type;

    if (isLangGuard(block)) {
        const { children, forLangs } = block.props;
        const childs = React.Children.map(children, child => {
            if (!forLangs.includes(lang)) return null;
            return getBlock(child, lang, getTranslations);
        });
        return <React.Fragment>{childs}</React.Fragment>;
    }

    if (!displayName) {
        throw `"${name}" has no displayName`;
    }

    const { id, data } = block.props;

    const translations = getTranslations(displayName, id);

    return React.cloneElement(block, { data: { ...translations, ...data } });
};

export function validateBlock(block: Block) {
    if (typeof block === 'string') throw `Can't use string "${block}" as a block`;
    if (typeof block?.type === 'string') throw `Can't use "${block.type}" as a block`;
}
