FROM node:16-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /opt/
COPY package.json $WORKDIR
COPY package-lock.json $WORKDIR
RUN npm ci
# ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
RUN chown -R node:node /opt/app
USER node
COPY . $WORKDIR
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
