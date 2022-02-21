FROM node:16.13.0-alpine
RUN apk add git \
    && git clone https://github.com/Vlad92msk/FullStackApp_v2.git \
    && cd FullStackApp_v2/client \
    && yarn

WORKDIR ./FullStackApp_v2/client
RUN yarn next:build
CMD yarn next:start:prod
EXPOSE 3000
