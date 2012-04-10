#!/bin/sh
sed -ne '
      /<!-- js compile start -->/,/<!-- js compile stop -->/ {
        s|\s*<script src="static/js/\([^"]*\).*|\1 |p
      }'
