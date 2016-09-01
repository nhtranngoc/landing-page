var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.listen(80, function() {
	console.log('Server listening on port 80.');
})