//@ts-check
console.log(process.env.NODE_ENV)
process.env.NEXT_TRANSLATE_PATH = '../../';

const { i18n } = require('./next-i18next.config')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

// This plugin is needed until this PR is merged.
// https://github.com/vercel/next.js/pull/23185
const { withLess } = require('@nx/next/plugins/with-less');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    // appDir: true,
  },
  reactStrictMode: true,

};

// const nextTranslate = require('next-translate-plugin')

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withLess,
  withNx,
  // nextTranslate,

];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = composePlugins(...plugins)(nextConfig);
