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
		},
		concat: {
			dist: {
				src: ['src/js/*/*js'],
				dest: 'dist/js/app.js'
			}
		},
		sprite:{
			all : {
				src: ['src/img/*.png'],
				destImg: 'dist/img/sprite.png',
				destCSS: 'src/img/_sprite.scss',
				cssFormat: 'scss'
			}
		},
		copy: {
			main: {
				files: [
					{
						src: '*.html',
						dest: 'dist/'
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['jshint', 'sass', 'concat', 'sprite', 'copy']);

};