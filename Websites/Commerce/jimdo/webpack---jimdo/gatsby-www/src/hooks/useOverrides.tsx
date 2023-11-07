import { createContext, useContext } from 'react';

import type SiteConfig from '../../site-config.js';

type Metadata = typeof SiteConfig;

export type MetadataContextFunc = (metadata: Metadata) => Metadata;

const Context = createContext<MetadataContextFunc | undefined>(metadata => metadata);

export const MetadataOverridesProvider = Context.Provider;

export const useMetadataOverrides = () => useContext(Context);
