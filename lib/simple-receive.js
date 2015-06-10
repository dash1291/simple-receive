var express = require('express'),
    fs = require('fs'),
    argv = require('optimist').argv,
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

/* Setup config variables */
var uploadDirectory = argv.uploaddir ? argv.uploaddir : __dirname + '/uploads';
var bindPort = argv.port ? argv.port : 3000;
var bindAddress = argv.address ? argv.address : '127.0.0.1';

app.get('/', function(req, res) {
    fs.readFile('templates/index.html', function(err, data) {
        if (err) {
            res.send('Oops.');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

app.post('/upload', function(req, res) {
    var fileData = req.files.file;
    var path = fileData.path;
    var fileName = fileData.name;
    var newPath = uploadDirectory + '/' + fileName;
    fs.rename(path, newPath, function (err) {
        console.log('File received: ' + newPath);
    });
    res.send('done');
});

app.use('/static', express.static(__dirname + '/static'));

app.listen(bindPort, bindAddress);
console.log('Listening on ' + bindAddress + ':' + bindPort);

module.exports.app = app;
