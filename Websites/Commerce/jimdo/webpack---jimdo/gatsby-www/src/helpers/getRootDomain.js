export const getRootDomain = () =>
    location.hostname === 'localhost'
        ? 'localhost'
        : '.' + location.hostname.split('.').slice(1).join('.');
