#!/bin/bash

sudo /usr/local/nginx/sbin/nginx -c nginx.conf -p .
echo "nginx started"

redis-server setup/redis/redis.truncated-1000.conf &
echo "Redis master started"

#redis-server setup/redis/redis.slave01.truncated-1000.conf &
#echo "Redis slave01 started"

PID_FILE="server.pid"
python server.py --port=9000 &>server.log &
PID=$!
echo ${PID} > ${PID_FILE}
echo "Python server started"
echo "... with process id ${PID}"

echo ""
echo "Stop by running  ./stop.sh"
