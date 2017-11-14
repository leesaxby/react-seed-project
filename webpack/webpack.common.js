const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
      }]
  },
  plugins: [
      new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
    })
  ]
};