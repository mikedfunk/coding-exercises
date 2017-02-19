const path = require('path')
module.exports = {
  entry: './app',
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
      }
    ]
  }
}
