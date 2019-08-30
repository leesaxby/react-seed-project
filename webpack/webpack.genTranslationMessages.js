const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

// NOTE: This Node env tells babel which plugins to use
// This will gen all the messages that need to be translated
process.env.NODE_ENV = 'gen-translations';

module.exports = merge(common, {
    output: {
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [],
        }),
    ],
});
