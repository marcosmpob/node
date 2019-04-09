function handle(request, response){
	response.writeHead(200,{
		'Content-Type': 'text/html'
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