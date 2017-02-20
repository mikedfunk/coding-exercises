const path = require('path')
module.exports = {
  entry: './app',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
