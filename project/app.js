var Dependency = require('./Dependency');
Dependency("Server",["http"],function (exports,require,module) {
   var http = require.http.createServer(function (request,response) {
       response.writeHeader(200);
       response.write("HI");
       response.end();
   });
    http.listen(1000);
    return http;
});
