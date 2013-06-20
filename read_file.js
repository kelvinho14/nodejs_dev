var fs = require('fs');
var domain = require('domain');

var d = domain.create();
d.on('error', function(err) {
	  console.error(err);
	});



d.run(function() {
	fs.readFile('ahello.txt','utf8', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	});
});

