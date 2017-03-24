'use strict';
var gulp = require('gulp-help')(require('gulp')),
	fs = require('fs'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	del = require('del'),
	env_config_folder = (process.env.CONFIG_FOLDER) ? (process.env.CONFIG_FOLDER + '/') : '';


gulp.task(	'translations:init',
			false,
			function() {
				if (!$.util.env.lang) {
					$.util.log($.util.colors.red('No --lang specified.') + ' Use like --lang en');
					return;
				}
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pybabel init -i app/messages.pot -d app/translations -l ' + $.util.env.lang
						}]));
			}
);

gulp.task(	'translations:extract',
			false,
			function() {
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pybabel extract -k lazy_gettext -F ' + env_config_folder + 'babel.cfg -o app/messages.pot app'
						}]));
			}
);

gulp.task(	'translations:update',
			false,
			function() {
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pybabel update -i app/messages.pot -d app/translations'
						}]));
			}
);

gulp.task(	'translations:compile',
			false,
			function() {
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pybabel compile -d app/translations'
						}]));
			}
);
