import { automaticLanguageSwitch } from '../../helpers/langSwitch';

// TODO: refactor into a hook
export const AutoLangSwitch = () => {
    // TODO: Instead of redirecting automtically offer a modal
    automaticLanguageSwitch();

    return null;
};

AutoLangSwitch.displayName = 'AutoLangSwitch';
