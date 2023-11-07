import React from 'react';

import 'whatwg-fetch';

import { InjectPhraseApp } from './src/helpers/InjectPhraseApp';
import AppProvider from './src/store/provider';

InjectPhraseApp();

export const wrapRootElement = ({ element }) => {
    // React Context in Browser

    return <AppProvider>{element}</AppProvider>;
};
