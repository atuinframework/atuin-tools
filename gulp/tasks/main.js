'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	mkdirs = require('mkdirs');

gulp.task(	'update',
			'Updates Python requirements.',
			function() {
				$.sequence('update:pip')();
			}
);

gulp.task(	'monitor',
			'Real time check for css and js.',
			function() {
				$.sequence(['css', 'css_admin', 'js', 'js_admin', 'img'], 'watch')();
			}
);

gulp.task(	'prepare-deploy',
			'Preare static files to being deployed: minification and uglification of files.',
			function() {
				$.util.env.type = 'production';
				return $.sequence(['css', 'css_admin', 'js', 'js_admin', 'img'])();
			}
);
