const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /node_modules/,
            options: {
                failOnWarning: false,
                failOnError: true
            }
        }]
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            },
            mangle: false,
            compress: true,
            comments: false
        })
    ]
});