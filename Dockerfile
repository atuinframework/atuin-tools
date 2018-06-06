FROM node:6-slim

MAINTAINER Paolo Casciello <paolo.casciello@scalebox.it>

RUN apt-get -y update && apt-get -y upgrade && \
    apt-get -y --no-install-recommends install git && \
    apt-get -y install python python-setuptools python-dev build-essential && \
    apt-get -y install libpng-dev && \
    easy_install --upgrade pip && \
    npm install -g pngquant-bin && \
    npm install -g gulp && \
    npm cache clean && \
    apt-get -yqq autoremove && \
    apt-get -yqq clean && \
    rm -rf /var/lib/apt/lists/* /var/cache/* /tmp/* /var/tmp/*

COPY ./gulpfile.js /workspace/
COPY ./gulp /workspace/gulp
COPY ./package.json /workspace/

WORKDIR /workspace

RUN npm update

ENV PATH=/workspace/node_modules/.bin:$PATH

CMD ["gulp", "monitor"]
