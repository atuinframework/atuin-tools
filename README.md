# Atuin tools - A tools suite for Atuin Web Framework

## Work in progress webpack refactory.

We aim to support: typescript, compiling node_modules, reactive frameworks like Vue.

---


[![Docker Automated buil](https://img.shields.io/docker/automated/atuinframework/atuin-tools.svg)](https://hub.docker.com/r/atuinframework/atuin-tools/)
[![Docker Pulls](https://img.shields.io/docker/pulls/atuinframework/atuin-tools.svg)](https://hub.docker.com/r/atuinframework/atuin-tools/)
[![Documentation Status](https://readthedocs.org/projects/atuin-tools/badge/?version=latest)](https://atuin-tools.readthedocs.io/en/latest/?badge=latest)

In modern days we use lots of different tools to build assets, compile js, minification and such. This container simplifies it by creating an environment which runs [gulp] and all the tools needed to build the ``app/static/min`` folder of [Atuin Web Framework].


Features
--------

- Python modules update
- SASS to CSS compilation
- CSS concatenation and minification
- JS concatenation, minification and obfuscation
- Images optimization without quality loss
- Translations management (translations defined through Babel_)
- Pre-deploy preparation task (CSS, JS, images fine optimizations)

Links
-----

- [Documentation]
- [Docker Hub]


## Tasks

```
GULP TASKS
default | help
	Shows the available tasks

update
	Dependencies management.
	It updates the dependencies specified in the requirements.txt file.

monitor [--type production]
	Real time check for css and js.
	It handles errors and rebuilds the minified and compiled files.
	--type productioncompress css and obfuscate js.

prepare-deploy
	Preare static files to being deployed: minification and uglification of files.

clean[:min|:css|:js|:img]
	Cleans files.
	From all project clean: *.pyc *.pyo *.~
	:min Clean all minified fiels  app/static/min
	:css Clean minified CSS  app/static/min/css
	:js Clean minified JS  app/static/min/js
	:img Clean optimized img  app/static/min/img


LOCALIZATION SUBSYSTEM

translations<:extract|:update|:compile|:init>
	Manages translations. Each language must be initialized using :init.
	:extract Extracts translations from source 
	:update Updates translations messages files for every language 
	:compile Compiles messages.po files for every language 
	:init --lang <code> Initialize a new language. Code must be language code like 'en', 'de', ...

```


### Before application deployment

In order to finalize static files before the application deployment

```bash
docker-compose run --rm tools gulp prepare-deploy
```

This will minify, uglify and compress (production mode) the project's static 
files to be ready for the deployment.


## Can I use your container?

Of course. Use as a sample, ask us anything. But be careful, this is
made specifically for Atuin Web Framework. If you use it let us know any feedback.

## Automatic container build

This container is automatically built on [Docker Hub]

[gulp]: https://www.npmjs.com/package/gulp
[Atuin Web Framework]: https://github.com/atuinframework
[Documentation]: https://atuin-tools.readthedocs.io/
[Docker Hub]: https://hub.docker.com/r/atuinframework/atuin-tools
