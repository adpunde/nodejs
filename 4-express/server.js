var express = require('express');
var http = require('http');

var hostip = '10.0.0.100';
var port = 4000;

var app = express();

app.use(processRequest);

function processRequest(req, res, next) {
    var body = '<h1>Hello world !</h1>';
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(body);
}

var server = http.createServer(app);
server.listen(port, hostip, function() {
    console.log('Server running at: http://' + hostip + ':'+ port);
});
