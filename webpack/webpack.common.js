const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
      main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
      },{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader'
        })
      }]
  },
  plugins: [
      new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
      new ExtractTextPlugin('theme.css'),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor.js',
        // Only include modules in vendor which are being imported i.e import { keys } from 'lodash/keys'.
        // Here we will only include the keys method and not the entire lodash lib.
        minChunks: module => /node_modules/.test(module.resource)
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime'
      })
  ]
};