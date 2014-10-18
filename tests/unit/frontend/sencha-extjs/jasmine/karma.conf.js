module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../../../../../node_modules/lodash/lodash.js', // as utility

      '../../../../../vendors/extjs/ext-all.js',
      {pattern: '../../../../../vendors/extjs/**/*.js', watched: false, included: false, served: true},

      '../../../../../src/frontend/sencha-extjs/**/*.js',
      
      './**/*-spec.js'
    ],
    exclude: [
      '../../../../../vendors/extjs/examples/**/*.js'
    ],
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
