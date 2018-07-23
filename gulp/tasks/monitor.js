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
				
				gulp.watch(paths.static_atuin.src.css.root + '/*', ['atuin_css']);
				gulp.watch(paths.static_atuin.src.css.root + '/admin/*', ['atuin_css_admin']);
				gulp.watch(paths.static_atuin.src.js.root + '/*', ['atuin_js']);
				gulp.watch(paths.static_atuin.src.js.root + '/admin/*', ['atuin_js_admin']);
				
				gulp.watch(paths.static_atuincms.src.css.root + '/*', ['atuincms_css']);
				gulp.watch(paths.static_atuincms.src.css.root + '/admin/*', ['atuincms_css_admin']);
				gulp.watch(paths.static_atuincms.src.js.root + '/*', ['atuincms_js']);
				gulp.watch(paths.static_atuincms.src.js.root + '/admin/*', ['atuincms_js_admin']);
				
				var watchImg = gulp.watch(paths.static.src.img.root + '/**', ['img']);
				watchImg.on('change', function(ev){
					if (ev.type==='deleted') {
						del( path.relative('./', ev.path).replace(paths.static.src.img.root, paths.static.min.img.root) );
					}
				});
				
				var watchImg = gulp.watch(paths.static_atuin.src.img.root + '/**', ['atuin_img']);
				watchImg.on('change', function(ev){
					if (ev.type==='deleted') {
						del( path.relative('./', ev.path).replace(paths.static_atuin.src.img.root, paths.static.min.img.atuin.root) );
					}
				});
				
				var watchImg = gulp.watch(paths.static_atuincms.src.img.root + '/**', ['atuincms_img']);
				watchImg.on('change', function(ev){
					if (ev.type==='deleted') {
						del( path.relative('./', ev.path).replace(paths.static_atuincms.src.img.root, paths.static.min.img.atuincms.root) );
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
