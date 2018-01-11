FROM ubuntu:14.04
RUN apt-get update && apt-get -y install nodejs 
RUN sudo ln -s "$(which nodejs)" /usr/bin/node
RUN apt-get update &&  apt-get -y install npm
ADD server/package.json /package.json
RUN npm install

ADD server/public/ /public
ADD server/server.js /server.js

CMD npm start
