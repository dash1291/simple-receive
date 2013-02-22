simple-receive
==============

Simple HTTP server that does (just) file uploads.

Created out of the personal need of a simple HTTP service that allows others to upload files to your computer (server).

Environment
===========

The server requires node.js to be installed.

Installing
==========

npm -g install git://github.com/dash1291/simple-receive.git

After installing, make sure `simple-receive` is under a directory in your PATH env. variable.

Running
=======

`simple-receive --port=8000 --address=0.0.0.0 --uploaddir=/Users/me/uploads`

`port` - Listening port.

`address` - Binding address.

`uploaddir` - Absolute path to the directory where files should saved (without trailing backslash).