const ShortCodeLang = {
    'en-US': '',
    'de-DE': 'de/',
    'nl-NL': 'nl/',
    'fr-FR': 'fr/',
    'it-IT': 'it/',
    'es-ES': 'es/',
    'ja-JP': 'jp/',
};

// TODO: refactor generateHowToImageJSONLD and generateHowToJSONLD into one function
export const generateHowToImageJSONLD = (title, text, imageUrl, bulletPoints) => {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',

            name: title,
            description: text,
            step: bulletPoints.map(point => {
                return {
                    '@type': 'HowToStep',
                    text: point,
                };
            }),
            ...(!!imageUrl && {
                image: {
                    '@type': 'ImageObject',
                    url: `https://www.jimdo.com${imageUrl}`,
                },
            }),
        },
    ];
};

export const generateHowToVideoJSONLD = (
    title,
    text,
    bulletPoints,
    videoFileName,
    videoDescription,
    videoDuration,
    videoDate,
    videoImage
) => {
    const video = generateVideoJSONLD(
        videoFileName,
        videoDescription,
        videoDuration,
        videoDate,
        videoImage
    );
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            video,
            name: title,
            description: text,
            step: bulletPoints.map(point => {
                return {
                    '@type': 'HowToStep',
                    text: point,
                };
            }),
        },
    ];
};

export const generateHowToJSONLD = (title, text, items) => {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: title,
            description: text,
            step: items.map(item => {
                return {
                    '@type': 'HowToStep',
                    text: item,
                };
            }),
        },
    ];
};

export const generateFaqJSONLD = questions => [
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map(question => {
            const link =
                question.linkHref && question.linkText
                    ? ` <a href='${
                          question.linkHref.startsWith('http')
                              ? question.linkHref
                              : `https://www.jimdo.com${question.linkHref}`
                      }'>${question.linkText}</a>`
                    : '';
            return {
                '@type': 'Question',
                name: question.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `${question.a}${link}`,
                },
            };
        }),
    },
];

export const generateVideoJSONLD = (
    videoFileName,
    videoDescription,
    videoDuration,
    videoDate,
    videoImage
) => {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: videoFileName,
            description: videoDescription,
            duration: videoDuration,
            contentUrl: `/assets/animations/${videoFileName}.mp4`,
            encodingFormat: 'video/mp4',
            uploadDate: videoDate,
            thumbnailUrl: videoImage,
        },
    ];
};

export const generateBreadCrumbJSONLD = (href, name) => {
    const jsonLD = [
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: {
                        '@id': `https://www.jimdo.com/${ShortCodeLang[href.lang]}`,
                    },
                },
                name !== 'homepage' && {
                    '@type': 'ListItem',
                    position: 2,
                    name: name,
                    item: {
                        '@id': `https://www.jimdo.com${href.href}`,
                    },
                },
            ],
        },
    ];

    if (name === 'homepage') {
        // Remove the second position which will false
        jsonLD[0].itemListElement.pop();
        return jsonLD;
    } else {
        return jsonLD;
    }
};

export const generateBoxListJSONLD = (title, boxes) => [
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        step: boxes.map(({ position, title, text, imagePath, imageAlt }) => {
            let result = {
                '@type': 'HowToStep',
                position: position,
            };
            if (title) {
                result = { ...result, name: title };
            }
            if (text) {
                result = { ...result, text };
            }
            if (imagePath) {
                result = {
                    ...result,
                    image: {
                        '@type': 'ImageObject',
                        url: `https://www.jimdo.com${imagePath}`,
                        description: imageAlt,
                    },
                };
            }
            return result;
        }),
    },
];
