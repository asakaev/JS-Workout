var http = require("http");
var pendingResponse;
var chunks = '';

var connectionCount = 0;
var server = http.createServer();

server.on('request', function (request, response) {
  console.log('%d: %s %s', ++connectionCount, request.method, request.url);

  request.on('close', function () {
    console.log('client dropped connection');
  });

  if (chunks.length) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(chunks);
    chunks = '';

  } else {
    pendingResponse = response;
  }
});

server.on('connection', function(){
  console.log('tcp connection');
});

//server.on('close', function() {
//  console.log('closed');
//});

//server.on('connect', function() {
//  console.log('http connect');
//});

server.listen(8000);

process.openStdin().addListener('data', function (chunk) {
  if (pendingResponse) {
    pendingResponse.writeHead(200, { 'Content-Type': 'text/plain' });
    pendingResponse.end(chunk);
    pendingResponse = null;

  } else {
    chunks += chunk;
  }
});