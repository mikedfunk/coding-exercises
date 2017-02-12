
'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
      {
        test: /\.scss$/,
        // loader: 'style-loader!css-loader!sass-loader',
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('[name].css')],
};
