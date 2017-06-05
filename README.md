# atuin-gulp

## Read This first

This container is not meant to be used *as is* but part of the docker-compose
environment started for development in Flask and GAE Atuin.

## What is Atuin?

Atuin is a Flask powered web framework built by SCALEBOX, an Italian IT Agency,
that provides a complete web application skeleton.

Goal of Atuin is mantaining the same developing philosopy when dealing with *traditional*
relational database stack and targeting Google App Engine using Datastore.
Usually you only need to change the data codebase and nothing else when porting between the two.

Atuin includes some useful flask extensions for common tasks such as authentication,
localization, caching. Look at the repository for more details. :)

Atuin free to use for all.

## And this container?

In modern days we use lots of different tools to build assets, compile js, minification
and such.
This container simplifies it by creating an environment which runs **gulp** and
all the tools needed to build the *static/min* folder of Atuin.

It's a base container to derive any custom packages needed in local projects.

### Suggested usage in project docker-compose file

```yaml
    services:
      atuin-tools:
        image: scalebox/atuin-gulp
        volumes:
          - ./app:/workspace/app
          - ./babel.cfg:/workspace/babel.cfg
          - ./requirements.txt:/workspace/requirements.txt
```

### Before the deploy... don't forget to:

Minify, uglify and compress (production mode) the project's static files to be ready for the deploy.

```bash
docker-compose run --rm atuin-tools gulp prepare-deploy
```

## Can I use your container?

Of course. Use as a sample, ask us anything about it. But be careful, this is
made specifically for Atuin.
If you use it let us know any feedback.

## Autobuild

This container is auto-built on [Docker Hub](https://hub.docker.com/r/scalebox/atuin-gulp/)
