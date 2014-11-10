var r = '../../../../../'; // root dir
var source = r + 'src/frontend/jquery/**/*.js';

var config = {
  basePath: '',
  frameworks: ['jasmine', 'sinon'],
  files: [
    r + 'vendors/jquery/dist/jquery.min.js',
    source,
    './*-spec.js'
  ],

  preprocessors: {},
  
  reporters: ['dots', 'coverage'],
  coverageReporter: {
    type: 'html',
    dir: r + 'reports/istanbul/frontend/jquery'

  },
  port: 9876,
  colors: true,
  autoWatch: true,
  browsers: ['PhantomJS'],
  singleRun: false,
  plugins: [
    'karma-jasmine',
    'karma-sinon',
    'karma-coverage',
    'karma-phantomjs-launcher'
  ]
};

config.preprocessors[source] = ['coverage'];

module.exports = function(co) {
  config.logLevel = co.LOG_INFO;
  co.set(config);
};
