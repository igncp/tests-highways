var r = '../../../../../'; // root dir

module.exports = function(config) {
  config.set({
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

      {
        pattern: r + 'src/frontend/sencha-extjs/simple/**/*.js',
        watched: true,
        included: false,
        served: true
      },

      r + 'src/frontend/sencha-extjs/**/app.js',

      './**/*-spec.js'
    ],
    
    proxies: {
      '/simple-app': 'http://localhost:1841/simple/app'
    },

    exclude: [
      r + 'vendors/extjs/examples/**/*.js'
    ],
    preprocessors: {
      '../../../../../src/frontend/sencha-extjs/**/*.js': ['coverage']
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: r + 'karma-coverage'

    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    plugins: [
      'karma-jasmine',
      'karma-sinon',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ]
  });
};
