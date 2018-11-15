FROM node:8

# Install app dependencies
COPY ./package.json ./
RUN npm install
 
COPY ./webpack.config.js ./
COPY ./.babelrc ./
Add public/ /public/
Add src/ /src/

Run npm run build
EXPOSE 8080
CMD [ "npm", "start" ]