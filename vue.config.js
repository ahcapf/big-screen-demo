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
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       css: {},
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: 80
  //         })
  //       ]
  //     }
  //   }
  // }
}