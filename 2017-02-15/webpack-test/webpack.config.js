// !!!!!!!!
// NOTE: I had to `yarn add svgo` for extract to work. Not sure why.
// !!!!!!!!
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSassLoader = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: "css-loader!sass-loader"
});
const sassLoader = "style-loader!css-loader!sass-loader";

const isProd = process.argv.indexOf("-p") !== -1;
let exportme = {
  entry: ["babel-polyfill", "./app"],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build"),
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: isProd ? extractSassLoader : sassLoader,
      }
    ]
  },
};
if (isProd) {
  exportme.plugins = [new ExtractTextPlugin("[name].css?[hash]")];
} else {
  exportme.module.rules.push({
    test: /\.js$/,
    loader: "eslint-loader",
    exclude: /node_modules/,
    enforce: "pre"
  });
}

module.exports = exportme;
