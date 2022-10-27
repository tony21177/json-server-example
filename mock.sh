#!/bin/bash

function help() {
    echo "argument error:"
    echo "for example"
    echo "./mock.sh notification-groups.json"
}

json_file=$1
if [ $# -ne 1 ]; then
    help
    exit 1
fi

json-server --port 8083 --routes routes.json --watch $1
