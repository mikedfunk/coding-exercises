const path = require('path')

module.exports = {
  entry: './app',
  output: {
    filename: '[name].js?[hash]',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  }
}
