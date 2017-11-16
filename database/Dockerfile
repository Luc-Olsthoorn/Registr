FROM ubuntu:14.04
Run apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
Run echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

Run apt-get update && apt-get --force-yes -y install mongodb-org
RUN mkdir /data
RUN mkdir /data/db
RUN chmod 777 /data/db
Add mongoStartupScript.sh /mongoStartupScript.sh
Run chmod +x mongoStartupScript.sh
ENTRYPOINT ./mongoStartupScript.sh && ./bin/bash