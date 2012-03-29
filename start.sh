#!/bin/bash

PID_FILE="redis.pid"
redis-server setup/redis/redis.truncated-1000.conf &

echo "Redis started"
echo "... with process id ${PID}"
echo ""
echo "Stop server by running  ./stop.sh"

PID_FILE="server.pid"
python server.py &>server.log &
PID=$!
echo ${PID} > ${PID_FILE}

echo "Server started"
echo "... with process id ${PID}"
echo ""
echo "Stop server by running  ./stop.sh"
