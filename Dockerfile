FROM node:alpine

MAINTAINER Paolo Casciello <paolo.casciello@scalebox.it>

RUN apk add --no-cache \
    python py-pip \
    build-base autoconf automake nasm \
    zlib-dev libjpeg libpng giflib \
    && pip install --upgrade --no-cache-dir pip \
    && pip install --upgrade --no-cache-dir flask flask_babel setuptools \
    # apk del py-pip && \
    && yarn cache clean \
    && rm -rf /var/cache/* /tmp/* \
    # To fix apk WARNING: Ignoring APKINDEX.84815163.tar.gz: Bad file descriptor
    # and then error on packages installation
    && mkdir /var/cache/apk


COPY ./gulpfile.js /workspace/
COPY ./gulp /workspace/gulp
COPY ./package.json /workspace/

WORKDIR /workspace

RUN npm update

ENV PATH=/workspace/node_modules/.bin:$PATH

# Cleanup build tools to save image footprint
RUN apk del build-base autoconf automake nasm

CMD ["gulp", "monitor"]
