// TODO: this is being used as a Block in homepage! To be refactored into a hook.
export const ReplaceLinks = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    if (location.search.indexOf('jimdo_wizard=true') > 0) {
        setTimeout(() => {
            document.querySelectorAll('a').forEach(link => {
                if (!link.href) {
                    return;
                }

                if (!link.href.startsWith('https://register.jimdo.com/')) {
                    return;
                }

                link.href = link.href.includes('store=1')
                    ? 'https://cms.jimdo.com/wizard/?store=1'
                    : 'https://cms.jimdo.com/wizard/';
            });
        }, 100);
    }
    return null;
};

ReplaceLinks.displayName = 'ReplaceLinks';
