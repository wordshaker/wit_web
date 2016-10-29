module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        files: {
          'js/npm.min.js': 'js/npm.js',
          'js/jquery.min.js': 'js/jquery.js',
        }
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          expand: true,
          cwd: 'images',
          src: ['**/*.png'],
          dest: 'images',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          expand: true,
          cwd: 'images',
          src: ['**/*.jpg'],
          dest: 'images',
          ext: '.jpg'
        }
      ]
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('imagemin', ['imagemin']);
  grunt.registerTask('imagepng', ['imagemin:png']); 
  grunt.registerTask('imagejpg', ['imagemin:jpg']);
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};