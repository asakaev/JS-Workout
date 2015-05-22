var http = require("http");
var pendingResponse;
var chunks = '';

http.createServer(function (request, response) {
  if (chunks.length) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(chunks);
    chunks = '';

  } else {
    pendingResponse = response;
  }
}).listen(8000);

process.openStdin().addListener("data", function (chunk) {
  if (pendingResponse) {
    pendingResponse.writeHead(200, { 'Content-Type': 'text/plain' });
    pendingResponse.end(chunk);
    pendingResponse = null;

  } else {
    chunks += chunk;
  }
});