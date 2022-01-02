const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/rachaeltay.github.io'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};
