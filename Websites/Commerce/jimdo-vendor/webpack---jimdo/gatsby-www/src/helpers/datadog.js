import { initLogger, initRum } from '@jimdo/monitoring';

const DATADOG_SERVICE = 'mato-jimdo-com-app';
const DATADOG_CLIENT_TOKEN = 'pub3ebbe5792536cf12064cdafa0a12c010';
const DATADOG_RUM_CLIENT_TOKEN = 'pubafbf8b5cb7a08e944c0b2088e0434b0e';
const DATADOG_RUM_APPLICATION_ID = '7ee59a1c-5736-407d-9fe0-16184fc10bcd';

export const initDatadog = ENV => {
    initLogger({
        clientToken: DATADOG_CLIENT_TOKEN,
        service: DATADOG_SERVICE,
        env: ENV,
        sampleRate: 75,
    });

    initRum({
        applicationId: DATADOG_RUM_APPLICATION_ID,
        clientToken: DATADOG_RUM_CLIENT_TOKEN,
        service: DATADOG_SERVICE,
        env: ENV,
        version: '4.7.0',
    });
};
