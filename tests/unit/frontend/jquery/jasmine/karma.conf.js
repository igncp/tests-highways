var r = '../../../../../'; // root dir

var config = {
  basePath: '',
  frameworks: ['jasmine', 'sinon'],
  files: [
    r + 'vendors/jquery/dist/jquery.min.js',
    r + 'src/frontend/jquery/**/*.js',
    './*-spec.js'
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
    'karma-jasmine',
    'karma-sinon',
    'karma-coverage',
    'karma-phantomjs-launcher'
  ]
};

config.preprocessors[r + 'src/frontend/jquery/**/*.js'] = ['coverage'];

module.exports = function(co) {
  config.logLevel = co.LOG_INFO;
  co.set(config);
};
