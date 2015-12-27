var express = require('express');
var path = require('path');

var app = express(); // better instead

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(8080, function() {
	console.log('Navigate to http://localhost:8080 in your web browser');
});