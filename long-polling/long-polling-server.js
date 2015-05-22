var http = require("http");
var pendingResponse;
var chunks = '';

var connectionCount = 0;

http.createServer(function (request, response) {
  console.log('new connection! (%d)', ++connectionCount);

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
}).listen(8000);

process.openStdin().addListener('data', function (chunk) {
  if (pendingResponse) {
    pendingResponse.writeHead(200, { 'Content-Type': 'text/plain' });
    pendingResponse.end(chunk);
    pendingResponse = null;

  } else {
    chunks += chunk;
  }
});