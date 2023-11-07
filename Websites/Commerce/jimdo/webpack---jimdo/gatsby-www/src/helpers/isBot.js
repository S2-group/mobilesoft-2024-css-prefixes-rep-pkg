const isBot = userAgent => {
    return /(ads|google|bing|msn|yandex|sogou|baidu).*(bot|spider)/i.test(userAgent);
};

export default isBot;
