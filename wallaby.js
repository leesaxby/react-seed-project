module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js?(x)',
            '!src/**/*test.js',
        ],

        tests: [
            'src/**/*test.js',
        ],

        env: {
            type: 'node',
            runner: 'node',
        },

        compilers: {
            '**/*.js?(x)': wallaby.compilers.babel({
                babelrc: true,
                plugins: [['babel-plugin-webpack-alias', {
                    config: `${wallaby.localProjectDir}/webpack/webpack.common.js`,
                }],
                ],
            }),
        },
        testFramework: 'jest',
    };
};
