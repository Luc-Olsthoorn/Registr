FROM ubuntu:14.04
RUN apt-get update && apt-get -y install nodejs 
RUN sudo ln -s "$(which nodejs)" /usr/bin/node
RUN apt-get update &&  apt-get -y install npm
ADD package.json /package.json
RUN npm install

ADD public/ /public
ADD server.js /server.js

CMD npm start