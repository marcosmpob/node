var fs = require('fs');

//fs = file system

/*fs	
	.writeFile('data.txt','Hello World', function(err){
		if(err){
			throw err;
		}
	})*/


fs
	.readFile('data.txt',function(err, data){
		if(err){
			throw err;
		}

		console.log(data.toString('utf8'));
	})

