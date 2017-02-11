module.exports = {
  entry: './app.js',
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
    ],
  },
  output: {
    filename: 'build.js',
  },
};
