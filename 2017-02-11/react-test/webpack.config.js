const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/main'),
  output: {
    filename: '[name].js?[hash]',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            ['es2015', { modules: false }],
          ],
        },
      },
    ],
  },
};
