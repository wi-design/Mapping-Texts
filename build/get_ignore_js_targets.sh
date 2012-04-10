#!/bin/sh
sed -ne '
      /<!-- js ignore start -->/,/<!-- js ignore stop -->/ {
        s|\s*<script src="static/js/\([^"]*\).*|\1 |p
      }'
