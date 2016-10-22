'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	paths = require('../paths.js'),
	util = require('../util.js');

// public
gulp.task(	'js',
		    false,
			function() {
				return gulp.src(config.src.js)
						.pipe( $.plumber({
							errorHandler: util.onError
						}))
						.pipe($.concat('all.js'))
						.pipe($.size({ title: 'App js ' }))
						.pipe($.util.env.type === 'production' ? $.uglify({mangle:true}) : $.util.noop())
						.pipe($.size({ title: 'App js:min ' }))
						.pipe(gulp.dest(config.min.js));
			}	
);

// public atuin
gulp.task(	'atuin_js',
		    false,
			function() {
				return gulp.src(config.src.atuin_js)
						.pipe( $.plumber({
							errorHandler: util.onError
						}))
						.pipe($.concat('atuin.js'))
						.pipe($.size({ title: 'Atuin js ' }))
						.pipe($.util.env.type === 'production' ? $.uglify({mangle:true}) : $.util.noop())
						.pipe($.size({ title: 'Atuin js:min ' }))
						.pipe(gulp.dest(config.min.js));
			}	
);

// admin specific
gulp.task(	'js_admin',
		    false,
			function() {
				return gulp.src(config.src.js_admin)
						.pipe( $.plumber({
							errorHandler: util.onError
						}))
						.pipe($.concat('all.js'))
						.pipe($.size({ title: 'App js_admin ' }))
						.pipe($.util.env.type === 'production' ? $.uglify({mangle:true}) : $.util.noop())
						.pipe($.size({ title: 'App js_admin:min ' }))
						.pipe(gulp.dest(config.min.js_admin));
			}	
);

// admin specific
gulp.task(	'atuin_js_admin',
		    false,
			function() {
				return gulp.src(config.src.atuin_js_admin)
						.pipe( $.plumber({
							errorHandler: util.onError
						}))
						.pipe($.concat('atuin.js'))
						.pipe($.size({ title: 'Atuin js_admin ' }))
						.pipe($.util.env.type === 'production' ? $.uglify({mangle:true}) : $.util.noop())
						.pipe($.size({ title: 'Atuin js_admin:min ' }))
						.pipe(gulp.dest(config.min.js_admin));
			}	
);
