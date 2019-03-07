FROM node:8

# Install app dependencies
COPY server/package.json ./

RUN npm install
 
Add server/ ./

EXPOSE 8080
CMD [ "npm", "start" ]