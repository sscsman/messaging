var express = require('express');
var router = express.Router();
var pg = require('pg');


var async = require('async');


router.get('/', function(req, res, next) {
    res.render('register', {
        title: '新規会員登録'
    });
});


router.post('/', function(req, res, next) {
  var conect = require('./dbconnect');
var con = conect();

    var userName = req.body.user_name;
    var email = req.body.email;
    var loginid = req.body.loginid;
    var password = req.body.password;
    var emailExistsQuery = 'SELECT mail FROM users WHERE mail = \''+ email +'\'  LIMIT 1 ';
    var loginidExistsQuery = 'SELECT loginid FROM users WHERE loginid = \''+ loginid +'\'  LIMIT 1 ';
    var registerQuery = 'INSERT INTO users (user_name, mail, pw, loginid) VALUES (\'' + userName + '\', ' + '\'' + email + '\', ' + '\'' + password + '\', ' + '\'' + loginid + '\');'; // 変更



    con.connect( function(err, client) {
        if (err) {
            console.log('Connection Error:', err);
            throw err;
        } else {

            client.query(emailExistsQuery, function(err, result) {
            client.query(loginidExistsQuery, function(err, result2) {
                  if(result.rowCount==0){
                    if(result2.rowCount==0){
                  console.log(result.rowCount);
                  console.log(result2.rowCount);
                  console.log(result);
client.query(registerQuery, function(err, result) {
if (err) {
  res.render('register', {
         title: 'エラー',
         emailExists: 'エラー'
       });

}
res.redirect('/login');

});

      //            console.log();
}else{
  res.render('register', {
         title: '新規会員登録',
         emailExists: '既に登録されているIDです'
       });
}}else{
  res.render('register', {
         title: '新規会員登録',
         emailExists: '既に登録されているメールアドレスです'
       });

}
});
            });


        }



    });

});




module.exports = router;
