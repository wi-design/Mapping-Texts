#!/bin/sh
sed '/<!-- css compile start -->/,/<!-- css compile stop -->/ {
        /<!-- css compile start -->/ i\
        <link rel="stylesheet" href="static/css/'"$1"'">
        d
      }'
