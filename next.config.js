const withPreact = require('next-preact')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

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
} else if (process.env.NODE_ENV === 'analyze') {
  module.exports = {
    webpack: function(config, { isServer }) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      )
      return config
    },
  }
}
