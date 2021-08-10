module.exports = {
  publicPath: '/',
  outputDir: '../web',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/weather/': {
        target: 'https://api.asilu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/weather/': ''
        }
      }
    }
  }
}