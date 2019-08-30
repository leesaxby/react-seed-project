const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: [
        '@babel/polyfill',
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
            }),
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        // More optimisations can be found here: https://github.com/tcoopman/image-webpack-loader#usage.
                        webp: {
                            quality: 75,
                        },
                    },
                },
            ],
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        new ExtractTextPlugin('theme.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
    ],
    resolve: {
        alias: {
            Images: path.resolve(__dirname, '../src/images/'),
            Modules: path.resolve(__dirname, '../src/modules/'),
            Test: path.resolve(__dirname, '../test/'),
        },
    },
};
