FROM monostream/nodejs-gulp-bower
MAINTAINER Paolo Casciello <paolo.casciello@scalebox.it>

RUN apk add --no-cache \
    build-base autoconf automake nasm \
    zlib-dev libjpeg libpng giflib \
    && \
    yarn cache clean && \
    rm -rf /var/cache/* /tmp/*


COPY ./gulpfile.js /workspace/
COPY ./gulp /workspace/gulp
COPY ./package.json /workspace/

ENV NODE_ENV development

RUN npm update

# Cleanup build tools to save image footprint
RUN apk del build-base autoconf automake nasm

CMD ["gulp", "monitor"]
