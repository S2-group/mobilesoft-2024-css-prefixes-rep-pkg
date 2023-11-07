export const isIE = () =>
    typeof window !== 'undefined' && /MSIE|Trident/.test(window.navigator.userAgent);

export const envIsSSR = () => typeof window === 'undefined';
