const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'); 

module.exports = {
  entry: './src/hello-world.js',
  output: {
    filename: 'hello-world.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'hello-world.html'),
      filename: 'hello-world.html',
      inlineSource: '.js$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};
