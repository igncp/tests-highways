var r = '../../../../../';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      r + 'node_modules/lodash/lodash.js', // as utility
      r + 'vendors/q/q.js', // used
      r + 'src/frontend/plain-js/**/*.js',
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
