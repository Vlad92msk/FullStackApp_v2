FROM node:16.13.0-alpine
RUN apk add git \
    && git clone https://github.com/Vlad92msk/FullStackApp_v2.git \
    && cd ./FullStackApp_v2/server \
    && yarn --prod \
    && yarn nest:build

WORKDIR ./FullStackApp_v2/server
CMD ["node", "dist/main.js"]

EXPOSE ${SERVER_PORT}
