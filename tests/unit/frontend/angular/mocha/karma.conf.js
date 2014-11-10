var r = '../../../../../'; // root dir
var source = r + 'src/frontend/angular/**/*.js';

var config = {
  basePath: '',
  frameworks: ['mocha', 'chai'],
  files: [
    r + 'vendors/angular/angular.min.js',
    r + 'vendors/angular-mocks/angular-mocks.js',
    source,
    './*-spec.js'
  ],

  exclude: [
    r + 'src/frontend/angular/**/vendors/**/*.js'
  ],

  preprocessors: {},

  reporters: ['dots', 'coverage'],
  coverageReporter: {
    type: 'html',
    dir: r + 'reports/istanbul/frontend/angular'
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
