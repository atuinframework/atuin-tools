'use strict';
var gulp = require('gulp-help')(require('gulp')),
	$ = require('gulp-load-plugins')(),
	config = require('../config.js'),
	paths = require('../paths'),
	path = require('path'),
	mkdirs = require('mkdirs'),
	del = require('del');


gulp.task(	'watch',
			false,
			function() {
				gulp.watch(paths.static.src.css.root + '/*', ['css']);
				gulp.watch(paths.static.src.css.root + '/admin/*', ['css_admin']);
				gulp.watch(paths.static.src.js.root + '/*', ['js']);
				gulp.watch(paths.static.src.js.root + '/admin/*', ['js_admin']);
				var watchImg = gulp.watch(paths.static.src.img.root + '/**', ['img']);
				watchImg.on('change', function(ev){
					if (ev.type==='deleted') {
						del( path.relative('./', ev.path).replace(paths.static.src.img.root, paths.static.min.img.root) );
					}
				});
			}
);

var tasks_bundle = [
	'atuin_css', 'atuin_css_admin',
	'atuincms_css', 'atuincms_css_admin',
	'css', 'css_admin',

	'atuin_js', 'atuin_js_admin',
	'atuincms_js', 'atuincms_js_admin',
	'js', 'js_admin',

	'atuin_img', 'atuincms_img', 'img'
];
gulp.task(	'monitor',
			'Real time check for css and js.',
			function() {
				$.sequence(tasks_bundle, 'watch')();
			}
);
gulp.task(	'prepare-deploy',
			'Prepare static files to being deployed: minification and uglification of files.',
			function() {
				$.util.env.type = 'production';
				return $.sequence(tasks_bundle)();
			}
);
