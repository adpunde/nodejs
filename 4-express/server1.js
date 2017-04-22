var express = require('express');
var morgan = require('morgan');

var hostip = '10.0.0.100';
var port = 4000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostip, function() {
    console.log('Server running at: http://' + hostip + ':'+ port);
});
