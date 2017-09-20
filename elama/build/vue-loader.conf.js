var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
/*
  loaders: [
      {
        test: /\.css$/,
        // 使用提取css文件的插件，能帮我们提取webpack中引用的和vue组件中使用的样式
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        // vue-loader，加载vue组件
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // 使用es6开发，这个加载器帮我们处理
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // 图片加载器，较小的图片转成base64
        loader: 'url',
        query: {
          limit: 10000,
          name: './imgs/[name].[ext]?[hash:7]'
        }
      }
    ]*/
}
