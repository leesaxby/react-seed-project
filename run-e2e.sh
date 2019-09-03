#!/usr/bin/env bash

# Start webpack prod server.
webpack-dev-server --config webpack/webpack.prod-server.js &

# Get pid
pid="$!"

# Wait for server to be running.
# FIX: hardcoded sleep 8 for the app to bootstrap.
# while ! nc -z 0.0.0.0 8888; do sleep 30; done
# shellcheck disable=SC1083
while [[ "$(curl -s -o /dev/null -w %{http_code} 0.0.0.0:8888)" != "200" ]]; do
    sleep 5
done

# Run tests
jest test/e2e/**/**.spec.js


sleep 8
# Kill all child proceses of the background process eg the prod-server
pkill -P $pid
# Kill the background process
kill "$pid"
