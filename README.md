# Overview of Software Components


The components for this project can be grouped in two categories: front-end software componented and back-end software components.


## Back-end components


### Data Storage
Application state or the application data is stored in a in-memory data-structure storage system called Redis (http://redis.io). It supports common data structures such as: sets, lists, sorted-sets, hash tables, on top of it being at its core a key-value storage system.

A copy of the database image is stored on hard disk and could also be backed-up on another server. Redis uses this image to load the data into memory when it restarts or when writes occur. Fortunately, this application is read-only and no writes occur. This eliminates much compexlity involved with durability/persistance of written data to Redis.

### Web Server
Apache sits in front of the application server and forwards request to it. It is essentialy a front-end proxy. Additionally, it assists in logging and caching. Please see the .httaccess file for more Apache configuration options.

### Application Server
The application server is built using Tornado (http://www.tornadoweb.org): a very performant Python (http://www.python.org) web framework. This server coordinates with Apache. When a request gets to the application server it processes it and performs computation based on the request.

In other words, it tells Redis what computation to perform and transforms the result data structure to JSON for the javascript client. (On the client-side JSON is easy to work with and fits the model of javascript applications of state or data (JSON), presentation via templates, and rendering the data with a template (Views)).

## Front-end components


### Backbone Javascript Framework
Backbone (http://documentcloud.github.com/backbone) is used to seperate data, presentation, and javascript event handling in a nice programming model of Collections/Models (holds data), Views (Represents a part of the HTML tree along with event handlers in the app), and Templates (uses mutache (http://mustache.github.com))

The user directly interacts with the Backbone javascript application and indirectly with the other components.

There are some other components in this project that are minor:
* Sass (http://sass-lang.com) was used to build the CSS front-end component

* jQuery (http://jquery.com), underscore.js (http://documentcloud.github.com/underscore) are javascript libraries that are required by Backbone.

* D3 (http://mbostock.github.com/d3) is a javascript library used for building the graphs in the Word Count and Named Entity Count sections.

* Flash (http://www.adobe.com/products/flashplayer.html) is used for copy text to the clipboard.

