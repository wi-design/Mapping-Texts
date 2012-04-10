#!/bin/sh
sed '
      /<!-- js concat start -->/,/<!-- js concat stop -->/ {
        /<!-- js concat start -->/ i\
        <script src="static/js/'"$1"'"></script>
        d
      }'
