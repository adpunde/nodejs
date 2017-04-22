var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var hostip = '10.0.0.100';
var port = 4000;

var server = http.createServer(processRequest);

function processRequest(req, res) {
    var body = '<h1>Hello world !</h1>';
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(body);
};

server.listen(port, hostip, function() {
    console.log('Server running at: http://' + hostip + ':'+ port);
});
