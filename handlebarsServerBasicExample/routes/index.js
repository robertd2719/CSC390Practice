var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 390' , condition:true,arr:["mp1", "mp2", "mp3", "mp4", "fp"] });
});

router.get('/users', function(req, res, next){
    res.send("not implemented yet.");
});

router.get('/users/:id/detail', function(req, res, next){
    res.send("not implemented yet.");
});


module.exports = router;
