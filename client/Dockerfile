FROM node:16.13.0-alpine
#RUN apk add git \
#    && git clone https://github.com/Vlad92msk/FullStackApp_v2.git \
#    && cd FullStackApp_v2/client \
#    && yarn

WORKDIR ./FullStackApp_v2/client

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --prod

COPY . .

RUN yarn next:build
CMD yarn next:start:prod

EXPOSE ${CLIENT_PORT}

