const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Workaround babel-hot-loader not using production mode
process.env.NODE_ENV = 'production';

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /node_modules/,
            options: {
                failOnWarning: false,
                failOnError: true,
            },
        }],
    },
    plugins: [
        // Prevents vendor file being re-hashed when new "user" module is added.
        new webpack.HashedModuleIdsPlugin(),
    ],
});
