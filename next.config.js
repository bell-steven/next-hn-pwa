const withPreact = require('@zeit/next-preact')

module.exports = withPreact({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    return config
  },
})
