var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data){
	console.log('Before save'.blue);
	console.log(data);
	fs.writeFile('./tekst.txt', '\nThis how it looks after saving', function(err){
		if (err) throw err;
		console.log('Saving the data'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data){
			console.log('Data after saving'.blue)
			console.log(data);
		});
	});
});

fs.readdir ('.', function(err, files){
	var data = '';
	for (index in files){
		data += files[index];
	}
		fs.writeFile('file.txt', data, function(err){
			if (err) throw err;
		console.log('success');
		});
});

