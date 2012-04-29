#!/bin/bash

echo "Shutting down redis..."
redis-cli -p 6379 shutdown
echo "done"


PID_FILE="server.pid"
PID=`cat ${PID_FILE}`
kill ${PID}
rm -f ${PID_FILE}

echo "Python server stopped"
echo "... with process id ${PID}"

PID_FILE="logs/nginx.pid"
PID=`cat ${PID_FILE}`
sudo kill ${PID}
echo "nginx stoped"

echo ""
echo "Start up again by running ./start.sh"