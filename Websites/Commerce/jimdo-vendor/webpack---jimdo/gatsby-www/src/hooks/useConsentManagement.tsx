import React from 'react';

import { useGetExperimentGroupById } from '@jimdo/growth-tools';

import ConsentManagement from '@components/ConsentManagement';

type UseConsentManagementReturn =
    | [null, null]
    | [typeof ConsentManagement, React.ComponentProps<typeof ConsentManagement>];

export const useConsentManagement: () => UseConsentManagementReturn = () => {
    const consentVariation = useGetExperimentGroupById('experiment-MATO1839-consent-management');

    if (consentVariation === undefined) {
        return [null, null];
    }

    const shouldLoadConsentManagement =
        consentVariation === 'target' || consentVariation === 'excluded';

    if (shouldLoadConsentManagement) {
        const consentManagementProps = {
            googleTagManagerId: 'GTM-MTHKCKN',
            userCentricsId: 'k1JwB2Dk_',
            suppressConsentBanner: consentVariation === 'excluded',
            forceAcceptAllConsent: consentVariation === 'excluded',
        };

        return [ConsentManagement, consentManagementProps];
    }

    return [null, null];
};

export default useConsentManagement;
