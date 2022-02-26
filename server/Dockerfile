FROM node:16.13.0-alpine
#RUN apk add git \
#    && git clone https://github.com/Vlad92msk/FullStackApp_v2.git \
#    && cd FullStackApp_v2/server \
#    && yarn

WORKDIR ./FullStackApp_v2/server

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --prod

COPY . .

RUN yarn nest:build
CMD ["node", "dist/main.js"]

EXPOSE ${SERVER_PORT}
