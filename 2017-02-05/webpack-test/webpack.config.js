const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
