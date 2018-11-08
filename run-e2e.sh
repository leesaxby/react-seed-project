#!/usr/bin/env bash

# Start webpack prod server.
yarn prod-server &

# Get pid
pid="$!"

# Wait for server to be running.
# FIX: hardcoded sleep 8 for the app to bootstrap.
while ! nc -z 0.0.0.0 8888; do sleep 30; done

# Run tests
node_modules/.bin/jest test/e2e/**/**.spec.js

# Kill webpack prod server.
sleep 8
kill "$pid"
