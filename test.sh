#!/bin/bash
clear

echo -ne Start: $(date +"%a %m/%d/%Y at %H:%M:%S")\n\n

export NODE_LOGLEVEL="dev"
export PORT=3000

node index.js

