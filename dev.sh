#!/usr/bin/env sh

# abort on errors
set -e

# into functions 
cd functions

# install dependencies
npm i -s

# deploy
npm run serve