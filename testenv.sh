#!/bin/bash

echo "Launch test docker image with test_app mounted"

docker run --rm -it -v $PWD/test_app:/workspace/app atuinframework/atuin-tools:webpack-dev-latest bash
