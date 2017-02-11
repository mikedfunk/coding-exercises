const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  filename: 'build.css',
  disable: false,
});

module.exports = {
  entry: './app.js',
  output: {
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'sass-loader' },
      //   ],
      // },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          loader: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallbackLoader: 'style-loader',
        }),
      },
    ],
  },
  plugins: [extractSass],
};
