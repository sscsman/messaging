var express = require('express');
var router = express.Router();
var pg = require('pg');


router.get('/', function(req, res, next) {
    if (req.session.user_id) {
        res.redirect('/message');
    } else {
        res.render('login', {
            title: 'ログイン'
        });
    }
});

router.post('/', function(req, res, next) {

    var loginid = req.body.loginid;
    var password = req.body.password;
    var query = 'SELECT user_id FROM users WHERE loginid = \'' + loginid + '\' AND pw = \'' + password + '\' LIMIT 1';
    var conect = require('./dbconnect');
    var con = conect();


    con.connect(function(err, client) {

        if (err) {
            console.log('Connection Error:', err);

        } else {
            client.query(query, function(err, rows) {
                //console.log(rows.rows[0].user_id);
                //  var userId = rows.length? rows.rows[0].user_id: false;
                if (rows.rows[0] !== undefined) {
                    var userId = rows.rows[0].user_id;
                    console.log("aaaaaaaaaaaaa");
                } else {}

                if (userId) {
                    req.session.user_id = userId;
                    res.redirect('/message');
                } else {
                    res.render('login', {
                        title: 'ログイン',
                        noUser: 'メールアドレスとパスワードが一致するユーザーはいません'
                    });


                }
            });
        }

    });

});

module.exports = router;
