const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack(config) {
    config.plugins.push(new Dotenv({ silent: true }));

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  env: {
    HOST: process.env.CLIENT_HOST,
    PORT: process.env.SERVER_PORT,
  },
}
