'use strict';
var gulp = require('gulp-help')(require('gulp')),
	requireDir = require('require-dir')('./gulp/tasks'),
	paths = require('./gulp/paths.js'),
	config = require('./gulp/config.js'),
	$ = require('gulp-load-plugins')();
	
gulp.task(	'default',
			'Shows the available tasks',
			function () {
				$.util.log('\n'+
					$.util.colors.green('GULP TASKS') + '\n\t' +
					
					// default | help
					$.util.colors.yellow('default | help') + '\n\t\t' +
					'Shows the available tasks\n\n\t' +
					
					// update
					$.util.colors.yellow('update') + '\n\t\t' +
					'Dependencies management.\n\t\tIt updates the dependencies specified in the requirements.txt file.\n\n\t' +
					
					// monitor
					$.util.colors.yellow('monitor [--type production]') + '\n\t\t' +
					'Real time check for css and js.\n\t\tIt handles errors and rebuilds the minified and compiled files.\n\t\t' +
					$.util.colors.magenta('--type production') + 'compress css and obfuscate js.\n\n\t' +

					// prepare deploy
					$.util.colors.yellow('prepare-deploy') + '\n\t\t' +
					'Preare static files to being deployed: minification and uglification of files.\n\n\t' +

					// clean
					$.util.colors.yellow('clean[:min|:css|:js|:img]') + '\n\t\t' +
					'Cleans files.\n\t\tFrom all project clean: *.pyc *.pyo *.~\n\t\t' +
					$.util.colors.magenta(':min') +	' Clean all minified fiels  ' 	+ $.util.colors.green(paths.static.min.root) 	 + '\n\t\t' +
					$.util.colors.magenta(':css') + ' Clean minified CSS  ' 		+ $.util.colors.green(config.min.css) + '\n\t\t' +
					$.util.colors.magenta(':js')  + ' Clean minified JS  ' 			+ $.util.colors.green(config.min.js)  + '\n\t\t' +
					$.util.colors.magenta(':img') + ' Clean optimized img  ' 		+ $.util.colors.green(config.min.img) + '\n' +
					
					// translations subsystem
					'\n\n\tLOCALIZATION SUBSYSTEM\n\n\t' +
					$.util.colors.yellow('translations<:extract|:update|:compile|:init>') + '\n\t\t' +
					'Manages translations. Each language must be initialized using :init.\n\t\t' +
					$.util.colors.magenta(':extract') +	' Extracts translations from source \n\t\t' +
					$.util.colors.magenta(':update') +	' Updates translations messages files for every language \n\t\t' +
					$.util.colors.magenta(':compile') +	' Compiles messages.po files for every language \n\t\t' +
					$.util.colors.magenta(':init --lang <code>') +	' Initialize a new language. Code must be language code like \'en\', \'de\', ...\n'
					
				);
			}
);
