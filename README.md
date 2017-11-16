# Simpleton 

## About

A simple way of storing notes, built using a jquery frontend, a nodejs backend, and a mongodb data store. The functionality is a basic key store system, which allows for simple note taking without the need of authentication. 

## Running 

### Internal docker network

Read about it here: https://docs.docker.com/engine/userguide/networking/#bridge-networks

docker network create --driver bridge isolated_nw

### General build 

docker build server

docker run -ti  --network=isolated_nw -p 8080:8080 0c7b5c560adc ./bin/bash

docker build database

docker run -ti  --network=isolated_nw  0c7b5c560adc ./bin/bash

Go to localhost

## Tree
`
├── README.md
├── database
│   ├── Dockerfile
│   └── mongoStartupScript.sh
└── server
    ├── Dockerfile
    ├── nodeStartup.sh
    └── server
        ├── database.js
        ├── public
        │   ├── css
        │   │   ├── fonts.css
        │   │   └── semantic.css
        │   ├── font
        │   │   └── roboto
        │   ├── index.html
        │   └── js
        │       ├── jquery.js
        │       ├── main.js
        │       └── semantic.js
        └── server.js
`
