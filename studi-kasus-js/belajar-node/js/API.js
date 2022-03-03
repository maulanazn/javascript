let http = require('http');
let coba = require('./coba');

http.createServer(function webAPI(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(coba.htmlA);
	res.end();
}).listen(8080);

console.log("server is running on localhost port 8080");



