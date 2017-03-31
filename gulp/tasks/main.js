'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	mkdirs = require('mkdirs');

gulp.task(	'monitor',
			'Real time check for css and js.',
			function() {
				$.sequence([
							'atuin_css', 'atuin_css_admin',
							'css', 'css_admin',
							'atuin_js', 'atuin_js_admin',
							'js', 'js_admin',
							'img', 'atuin_img'
							],
							'watch')();
			}
);

gulp.task(	'prepare-deploy',
			'Prepare static files to being deployed: minification and uglification of files.',
			function() {
				$.util.env.type = 'production';
				return $.sequence([
							'atuin_css', 'atuin_css_admin',
							'css', 'css_admin',
							'atuin_js', 'atuin_js_admin',
							'js', 'js_admin',
							'img', 'atuin_img'
							])();
			}
);
