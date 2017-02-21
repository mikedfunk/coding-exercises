// @flow
const path = require('path')
module.exports = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' }
    ]
  }
}
