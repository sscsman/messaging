var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    if (req.session.user_id) {

      res.render('message', {

      });

    } else {
        res.redirect('/login');
    }
});

//io.on('connection', (socket) => {
//  console.log('a user connected');
//});




module.exports = router;
