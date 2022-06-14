#!bin/bash 

# START Docker Compose Services
function startComposeProxy() {
  docker-compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    up --detach --build
}

function startComposeWordpress() {
  docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.wordpress.yml \
    up --detach --build
}

function startComposeFsg() {
  npm run dev:frontend:fsg && docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.fsg.yml \
    up --detach --build
}

function startPrototype() {
    docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.prototype.yml \
    up --detach --build
}

# Configure Wordpress Project
function configWordpressLandingpage() {
  docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.wordpress.yml \
    --file backend/wordpress/landing-page/wp-auto-config.yml \
    run --rm wp-auto-config
}

# STOP Docker Compose Services

function stopComposeProxy() {
  docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    down --volumes --rmi all
}

function stopComposeWordpress() {
  docker compose --env-file config.env \
    --file docker/docker-compose.wordpress.yml \
    down --volumes --rmi all
}

function stopComposeFsg() {
  docker compose --env-file config.env \
    --file docker/docker-compose.fsg.yml \
    down --volumes --rmi all
}

function stopPrototype() {
  docker compose --env-file config.env \
    --file docker/docker-compose.prototype.yml \
    down --volumes --rmi all
}

$1