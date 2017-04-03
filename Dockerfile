FROM monostream/nodejs-gulp-bower
MAINTAINER Paolo Casciello <paolo.casciello@scalebox.it>

RUN apk add --no-cache \
    python py-pip \
    build-base autoconf automake nasm \
    libjpeg libpng giflib \
    && \
    pip install --upgrade pip && \
    pip install Babel && \
    apk del py-pip && \
    yarn cache clean && \
    rm -rf /var/cache/* /tmp/*

COPY ./gulpfile.js /workspace/
COPY ./gulp /workspace/gulp
COPY ./package.json /workspace/

ENV NODE_ENV development

RUN npm update

CMD ["gulp", "monitor"]
