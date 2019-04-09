var http = require('http');
var handle = require('./handle');
var name = require('./name');

console.log(name);

var server = http.createServer(handle.fn);

server.listen(3000, function(){
	console.log('Server is listening at port 3000');
});