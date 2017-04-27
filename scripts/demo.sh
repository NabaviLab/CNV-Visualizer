#!/bin/bash

cd app/data
python ../../scripts/cors_server.py &
cd ../..
electron app

