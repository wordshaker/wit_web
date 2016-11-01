module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/**/*.js'],
        dest: 'js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
          src: 'js/<%= pkg.name %>.js',
          dest: 'js/<%= pkg.name %>.min.js'
      },
      build: {
        files: {
          'site.min.js': [
            'js/*.js', 'app/*.js',
            'app/*.*.js', 'Gruntfile.js',
            'test/**/*.js'
          ]
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
            cwd: 'images/',
            src: ['**/*.png'],
            dest: 'images/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: 'images/',
            src: ['**/*.jpg'],
            dest: 'images/',
            ext: '.jpg'
          }
        ]
        }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['!node_modules/**','Gruntfile.js','app/*.js', 'js/*.js', 'test/**/*.js'],
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