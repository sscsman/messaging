var express = require('express');
var router = express.Router();
var pg = require('pg');


router.get('/', function(req, res, next) {
    if (req.session.user_id) {

//      var query = 'array_to_string(SELECT friends FROM users WHERE user_id =\''+req.session.user_id+ '\'  , \'_\')';
//var query = ' SELECT array_to_string (friends,\'_\') FROM users WHERE user_id ='+req.session.user_id;
      var conect = require('./dbconnect');
      var con = conect();
/*
          con.connect(function(err, client) {

              if (err) {
                  console.log('Connection Error:', err);

              } else {
    client.query(query, function(err, rows) {
var datum =  rows.rows[0].array_to_string.split('_');
var query2=" SELECT user_name FROM users WHERE ";
datum.forEach(function(num){
query2 += ' user_id ='+num+' or';
});
query2 = query2.substr( 0, query2.length-2 );
console.log(query2);
  client.query(query2, function(err, ro) {
console.log(ro.rows[0].user_name);
var nlist;
ro.rows.forEach(function(names){
  nlist += names.user_name;
});
console.log(nlist[0]+nlist[1]);
res.render('friend', {
data: datum

});
});

    });
  }  });
*/


con.connect(function(err, client) {

    if (err) {
        console.log('Connection Error:', err);
    } else {
var query = ' SELECT user_name FROM users';
client.query(query, function(err, rows) {
console.log(rows.rows.length);
var dataa=[];
for (var i=0 ; i<rows.rows.length ; i++){
dataa.push(rows.rows[i].user_name);
}
res.render('friend', {
  mid:req.session.user_id,
data: dataa
});

});
}});





    } else {
        res.redirect('/login');
    }



});

module.exports = router;
