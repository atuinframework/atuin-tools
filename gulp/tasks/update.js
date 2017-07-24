'use strict';
var gulp = require('gulp-help')(require('gulp')),
	fs = require('fs'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	del = require('del');


// Atuin dependencies
gulp.task(	'update:pipinstall:atuin',
			false,
			function() {
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pip install -U -r app/atuin/requirements.txt -t ' + config.lib
						}]));
			}
);

// Atuincms dependencies
gulp.task(	'update:pipinstall:atuincms',
			false,
			function() {
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pip install -U -r app/atuincms/requirements.txt -t ' + config.lib
						}]));
			}
);

// project dependencies
gulp.task(	'update:pipinstall:project',
			false,
			function() {
				return gulp.src('gulpfile.js')
						.pipe($.start( [{
							match: /gulpfile.js$/,
							cmd: 'pip install -U -r app/requirements.txt -t ' + config.lib
						}]));
			}
);

gulp.task(	'update:pipcleandist',
			false,
			function() {
				return del(config.lib + '/*.dist-info');
			}
);

gulp.task(	'update',
			false,
			function() {
				return $.sequence(
					'update:pipinstall:atuin',
					'update:pipinstall:atuincms',
					'update:pipinstall:project',
					'update:pipcleandist'
				)();
			}
);
