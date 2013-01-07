var connect = require('connect')
  , http = require('http')
  , fs   = require('fs')
  , app = connect()
      .use(connect.static(__dirname + '/../'));

http.createServer(app).listen(8080);

fs.writeFileSync(__dirname + '/pid.txt', process.pid, 'utf-8')