FROM alpine
RUN apk add git \
    && apk add yarn \
    && git clone https://github.com/Vlad92msk/FullStackApp_v2.git \
    && cd ./FullStackApp_v2/client \
    && yarn \
    && yarn next:build

WORKDIR ./FullStackApp_v2/client
CMD yarn next:start:prod

EXPOSE ${CLIENT_PORT}

