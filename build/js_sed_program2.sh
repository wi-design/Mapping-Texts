#!/bin/sh
sed '
      /<!-- js compile start -->/,/<!-- js compile stop -->/ {
        /<!-- js compile start -->/ i\
        <script src="static/js/'"$1"'"></script>
        d
      }'
