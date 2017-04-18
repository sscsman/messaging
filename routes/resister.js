var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
var pg = require('pg');

var async = require('async');


var conString = process.env.DATABASE_URL || "postgres://wmeohhogobxxep:1b10c14f241938b60ee36f2402d7b981e85956cdae37c9f5139df08beb857033@ec2-54-235-181-120.compute-1.amazonaws.com:5432/dc4346s2chta1g?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

router.get('/', function(req, res, next) {
  res.render('register', {
    title: '新規会員登録'
  });
});


router.post('/', function(req, res, next) {
  var userName = req.body.user_name;
  var email = req.body.email;
  var loginid = req.body.loginid;
  var password = req.body.password;
  var emailExistsQuery = 'SELECT * FROM users WHERE mail = "' + email + '" LIMIT 1';
  var loginidExistsQuery = 'SELECT * FROM users WHERE loginid = "' + loginid + '" LIMIT 1';
  var registerQuery = 'INSERT INTO users (user_name, mail, pw, loginid) VALUES ("' + userName + '", ' + '"' + email + '", ' + '"' + password + '", ' + '"' + loginid + '")'; // 変更
  connection.query(emailExistsQuery, function(err, email) {
    var emailExists = mail.length === 1;
    if (emailExists) {
      res.render('register', {
        title: '新規会員登録',
        emailExists: '既に登録されているメールアドレスです'
      });
    } else {
      connection.query(loginidExistsQuery, function(err, loginid) {
            var loginidExists = loginid.length === 1;
            if (loginidExists) {
              res.render('register', {
                title: '新規会員登録',
                emailExists: '既に登録されているメールアドレスです'
              });
            }else{
      connection.query(registerQuery, function(err, rows) {
        res.redirect('/login');
}
      }
      });
    }
  });
});



module.exports = router;
