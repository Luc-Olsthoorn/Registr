FROM ubuntu:14.04
ADD package.json /package.json
ADD public/ /public
ADD server.js /server.js

RUN apt-get update && apt-get -y install nodejs 
RUN apt-get -y install npm
RUN npm install

ENTRYPOINT npm start