
# Atuin tools

A docker container to support the local development tasks when using the 
[Atuin Web Framework].

This container is not meant to be used *as is* but as part of the docker-compose
environment started when developing with the [Atuin Web Framework].

## More about this container

In modern days we use lots of different tools to build assets, preprocess 
languages, concatenate and minify files or to optimize static assets.
This container simplifies all these procedures by creating an environment which 
runs **[gulp]** and all the tools needed to build the *static/min* folder of 
Atuin.

### Suggested container use

In the `docker-compose.yaml` file

```yaml
	services:
	  atuin-tools:
	    image: atuinframework/atuin-tools:2.0.0
	    volumes:
	      - ./app:/workspace/app
	      - ./config:/workspace/config
```

## Functionalities

	- SASS preprocessing
	- CSS concatenation and minification
	- JS concatenation, minification and obfuscation
	- Images optimization
	- Translations management (extraction, compilation and update)
	- Pre-deploy preparation task	


## Available tasks

```
GULP TASKS
default | help
	Shows the available tasks.

update
	Dependencies management.
	It updates all project's dependencies specified in requirements.txt files.

monitor [--type production]
	Real time check of CSS and JS files.
	It handles errors and rebuilds the minified and compiled files automatically at any change made.
	--type production compress css and obfuscate js.

prepare-deploy
	Prepare static files for the deployment.
	It concatenates, minifiy and uglify them with *production* flag enabled.

clean(:min|:css|:js|:img)
	Cleans files.
	From all project clean: *.pyc *.pyo *.~
	:min Clean all minified fiels. Deleted: app/static/min
	:css Clean minified CSS.       Deleted: app/static/min/css
	:js  Clean minified JS.        Deleted: app/static/min/js
	:img Clean optimized img.      Deleted: app/static/min/img


LOCALIZATION SUBSYSTEM

translations(:extract|:update|:compile|:init)
	Manages translations. Each language must be initialized using :init.
	:extract            Extracts translations from source.
	:update             Updates translations messages files for every language.
	:compile            Compiles messages.po files for every language.
	:init --lang <code> Initialize a new language. Code must be language code like 'en', 'de', ...

```


### Before the deploy

In order to finalize static files before the application deploy:

```bash
docker-compose run --rm atuin-tools gulp prepare-deploy
```

This will minify, uglify and compress (production mode) the project's static 
files to be ready for the deploy.


## Can I use your container?

Of course. Use as a sample, ask us anything. But be careful, this is
made specifically for Atuin. If you use it let us know any feedback.

## Autobuild

This container is auto-built on [Docker Hub]

[Atuin Web Framework]: https://github.com/atuinframework
[gulp]: https://gulpjs.com/
[Docker Hub]: https://hub.docker.com/r/atuinframework/atuin-tools
