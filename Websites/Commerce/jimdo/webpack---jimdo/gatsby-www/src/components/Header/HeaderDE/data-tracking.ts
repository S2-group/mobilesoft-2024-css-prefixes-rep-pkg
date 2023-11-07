const dataTrackingIdMap = {
    website: 'topnav_website',
    onlineshop: 'topnav_onlineshop',
    businessTools: 'topnav_business-tools',
    blog: 'topnav_jimdoblog',
    help: 'topnav_help',
    topnav_login: 'topnav_login',
    topnav_signup: 'topnav_signup',
    'topnav_website_create-website': 'topnav_website_create-website',
    topnav_website_pricing: 'topnav_website_pricing',
    topnav_website_inspiration: 'topnav_website_inspiration',
    topnav_website_domain: 'topnav_website_domain',
    'topnav_website_legal-text-generator': 'topnav_website_legal-text-generator',
    'topnav_website_business-listings': 'topnav_website_business-listings',
    'topnav_website_online-bookings': 'topnav_website_online-bookings',
    'topnav_website_social-media': 'topnav_website_social-media',
    'topnav_website_online-portfolio': 'topnav_website_online-portfolio',
    topnav_website_restaurant: 'topnav_website_restaurant',
    topnav_website_coaching: 'topnav_website_coaching',
    topnav_website_music: 'topnav_website_music',
    topnav_website_club: 'topnav_website_club',
    'topnav_website_real-estate': 'topnav_website_real-estate',
    topnav_website_medical: 'topnav_website_medical',
    'topnav_onlineshop_create-onlinestore': 'topnav_onlineshop_create-onlinestore',
    topnav_onlineshop_pricing: 'topnav_onlineshop_pricing',
    topnav_onlineshop_inspiration: 'topnav_onlineshop_inspiration',
    topnav_onlineshop_domain: 'topnav_onlineshop_domain',
    'topnav_onlineshop_legal-text-generator': 'topnav_onlineshop_legal-text-generator',
    'topnav_onlineshop_business-listings': 'topnav_onlineshop_business-listings',
    'topnav_onlineshop_social-media': 'topnav_onlineshop_social-media',
    'topnav_business-tools_logo-creator': 'topnav_business-tools_logo-creator',
    'topnav_business-tools_logo-inspiration': 'topnav_business-tools_logo-inspiration',
    'topnav_business-tools_business-listings': 'topnav_business-tools_business-listings',
    'topnav_business-tools_legal-text-generator': 'topnav_business-tools_legal-text-generator',
    'topnav_business-tools_social-media': 'topnav_business-tools_social-media',
    'topnav_business-tools_qr-code': 'topnav_business-tools_qr-code',
    'topnav_business-tools_firmade': 'topnav_business-tools_firmade',
    'topnav_jimdoblog_website-tips': 'topnav_jimdoblog_website-tips',
    'topnav_jimdoblog_business-tips': 'topnav_jimdoblog_business-tips',
    topnav_jimdoblog_inspiration: 'topnav_jimdoblog_inspiration',
    topnav_jimdoblog_news: 'topnav_jimdoblog_news',
    'topnav_help_help-center': 'topnav_help_help-center',
    'topnav_help_contact-support': 'topnav_help_contact-support',
    topnav_help_support: 'topnav_help_support',
    topnav_jimdoblog_main: 'topnav_jimdoblog_main',
};

export type DataTrackingId = keyof typeof dataTrackingIdMap;

export const getDataTrackingId = (id: DataTrackingId) => {
    const trackingId = dataTrackingIdMap[id];
    if (!trackingId) {
        throw Error(`Invalid data-tracking: ${id}`);
    }
    return trackingId;
};
