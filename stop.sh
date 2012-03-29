#!/bin/bash

echo "Shutting down redis..."
redis-cli shutdown
echo "Redis shutdown"

PID_FILE="server.pid"
PID=`cat ${PID_FILE}`
kill ${PID}
rm -f ${PID_FILE}


echo "Server stopped"
echo "... with process id ${PID}"
echo ""
echo "Start it up again by running ./start.sh"