const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: "./dist",
    port: 4200,
    overlay: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [     
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },       
      {
          test: /\.js$/,
          use: {
              loader: "babel-loader"
          }
      },
      {
        test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
      }
    ],
  }
}