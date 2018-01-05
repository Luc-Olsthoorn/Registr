FROM ubuntu:14.04
RUN apt-get update && apt-get -y install nodejs 
RUN apt-get -y install npm
RUN npm install
ADD server/ /server
ENTRYPOINT npm start