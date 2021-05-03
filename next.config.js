const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], {
  basePath: '/nevzatgunay.github.io',
  assetPrefix: '/nevzatgunay.github.io',
});
