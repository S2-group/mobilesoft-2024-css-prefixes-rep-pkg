const nonLatinLocales = [
  'am',
  'ar',
  'as',
  'be',
  'bg',
  'bn',
  'bo',
  'ce',
  'ckb',
  'cu',
  'dz',
  'el',
  'fa',
  'gu',
  'he',
  'hi',
  'hy',
  'ii',
  'ja',
  'ka',
  'kk',
  'km',
  'kn',
  'ko',
  'ks',
  'ky',
  'lo',
  'mk',
  'ml',
  'mn',
  'mr',
  'my',
  'ne',
  'or',
  'os',
  'pa',
  'ps',
  'ru',
  'sd',
  'si',
  'sr',
  'ta',
  'te',
  'tg',
  'th',
  'ti',
  'tt',
  'ug',
  'uk',
  'ur',
  'yi',
  'zh',
];

const isLatinLocale = () => {
  const currentLocale = window?.analytics?.config?.Trekkie?.defaultAttributes?.locale?.substring(0, 2);
  return currentLocale && !nonLatinLocales.includes(currentLocale);
};

export {nonLatinLocales, isLatinLocale};