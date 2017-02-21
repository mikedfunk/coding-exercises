const path = require('path')
module.exports = {
  entry: './app.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
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
