module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['src/**/*.js'],
			options: {
				globals: {
					_: false,
					$: false,
					jasmine: false,
					describe: false,
					it: false,
					beforeEach: false,
					afterEach: false,
					sinon: false
				},
				browser: true,
				devel: true
			}
		},
		sass: {
		    dist: {
		    	options: {
		    		style: 'compressed'
		    	},
		    	files: {
		    		'dist/css/style.css': 'src/scss/main.scss'
		    	}
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['jshint', 'sass']);

};