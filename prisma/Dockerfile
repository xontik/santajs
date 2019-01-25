FROM node:10-alpine
RUN npm i -g npm@latest

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install && npm install -g prisma@latest

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
ENTRYPOINT npm start

EXPOSE 4000
