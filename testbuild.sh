#!/bin/bash

echo "Build Docker image for testing"

docker build -t atuinframework/atuin-tools:webpack-dev-latest .
