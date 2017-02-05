const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'build.js',
  },
};
