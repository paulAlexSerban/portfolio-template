#!bin/bash 

# START Docker Compose Services
function startComposeAll() {
    docker-compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.wordpress.yml \
    --file docker/docker-compose.fsg.yml \
    --file docker/docker-compose.prototype.yml \
    --file docker/docker-compose.whoami.yml \
    up --detach --build
}
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

function startWhoami() {
    docker compose --env-file config.env \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.whoami.yml \
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

# LINT

function lintLivingStyleGuide() {
  npm run --prefix frontend/living-style-guide lint
}

function lintJSComponentLibrary() {
  npm run --prefix frontend/js-component-library lint
}

# TEST

function testContainers() {
  docker run --network container:traefik appropriate/curl -s --retry 10 --retry-connrefused http://localhost:8080/dashboard
  docker run --network container:prototype appropriate/curl -s --retry 10 --retry-connrefused http://prototype
  docker run --network container:frontend-style-guide appropriate/curl -s --retry 10 --retry-connrefused http://frontend-style-guide:6006
  docker run --network container:whoami appropriate/curl -s --retry 10 --retry-connrefused http://whoami
  docker run --network container:wordpress-landing-page appropriate/curl -s --retry 10 --retry-connrefused http://wordpress-landing-page
}

function testLivingStyleGuide() {
  npm run --prefix frontend/living-style-guide test
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

function stopWhoami() {
  docker compose --env-file config.env \
    --file docker/docker-compose.whoami.yml \
    down --volumes --rmi all
}

function stopComposeAll() {
    docker compose --env-file config.env \
    --file docker/docker-compose.prototype.yml \
    --file docker/docker-compose.proxy.yml \
    --file docker/docker-compose.whoami.yml \
    --file docker/docker-compose.fsg.yml \
    --file docker/docker-compose.wordpress.yml \
    down --volumes --rmi all
    docker container prune -f
}

function installSubPrjDevDependencies () {
  echo "🔧  Installing Frontend Style Guide 🔧 "
  npm --prefix frontend/frontend-style-guide install
  echo "🔧  Installing Living Style Guide 🔧 " 
  npm --prefix frontend/living-style-guide install
  echo "🔧  Installing JS Component Library 🔧 " 
  npm --prefix frontend/js-component-library install
  echo "🔧  Installing Static Prototype 🔧 " 
  npm --prefix frontend/static/prototype install
}

$1