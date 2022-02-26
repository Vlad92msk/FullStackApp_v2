FROM node:16.13.0-alpine
RUN apk add git \
    && git clone https://github.com/Vlad92msk/FullStackApp_v2.git \
    && cd ./FullStackApp_v2/client \
    && npm install

WORKDIR ./FullStackApp_v2/client
RUN npm run next:build
CMD yarn run next:start:prod

EXPOSE ${CLIENT_PORT}

