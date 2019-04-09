var querystring = require('querystring');

function handle(request, response){
	response.writeHead(200,{
		'Content-Type': 'text/html'
	});

	var body = '';

	request.on('data',function(data){
		body += data.toString();
	});

	request.on('end',function(){
		var decode = querystring.parse(body);

		console.log(decode);
	});
	response.write('<!DOCTYPE "html">');
	response.write('<html>');
	response.write('<body>');
	response.write('<head></head>');
	response.write('<h1>Hello from http module Son</h1>');
	response.write('</body');
	response.write('</html>');
	response.end();
}

//module.exports = handle;
exports.fn = handle;