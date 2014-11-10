var r = '../../../../../';
var source = r + 'src/frontend/plain-js/**/*.js';

var config = {
  basePath: '',
  frameworks: ['jasmine'],
  files: [
    r + 'node_modules/lodash/lodash.js', // as utility
    r + 'vendors/q/q.js', // used
    source,
    './**/*-spec.js'
  ],
  exclude: [],
  preprocessors: {},
  reporters: ['dots', 'coverage'],
  coverageReporter: {
    type: 'html',
    dir: r + 'reports/istanbul/frontend/plain-js/jasmine'
  },
  port: 9876,
  colors: true,
  autoWatch: true,
  browsers: ['PhantomJS'],
  singleRun: false,
  plugins: [
    'karma-jasmine',
    'karma-phantomjs-launcher',
    'karma-coverage'
  ]
};

config.preprocessors[source] = ['coverage'];

module.exports = function(co) {
  config.logLevel = co.LOG_INFO;
  co.set(config);
};