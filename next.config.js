module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [options.defaultLoaders.babel, {
        loader: '@svgr/webpack',
        options: {
          titleProp: true
        }
      }, 'file-loader']
    });
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });
    return config;
  },
};
