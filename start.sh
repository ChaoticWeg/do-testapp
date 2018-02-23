#!/bin/bash
clear

echo Start: $(date +"%a %m/%d/%Y at %H:%M:%S")
echo

export NODE_ENV="production"
export NODE_LOGLEVEL="tiny"
export PORT=3000

node index.js

