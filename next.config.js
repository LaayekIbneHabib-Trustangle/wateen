// next.config.js
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = withCSS(withPurgeCss({
    purgeCssPaths: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  }));

module.exports = withCss(withPurgeCss());

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }));
    }

    return config;
  },
};