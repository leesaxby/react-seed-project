const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const prod = require('./webpack.prod.js');

// NOTE: This Node env tells babel which plugins to use
// This will gen all the messages that need to be translated
process.env.NODE_ENV = 'gen-translations';

module.exports = merge(prod, {
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [],
        }),
    ],
});
