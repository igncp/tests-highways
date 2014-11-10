var r = '../../../../../../'; // root dir
var source = r + 'src/frontend/sencha-extjs/data-view/*.js';

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

    source,

    './*-spec.js'
  ],

  proxies: {
    '/simple-app': 'http://localhost:1841/simple/app'
  },

  exclude: [
    r + 'vendors/extjs/examples/**/*.js'
  ],
  preprocessors: {
    '../../../../../src/frontend/sencha-extjs/data-view/*.js': ['coverage']
  },
  reporters: ['dots', 'coverage'],
  coverageReporter: {
    type: 'html',
    dir: r + 'reports/istanbul/frontend/extjs/data-view'

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