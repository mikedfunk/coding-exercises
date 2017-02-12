const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/main'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
            'react',
          ],
        },
      },
    ],
  },
};
