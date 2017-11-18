FROM ubuntu:14.04
Run apt-get update && apt-get -y install nodejs 
Run apt-get -y install npm

Run apt-get update && npm install mongodb \
http \
express \
body-parser \
request@2.81.0
Add server/ /server/
Add nodeStartup.sh /nodeStartup.sh
RUN chmod +x /nodeStartup.sh
ENTRYPOINT ./nodeStartup.sh && ./bin/bash