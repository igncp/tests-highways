var r = '../root_symlink/'; // root dir

module.exports = function(deps) {
  console.log("deps.relSource", deps.relSource);
  var source = r + deps.relSource,
    config = {
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

      preprocessors: {

      },
      exclude: [
        r + 'vendors/extjs/examples/**/*.js'
      ],
      reporters: ['dots', 'coverage'],
      coverageReporter: {
        type: 'html',
        dir: r + 'reports/istanbul/frontend/extjs/simple/'

      },
      port: 9876,
      colors: true,
      autoWatch: true,
      browsers: ['PhantomJS'],
      singleRun: true,
      plugins: [
        'karma-jasmine',
        'karma-sinon',
        'karma-coverage',
        'karma-phantomjs-launcher'
      ]
    };

  config.preprocessors[source] = ['coverage'];

  return config;
};
