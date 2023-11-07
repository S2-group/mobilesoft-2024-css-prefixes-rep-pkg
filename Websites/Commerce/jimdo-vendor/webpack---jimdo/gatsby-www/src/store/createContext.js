import { createContext } from 'react';

const AppContext = createContext();
const { Provider, Consumer } = AppContext;

export { Provider, Consumer, AppContext };
