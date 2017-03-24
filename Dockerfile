FROM monostream/nodejs-gulp-bower
MAINTAINER Paolo Casciello <paolo.casciello@scalebox.it>

RUN apk add --no-cache py-pip && \
    pip install --upgrade pip && \
    pip install Babel && \
    yarn cache clean && \
    rm -rf /var/cache/* /tmp/*

COPY ./gulpfile.js /workspace/
COPY ./gulp /workspace/gulp
COPY ./package.json /workspace/

ENV NODE_ENV development

RUN npm update
