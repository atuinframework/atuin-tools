'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	paths = require('../paths.js'),
	util = require('../util.js');

// public
gulp.task(	'css',
			false,
			function() {
				return gulp.src(config.src.css)
						.pipe($.plumber({
							errorHandler: util.onError
						}))
						.pipe($.sass().on('error', util.onError))
						.pipe($.autoprefixer({
							cascade: false
						}))
						.pipe($.size({ title: 'App css' }))
						.pipe( $.util.env.type === 'production' ? $.cssnano() : $.util.noop())
						.pipe($.size({ title: 'App css:min' }))
						.pipe(gulp.dest(config.min.css));
			}
);

// public atuin
gulp.task(	'atuin_css',
			false,
			function() {
				return gulp.src(config.src.atuin_css)
						.pipe($.plumber({
							errorHandler: util.onError
						}))
						.pipe($.concat('atuin.scss'))
						.pipe($.sass().on('error', util.onError))
						.pipe($.autoprefixer({
							cascade: false
						}))
						.pipe($.size({ title: 'Atuin css' }))
						.pipe( $.util.env.type === 'production' ? $.cssnano() : $.util.noop())
						.pipe($.size({ title: 'Atuin css:min' }))
						.pipe(gulp.dest(config.min.css));
			}
);

// admin specific
gulp.task(	'css_admin',
			false,
			function() {
				return gulp.src(config.src.css_admin)
						.pipe($.plumber({
							errorHandler: util.onError
						}))
						.pipe($.sass().on('error', util.onError))
						.pipe($.autoprefixer({
							cascade: false
						}))
						.pipe($.size({ title: 'App css_admin' }))
						.pipe( $.util.env.type === 'production' ? $.cssnano() : $.util.noop())
						.pipe($.size({ title: 'App css_admin:min' }))
						.pipe(gulp.dest(config.min.css_admin));
			}
);

// admin specific Atuin
gulp.task(	'atuin_css_admin',
			false,
			function() {
				return gulp.src(config.src.atuin_css_admin)
						.pipe($.plumber({
							errorHandler: util.onError
						}))
						.pipe($.concat('atuin.scss'))
						.pipe($.sass().on('error', util.onError))
						.pipe($.autoprefixer({
							cascade: false
						}))
						.pipe($.size({ title: 'Atuin css_admin' }))
						.pipe( $.util.env.type === 'production' ? $.cssnano() : $.util.noop())
						.pipe($.size({ title: 'Atuin css_admin:min' }))
						.pipe(gulp.dest(config.min.css_admin));
			}
);
