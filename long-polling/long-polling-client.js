var http = require('http');

//var options = {
//  host: 'notification-service.livetex.omnibuild',
//  path: '/account:568:site:10006470:visitor:efg0g8u8vl8r529',
//  port: '80',
//  method: 'GET'
//};

var reconnectCount = 0;

var options = {
  host: '127.0.0.1',
  path: '/',
  port: '8000',
  method: 'GET'
};

var callback = function (response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log('response from server: ' + str);
    console.log('reconnect! (%d)', ++reconnectCount);
    http.request(options, callback).end();
  });
};

http.request(options, callback).end();