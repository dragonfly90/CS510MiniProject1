module.exports = function(grunt) {

  grunt.initConfig({

	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        files: 
	        [{
	  				expand: true,
	  				cwd: "bower_components/bootstrap/less",
	  				src: "**/bootstrap.less",
	  				dest: "www/css/",
	  				ext: ".css"
	        }]
	      }
	  },
        
    concat:
    {
    package:
    {
    src:['www/js/knockout.js','www/js/jquery.min.js','www/js/modernizr.custom.js','www/js/d3.min.js','www/js/d3.js','www/js/classie.js','www/js/bootstrap.min.js','www/js/smoothscroll.js','www/js/main.js'],dest:'www/js/libs.js'
    }
    },

   uglify:
   {
   files: {
   'www/js/libs.min.js': ['www/js/lib.js']
   }
   },

   jshint:
  {
  files: ['Gruntfile.js', 'www/js/libs.min.js',],
  options: {
    force: true,
      globals: {
      jQuery: true,
      console: true,
      module: true
  }
  }
  }
  });

  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-concat');
  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('package', 'concat');
  grunt.registerTask('validate', 'jshint');
  grunt.registerTask('default', ['less','concat','uglify','jshint']);
  grunt.registerTask('build_all', ['less','concat','uglify','jshint']);

};
