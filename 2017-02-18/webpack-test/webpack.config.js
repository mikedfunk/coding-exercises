const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const isProd = process.argv.indexOf('-p') !== -1

const sassLoaders = [
  { loader: 'style-loader', options: { sourceMap: true } },
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'sass-loader', options: { sourceMap: true } }
]
const sassFileLoader = ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader?sourceMap',
  use: 'css-loader?sourceMap!sass-loader?sourceMap'
})
let exportme = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './app'],
  output: {
    filename: '[name].js?[hash]',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: isProd ? sassFileLoader : sassLoaders
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  }
}
if (isProd) {
  exportme.plugins = [new ExtractTextWebpackPlugin('[name].css?[hash]')]
}
module.exports = exportme
