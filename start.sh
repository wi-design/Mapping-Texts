#!/bin/bash

sudo /usr/local/nginx/sbin/nginx -c nginx.conf -p .
echo "nginx started"

redis-server setup/redis/redis.truncated-1000.conf &
echo "Redis master started"

redis-server setup/redis/redis.slave01.truncated-1000.conf &
echo "Redis slave01 started"

redis-server setup/redis/redis.slave02.truncated-1000.conf &
echo "Redis slave02 started"

redis-server setup/redis/redis.slave03.truncated-1000.conf &
echo "Redis slave03 started"

PID_FILE="server.pid"
python server.py --port=9000 &>server.log &
PID=$!
echo ${PID} > ${PID_FILE}
echo "Python server started"
echo "... with process id ${PID}"

echo ""
echo "Stop by running  ./stop.sh"
