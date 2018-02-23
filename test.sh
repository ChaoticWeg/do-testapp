#!/bin/bash
clear

echo Start: $(date +"%a %m/%d/%Y at %H:%M:%S")
echo

export NODE_ENV="development"
export NODE_LOGLEVEL="dev"
export PORT=3000

node index.js

