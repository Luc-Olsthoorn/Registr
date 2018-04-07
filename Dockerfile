FROM ubuntu:14.04
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get update && apt-get install -y nodejs
ADD package.json /package.json
RUN npm install

ADD schools/ /schools
ADD public/ /public
ADD server.js /server.js

RUN npm run build

CMD npm start
