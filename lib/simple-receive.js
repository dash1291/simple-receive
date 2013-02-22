var express = require('express'),
	nunjucks = require('nunjucks'),
	fs = require('fs'),
	argv = require('optimist').argv;

var app = express();
app.use(express.bodyParser());

/* Setup config variables */
var uploadDirectory = argv.uploaddir ? argv.uploaddir : __dirname + '/uploads';
var bindPort = argv.port ? argv.port : 3000;
var bindAddress = argv.address ? argv.address : '127.0.0.1';

var jinjEnv = new nunjucks.Environment(new nunjucks.FileSystemLoader('templates'));

app.get('/', function(req, res) {
	var t = jinjEnv.getTemplate('index.html');
	var response = t.render({});
	res.send(response);
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