import React, { JSXElementConstructor, isValidElement } from 'react';

import { Langs } from '@shared-types/langs';

import { BlockElm, validateBlock } from './BlockHelper';

type Lang = `${Langs}`;

type LangGuardProps = { children: BlockElm | BlockElm[]; forLangs: Lang[] };

type LangGuardConstructor = JSXElementConstructor<LangGuardProps> & {
    displayName: string;
};

export type LangGuardElm = React.ReactElement<LangGuardProps, LangGuardConstructor>;

export const LangGuard = ({ children }: LangGuardProps) => {
    return isValidElement(children) ? children : null;
};

LangGuard.displayName = 'LangGuard';

export function isLangGuard(block: BlockElm | LangGuardElm): block is LangGuardElm {
    validateBlock(block);
    return block.type.displayName === 'LangGuard';
}
