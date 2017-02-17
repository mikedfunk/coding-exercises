const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const extractSassLoader = ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!sass-loader'
})
const sassLoader = 'style-loader!css-loader!sass-loader'
const isProd = process.argv.indexOf('-p') !== -1

let exportme = {
  entry: './app',
  output: {
    filename: '[name].js?[hash]',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.js*/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss*/,
        exclude: /node_modules/,
        loader: isProd ? extractSassLoader : sassLoader
      }
    ]
  }
}
if (isProd) {
  exportme.plugins = [new ExtractTextWebpackPlugin('[name].css?[hash]')]
}
module.exports = exportme
