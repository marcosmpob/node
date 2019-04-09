var fs = require('fs');

//fs = file system

//escrever arquivo
/*fs	
	.writeFile('data.txt','Hello World', function(err){
		if(err){
			throw err;
		}
	})*/


//ler arquivo 
/*fs
	.readFile('data.txt',function(err, data){
		if(err){
			throw err;
		}

		console.log(data.toString('utf8'));
	})*/


//listar arquivos do diretório "."
/*	fs
		.readdir('.',function(err,files){
			if(err){
				throw err;
			}

			for(var file in files){
				console.log(files[file]);
			}
		})*/

//listar arquivos ".js"
	fs

		.readdirSync('.')
		.filter(function(file){
			return (file.endsWith('.js'))
		})
		.forEach(function(file){
			console.log(file)
		})