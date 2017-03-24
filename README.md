# atuin-gulp

V2 Branch. Use **only** with **unreleased** Atuin v2.

## Read This first

This container is not meant to be used *as is* but part of the docker-compose
environment started for development in Flask (and GAE) Atuin.

## What is Atuin?

Atuin is a Flask powered web framework built by SCALEBOX, an Italian IT Agency,
that provides a complete web application skeleton.

Goal of Atuin is mantaining the same developing philosopy when dealing with *traditional*
relational database stack and targeting Google App Engine using Datastore.
Usually you only need to change the data codebase and nothing else when porting between the two.

Atuin includes some useful flask extensions for common tasks such as authentication,
localization, caching. Look at the repository for more details. :)

Atuin free to use for all.

### ENV variables

Be sure to export as environment variables the followings:

- `CONFIG_FOLDER` -configuration folder path- to let gulp, bable and others know where project configuration files are.

### Suggested usage in project docker-compose file

```yaml
    services:
      atuin-env-setup:
        image: scalebox/atuin-gulp:v2
        environment:
          # folder for requirements.txt, bable.cfg files
          - CONFIG_FOLDER=config
        volumes:
          - ./app:/workspace/app
          - ./config:/workspace/config
        entrypoint: gulp update
    
      atuin-tools:
        image: scalebox/atuin-gulp:v2
        volumes:
          - ./app:/workspace/app
        entrypoint: gulp monitor

```

- `atuin-env-setup` is used to install/update all project dependencies defined in config/requirements.txt
- `atuin-tools` is the one that remains in a monitor status (instead of exiting as the previous one when completed updates) to minify and concatenate CSS, JS and images files

## And this container?

In modern days we use lots of different tools to build assets, compile js, minification
and such.
This container simplifies it by creating an environment which runs **gulp** and
all the tools needed to build the *static/min* folder of Atuin.

It's a base container to derive any custom packages needed in local projects.

## Can I use your container?

Of course. Use as a sample, ask us anything about it. But be careful, this is
made specifically for Atuin.

## Autobuild

This container is auto-built on [Docker Hub](https://hub.docker.com/r/scalebox/atuin-gulp/)
