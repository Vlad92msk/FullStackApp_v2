#!/bin/bash

git pull
#docker-compose -f --env-file .env.dev.prod up -d --build
#docker-compose -f --env-file .env.dev up -d --build

#echo "Building server"
docker-compose -f server/docker-compose.yml up -d --build

#echo "Building client"
docker-compose -f client/docker-compose.yml up -d --build
