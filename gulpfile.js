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
					$.util.colors.green('GULP TASKS') + '\n' +
					
					// default | help
					$.util.colors.yellow('default | help') + '\n\t' +
					'Shows the available tasks.\n\n' +
					
					// update
					$.util.colors.yellow('update') + '\n\t' +
					'Dependencies management.\n\t' +
					'It updates all project\'s dependencies specified in requirements.txt files.\n\n' +
					
					// monitor
					$.util.colors.yellow('monitor [--type production]') + '\n\t' +
					'Real time check of CSS and JS files.\n\tIt handles errors and rebuilds the minified and' +
					' compiled files automatically at any change made.\n\t' +
					$.util.colors.magenta('--type production') + ' compress css and obfuscate js.\n\n' +

					// prepare deploy
					$.util.colors.yellow('prepare-deploy') + '\n\t' +
					'Prepare static files for the deployment.\n\tIt concatenates, minifiy and uglify them with *production* flag enabled.\n\n' +

					// clean
					$.util.colors.yellow('clean(:min|:css|:js|:img)') + '\n\t' +
					'Cleans files.\n\tFrom all project clean: *.pyc *.pyo *.~\n\t' +
					$.util.colors.magenta(':min') +	' Clean all minified fiels. Deleted: ' 	+ $.util.colors.green(paths.static.min.root) + '\n\t' +
					$.util.colors.magenta(':css') + ' Clean minified CSS.       Deleted: ' 		+ $.util.colors.green(config.min.css)    + '\n\t' +
					$.util.colors.magenta(':js')  + '  Clean minified JS.        Deleted: ' 		+ $.util.colors.green(config.min.js) + '\n\t' +
					$.util.colors.magenta(':img') + ' Clean optimized img.      Deleted: ' 		+ $.util.colors.green(config.min.img)    + '\n' +
					
					// translations subsystem
					'\n\nLOCALIZATION SUBSYSTEM\n\n' +
					$.util.colors.yellow('translations(:extract|:update|:compile|:init)') + '\n\t' +
					'Manages translations. Each language must be initialized using :init.\n\t' +
					$.util.colors.magenta(':extract') +	'            Extracts translations from source.\n\t' +
					$.util.colors.magenta(':update') +	'             Updates translations messages files for every language.\n\t' +
					$.util.colors.magenta(':compile') +	'            Compiles messages.po files for every language.\n\t' +
					$.util.colors.magenta(':init --lang <code>') +	' Initialize a new language. Code must be language code like \'en\', \'de\', ...\n'
					
				);
			}
);
