module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js?(x)',
            'test/**/*.js',
            'i18n/**/*.js',
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
            '**/*.js?(x)': wallaby.compilers.babel(),
        },

        testFramework: 'jest',
    };
};
