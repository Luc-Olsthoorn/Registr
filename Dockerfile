FROM ubuntu:14.04
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get update && apt-get install -y nodejs
ADD server/package.json /package.json
RUN npm install

ADD server/schools/ /schools
ADD server/public/ /public
ADD server/server.js /server.js

CMD npm start
