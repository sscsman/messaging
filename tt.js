var pg = require('pg');
var async = require('async');


var conString = process.env.DATABASE_URL || "postgres://wmeohhogobxxep:1b10c14f241938b60ee36f2402d7b981e85956cdae37c9f5139df08beb857033@ec2-54-235-181-120.compute-1.amazonaws.com:5432/dc4346s2chta1g?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

//process.env.DATABASE_URL || "postgres://[ユーザ名]:[パスワード]@[ホスト名]:[ポート]/[DBメンテナンス]

var server = http.createServer();
server.on('request', doRequest);
server.listen(1008);
function doRequest(request, response) {
    var client = new pg.Client(conString);
    client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        if(err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        response.write(result.rows[0].theTime + "");
        response.end();
        client.end();
    });
});
};
