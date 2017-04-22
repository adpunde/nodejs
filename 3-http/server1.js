var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var hostip = '10.0.0.100';
var port = 4000;

var server = http.createServer(processRequest);

function processRequest(req, res) {
    console.log('Request for ' + req.url + ' by method ' + req.method);
    if (req.method === 'GET') {
        var fileUrl = '/index.html';
        var filePath = path.resolve('.' + fileUrl);
        var fileExt = path.extname(filePath);

        if (fileExt === '.html') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(filePath).pipe(res);
            return;
        }
    }

    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('Bad request');
}

server.listen(port, hostip, function() {
    console.log('Server running at: http://' + hostip + ':'+ port);
});
