var express = require('express');
var app = express();
var path = require('path');
var port = 8080;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, function() {
	console.log('Server listening on port ' + port);
})