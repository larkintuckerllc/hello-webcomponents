const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

module.exports = env => {
  return ({
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
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
      }),
      new ExtractTextPlugin("styles.css"),
      new StyleExtHtmlWebpackPlugin(),
    ],
  });
};
