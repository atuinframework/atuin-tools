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


gulp.task(	'monitor',
			'Real time check for css and js.',
			function() {
				$.sequence([
							'css', 'css_admin',
							'js', 'js_admin',
							'img'
							],
							'watch')();
			}
);

gulp.task(	'prepare-deploy',
			'Prepare static files to being deployed: minification and uglification of files.',
			function() {
				$.util.env.type = 'production';
				return $.sequence([
							'css', 'css_admin',
							'js', 'js_admin',
							'img'
							])();
			}
);
