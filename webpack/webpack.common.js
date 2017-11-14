const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
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
    })
  ]
};