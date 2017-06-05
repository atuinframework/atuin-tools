paths = require('./paths.js');

config = {
	'src' : {
		'css' 				: [ paths.static.src.css.root + '/style.scss'	],
		'css_admin' 		: [ paths.static.src.css.root + '/admin/style.scss'	],
		'atuin_css' 		: [ paths.static_atuin.src.css.root + '/style.scss'	],
		'atuin_css_admin' 	: [ paths.static_atuin.src.css.root + '/admin/style.scss'	],
		'js' 				: [ paths.static.src.js.root + '/*.js'	],
		'js_admin'			: [ paths.static.src.js.root + '/admin/*.js' ],
		'atuin_js' 			: [ paths.static_atuin.src.js.root + '/*.js'	],
		'atuin_js_admin'	: [ paths.static_atuin.src.js.root + '/admin/*.js'	],
		'img' 				: [ paths.static.src.img.root + '/**/*.@(jpg|gif|png)' ],
		'img_as_is' 		: [ paths.static.src.img.root + '/**/*.@(svg)' ],
		'atuin_img' 		: [ paths.static_atuin.src.img.root + '/**/*.@(jpg|gif|png)' ],
		'atuin_img_as_is'	: [ paths.static_atuin.src.img.root + '/**/*.@(svg)' ]
	},
	'min' : {
		'css' 		: paths.static.min.css.root,
		'css_admin' : paths.static.min.css.root + '/admin',
		'js' 		: paths.static.min.js.root,
		'js_admin'  : paths.static.min.js.root + '/admin',
		'img' 		: paths.static.min.img.root,
		'atuin_img'	: paths.static.min.img.atuin.root
	},
	'lib' : paths.lib.root
};

module.exports = config;
