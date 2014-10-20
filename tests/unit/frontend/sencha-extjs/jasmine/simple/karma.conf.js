var r = '../../../../../../'; // root dir

var config = {
  basePath: '',
  frameworks: ['jasmine', 'sinon'],
  files: [
    r + 'node_modules/lodash/lodash.js', // as utility

    r + 'vendors/extjs/ext-all.js',

    {
      pattern: r + 'vendors/extjs/**/*.js',
      watched: false,
      included: false,
      served: true
    },

    r + 'src/frontend/sencha-extjs/simple/app.js',

    './*-spec.js'
  ],

  proxies: {
    '/simple-app': 'http://localhost:1841/simple/app'
  },
  preprocessors: {

  },
  exclude: [
    r + 'vendors/extjs/examples/**/*.js'
  ],
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

config.preprocessors[r + 'src/frontend/sencha-extjs/**/*.js'] = ['coverage'];

module.exports = function(co) {
  config.logLevel = co.LOG_INFO;
  co.set(config);
};