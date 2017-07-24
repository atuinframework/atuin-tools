'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	paths = require('../paths.js'),
	changed = require('gulp-changed');

// public and admin specific
gulp.task(	'img',
			false,
			function() {
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

gulp.task(	'atuincms_img',
			false,
			function() {
				gulp.src(config.src.atuincms_img)
					.pipe(changed(config.min.atuincms_img))
					.pipe($.imagemin({
						progressive: true,
						svgoPlugins: [{removeViewBox:false}, {removeUselessStrokeAndFill:false}]
					}))
					.pipe(gulp.dest(config.min.atuincms_img));

				return gulp.src(config.src.atuincms_img_as_is)
						.pipe(changed(config.min.atuincms_img))
						.pipe(gulp.dest(config.min.atuincms_img))
			}
);
