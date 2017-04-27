#!/bin/bash

if [ $1 == "start" ]; then
    cd app/data
    python ../../scripts/cors_server.py &
    echo $! > ../../cors_server.pid
    cd ../..
    electron app &
else 
    kill $(cat ./cors_server.pid)
fi;

