/* global env */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSassLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader!sass-loader',
});
const sassLoader = 'style-loader!css-loader!sass-loader';

module.exports = function exp(env) {
  const isProd = env && env.production;
  let exportme = {
    entry: ['babel-polyfill', './app'],
    output: {
      filename: '[name].js?[hash]',
      path: path.join(__dirname, 'build'),
      publicPath: 'build/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          loader: isProd ? extractSassLoader : sassLoader,
        },
      ],
    },
  };
  if (isProd) {
    exportme.plugins = [new ExtractTextPlugin('[name].css?[hash]')];
  } else {
    exportme.devtool = 'cheap-eval-source-map';
    exportme.module.rules.push({
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    });
  }
  return exportme;
};
