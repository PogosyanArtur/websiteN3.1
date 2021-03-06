const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName:'[folder]__[local]--[hash:base64:5]'
  }
})
