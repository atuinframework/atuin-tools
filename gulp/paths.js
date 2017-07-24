var p = {};

/**
 *  Mains
 */
// main
p.main = {};
p.main.root = 'app';

// main atuin
p.atuin = {};
p.atuin.root = p.main.root + '/atuin';

// main atuincms
p.atuincms = {};
p.atuincms.root = p.main.root + '/atuincms';


/**
 *  Statics
 */
// static
p.static = {};
p.static.root 	= p.main.root + '/static';

// atuin/static
p.static_atuin = {}
p.static_atuin.root = p.atuin.root + '/static';

// atuincms/static
p.static_atuincms = {}
p.static_atuincms.root = p.atuincms.root + '/static';


/**
 *  srcs
 */
// static/src
p.static.src = {};
p.static.src.root = p.static.root + '/src';

// static/src/css
p.static.src.css = {};
p.static.src.css.root = p.static.src.root + '/css';

// static/src/js
p.static.src.js = {};
p.static.src.js.root = p.static.src.root + '/js';

// static/src/img
p.static.src.img = {};
p.static.src.img.root = p.static.src.root + '/img';


/**
 *  Atuin srcs
 */
// atuin/static/src
p.static_atuin.src = {};
p.static_atuin.src.root = p.static_atuin.root + '/src';

// atuin/static/src/css
p.static_atuin.src.css = {};
p.static_atuin.src.css.root = p.static_atuin.src.root + '/css';

// atuin/static/src/js
p.static_atuin.src.js = {};
p.static_atuin.src.js.root = p.static_atuin.src.root + '/js';

// atuin/static/src/img
p.static_atuin.src.img = {};
p.static_atuin.src.img.root = p.static_atuin.src.root + '/img';


/**
 *  Atuincms srcs
 */
// atuin/static/src
p.static_atuincms.src = {};
p.static_atuincms.src.root = p.static_atuincms.root + '/src';

// atuin/static/src/css
p.static_atuincms.src.css = {};
p.static_atuincms.src.css.root = p.static_atuincms.src.root + '/css';

// atuin/static/src/js
p.static_atuincms.src.js = {};
p.static_atuincms.src.js.root = p.static_atuincms.src.root + '/js';

// atuin/static/src/img
p.static_atuincms.src.img = {};
p.static_atuincms.src.img.root = p.static_atuincms.src.root + '/img';


/**
 *  Mins
 */
// static/min
p.static.min = {};
p.static.min.root = p.static.root + '/min';

// static/min/css
p.static.min.css = {};
p.static.min.css.root = p.static.min.root + '/css';

// static/min/js
p.static.min.js = {};
p.static.min.js.root = p.static.min.root + '/js';

// static/min/img
p.static.min.img = {};
p.static.min.img.root = p.static.min.root + '/img';

// static/min/img/atuin
p.static.min.img.atuin = {}
p.static.min.img.atuin.root = p.static.min.img.root + '/atuin';

// static/min/img/atuincms
p.static.min.img.atuincms = {}
p.static.min.img.atuincms.root = p.static.min.img.root + '/atuincms';

// lib
p.lib = {}
p.lib.root = p.main.root + '/lib';

module.exports = p;
