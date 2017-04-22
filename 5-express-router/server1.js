var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostip = '10.0.0.100';
var port = 4000;

var router = express.Router();
router.use(bodyParser.json());
router.route('/')
.all(function(req, res, next) {
    console.log('app.all');
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    // Pass on the request for further processing
    next();
})
.get(function(req, res, next) {
    console.log('GET');
    res.end('GET received');
})
.post(function(req, res, next) {
    console.log('POST');
    res.end('POST request, name: ' + req.body.name);
})
.put(function(req, res, next) {
    console.log('PUT');
    res.end('PUT received, name: ' + req.body.name);
})
.delete(function(req, res, next) {
    console.log('DELETE');
    res.end('DELETE received, name: ' + req.body.name);
});

var app = express();
app.use(morgan('dev'));
app.use('/', router);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostip, function() {
    console.log('Server running at: http://' + hostip + ':'+ port);
});
