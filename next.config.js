const withPreact = require('next-preact')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

if (process.env.NODE_ENV === 'production') {
  module.exports = withPreact({
    webpack: config => {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/,
            },
          ],
        })
      )
      config.node = {
        fs: 'empty',
      }
      return config
    },
  })
}
