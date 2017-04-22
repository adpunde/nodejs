var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostip = '10.0.0.100';
var port = 4000;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.all('/', function(req, res, next) {
    console.log('app.all');
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    // Pass on the request for further processing
    next();
});

app.get('/', function(req, res, next) {
    console.log('GET');
    res.end('GET received');
});

app.get('/:id', function(req, res, next) {
    console.log('GET', req.params.id);
    res.end('GET received, ID: ' + req.params.id);
});

app.post('/', function(req, res, next) {
    console.log('POST');
    res.end('POST request, name: ' + req.body.name);
});

app.put('/:id', function(req, res, next) {
    console.log('PUT');
    res.end('PUT received, ID: ' + req.params.id + ' name: ' + req.body.name);
});

app.delete('/', function(req, res, next) {
    console.log('DELETE');
    res.end('DELETE received, name: ' + req.body.name);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostip, function() {
    console.log('Server running at: http://' + hostip + ':'+ port);
});
