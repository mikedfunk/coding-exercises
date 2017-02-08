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
        loader: 'babel-loader?presets[]=es2015',
      },
    ],
  },
};
