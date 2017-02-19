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
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  }
}
