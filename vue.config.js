const { GenerateSW } = require('workbox-webpack-plugin')
const fs = require('fs')

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/vuejs-pwa/' : '',
  configureWebpack: {
    plugins: [new GenerateSW()]
  },
  devServer: {
    https: {
      key: fs.readFileSync('./certs/key.pem'),
      cert: fs.readFileSync('./certs/cert.pem')
    },
    public: 'https://192.168.99.1:8080'
  }
}
