module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../../../../../node_modules/lodash/lodash.js', // as utility
      '../../../../../src/frontend/plain-js/**/*.js',
      './**/*-spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]
  });
};
