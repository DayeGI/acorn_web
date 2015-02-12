module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//this is the task to run
		sass: {
			dist: {
				files: {
					//output	 -- you can name it what you want   //input -- put all the dependancies here so we only need to compile from one source
					'plugins/acorn-default/public/css/style.css' : 'plugins/acorn-default/public/css/sass/main.scss'
					// you can distribute css files if you like
				}
			}
		},
		watch: {
			css: {
				//watch for these files to change
				files: '**/*.scss',
				//when a file changes, run this task below, called 'sass'
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
