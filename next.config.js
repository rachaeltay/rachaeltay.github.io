const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/rachaeltay.github.io'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
};
