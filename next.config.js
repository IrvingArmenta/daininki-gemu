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
    return config;
  },
};
