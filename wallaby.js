var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['.js', '.jsx']
    }
  });

  return {
    files: [
      {pattern:'src/**/*.js?(x)', load: false},
      {pattern:'src/**/*test.js', ignore: true}
    ],

    tests: [
      {pattern:'src/**/*test.js', load: false}
    ],

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        "presets": ["es2015", "react"],
        "plugins": ["transform-class-properties", "transform-runtime"]
      })
    },

    postprocessor: webpackPostprocessor,

    setup: function() {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
