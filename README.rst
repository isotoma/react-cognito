=============
react-cognito
=============

Running the example
===================

The package `local-web-server` is included as a development dependency, so if
you have installed the development packages you should have the `ws` command in
`node_modules/.bin`.

First build the library, and then the examples, then change into the htdocs directory and run the webserver::

    webpack -d
    webpack -d --config webpack.examples.js
    cd examples/htdocs
    ws -s index.html

The -s means all requests are sent to the single page application.

