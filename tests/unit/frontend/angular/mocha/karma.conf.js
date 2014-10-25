var r = '../../../../../'; // root dir

var config = {
  basePath: '',
  frameworks: ['mocha', 'chai'],
  files: [
    r + 'vendors/angular/angular.min.js',
    r + 'src/frontend/angular/**/*.js',
    './*-spec.js'
  ],

  exclude: [
    r + 'src/frontend/angular/**/vendors/**/*.js'
  ],

  preprocessors: {},

  reporters: ['dots', 'coverage'],
  coverageReporter: {
    type: 'html',
    dir: r + 'karma-coverage'

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

config.preprocessors[r + 'src/frontend/jquery/**/*.js'] = ['coverage'];

module.exports = function(co) {
  config.logLevel = co.LOG_INFO;
  co.set(config);
};
