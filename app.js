var http = require('http');
var handle = require('./handle');
//var name = require('./name');

var events = require('events');
var emiter = new events.EventEmitter();

/*console.log(name);

var server = http.createServer(handle.fn);

emiter.on('say12',say);

function say(){
	console.log('Im saing...');
}*/
var server = http.createServer(handle.fn);

server.listen(3000, function(){
	console.log('Server is listening at port 3000');
});