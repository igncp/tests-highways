module.exports = (grunt)->
  grunt.initConfig
    watch:
      scripts:
        options:
          atBegin: true
        files: [
          __dirname + '**/*-spec.coffee'
          'src/backend/nodejs/design-patterns/*.js'
        ]
        tasks: ['coffee', 'vows']

    vows:
      all:
        options:
          reporter: 'dot'
          verbose: false
          silent: false
          colors: true
          isolate: true
        src: ['tests/unit/backend/nodejs/vows/design-patterns/compiled-coffee/*-spec.js']

    coffee:
      compile:
        expand: true
        cwd: __dirname
        src: ['*-spec.coffee']
        dest: __dirname + '/compiled-coffee'
        ext: '.js'

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-vows'
  grunt.registerTask 'default', ['watch']