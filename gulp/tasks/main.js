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

