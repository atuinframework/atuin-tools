'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	paths = require('../paths.js'),
	changed = require('gulp-changed'),
	mkdirs = require('mkdirs');

// public and admin specific
gulp.task(	'img',
			false,
			function() {
				// mkdirs(config.min.img);
				gulp.src(config.src.img)
					.pipe(changed(config.min.img))
					.pipe($.imagemin({
						progressive: true,
						svgoPlugins: [{removeViewBox:false}, {removeUselessStrokeAndFill:false}]
					}))
					.pipe(gulp.dest(config.min.img));
				
				return gulp.src(config.src.img_as_is)
						.pipe(changed(config.min.img))
						.pipe(gulp.dest(config.min.img))
			}
);

gulp.task(	'atuin_img',
			false,
			function() {
				// mkdirs(config.min.atuin_img);
				gulp.src(config.src.atuin_img)
					.pipe(changed(config.min.atuin_img))
					.pipe($.imagemin({
						progressive: true,
						svgoPlugins: [{removeViewBox:false}, {removeUselessStrokeAndFill:false}]
					}))
					.pipe(gulp.dest(config.min.atuin_img));
				
				return gulp.src(config.src.atuin_img_as_is)
						.pipe(changed(config.min.atuin_img))
						.pipe(gulp.dest(config.min.atuin_img))
			}
);
