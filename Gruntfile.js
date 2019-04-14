module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
          
      },
      files: {
          expand: true,
          src: ['*.html', '0?-*/*.html', '1?-*/*.html'],
          dest:'dist/'  
       },
    },
    cssmin: {
       files: {   
           expand: true,
           src: ['1?-*/*.css', '0?-*/*.css'],
                                                                      dest:'dist/'
    }
    },
    uglify: {
      main: {
        files: [{
              expand: true,
              src: ['1?-*/*.js', '0?-*/*.js'],
                                                                         dest: 'dist/'
    }]
          
    }
        
    },
    csslint: {
      options: {
            csslintrc: '.csslintrc'
                  
    },
      src: ['1?-*/*.css', '0?-*/*.css']
                                        
    },
    htmlhint: {
      options: {
            htmlhintrc: '.htmlhintrc'
                  
    },
      src: ['*.html', '0?-*/*.html','1?-*/*.html']
                                     
    },
    eslint: {
      options: {
           configFile: '.eslintrc.json'
                  
    }, 
    target: ['./**/*.js']
        
    }
      
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');

    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('build', ['htmlmin', 'cssmin', 'uglify']);

};
