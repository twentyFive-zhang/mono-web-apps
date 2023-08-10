/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn', 'en', 'de', 'test'],
    trailingSlash: true,
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV == "development"
}