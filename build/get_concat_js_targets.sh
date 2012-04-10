#!/bin/sh
sed -ne '
      /<!-- js concat start -->/,/<!-- js concat stop -->/ {
        s|\s*<script src="static/js/\([^"]*\).*|\1 |p
      }'
