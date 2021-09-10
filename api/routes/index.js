var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index.jade', { title: 'Express' });
    res.send("Connected to the Server- index page");
});



module.exports = router;
