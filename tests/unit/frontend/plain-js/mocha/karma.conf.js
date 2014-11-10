var r = '../../../../../'; // root dir
var source = r + 'src/frontend/plain-js/algorithms/**/*.js';

var config = {
  basePath: '',
  frameworks: ['mocha', 'chai'],
  files: [
    source,
    './*-spec.js'
  ],

  exclude: [
  ],

  preprocessors: {},

  reporters: ['dots', 'coverage'],
  coverageReporter: {
    type: 'html',
    dir: r + 'reports/istanbul/frontend/plain-js/mocha'
  },
  port: 9876,
  colors: true,
  autoWatch: true,
  browsers: ['PhantomJS'],
  singleRun: false,
  plugins: [
    'karma-mocha',
    'karma-chai',
    'karma-coverage',
    'karma-phantomjs-launcher'
  ]
};

config.preprocessors[source] = ['coverage'];

module.exports = function(co) {
  config.logLevel = co.LOG_INFO;
  co.set(config);
};