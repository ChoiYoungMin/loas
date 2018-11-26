var express = require('express');
var router = express.Router();
var Loasjoin = require('../model/loasjoin');
var Islandjoin = require('../model/islandjoin');
var Changejoin = require('../model/changejoin');

/* GET home page. */
router.post('/api/join', function(req,res){
  var loasjoins = new Loasjoin({
    boss: req.body.boss,
    server : req.body.server,
    level : req.body.level,
    job: req.body.job,
    done :req.body.done,
    nickname :req.body.nickname,
    say :req.body.say,
    time: req.body.time,
    time_new : req.body.time_new
  });
  

  

  loasjoins.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});

  });
});


/* GET home page. */
router.post('/api/join/island', function(req,res){
  var islandjoin = new Islandjoin({
    name: req.body.name,
    server : req.body.server,
    job: req.body.job,
    nickname :req.body.nickname,
    say :req.body.say,
    time: req.body.time,
    time_new : req.body.time_new
  });
  


  islandjoin.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});

  });
});


/* GET home page. */
router.post('/api/join/change', function(req,res){
  var changejoin = new Changejoin({
    type: req.body.type,
    server : req.body.server,
    title: req.body.title,
    nickname :req.body.nickname,
    say :req.body.say,
    time: req.body.time,
    time_new : req.body.time_new
  });
  

  changejoin.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});

  });
});



router.post('/api/search', function(req,res){
  Loasjoin.find({ 
    boss : Number(req.body.boss),
    server : Number(req.body.server)
  }).sort({'_id': -1}).limit(50).exec(function(err,userpost) {
    if(err) throw res.json({result: err});;
    res.json({result: userpost});
  });
  

});




router.post('/api/search/island', function(req,res){
  Islandjoin.find({ 
    server : Number(req.body.server)
  }).sort({'_id': -1}).limit(50).exec(function(err,userpost) {
    if(err) throw res.json({result: err});;
    res.json({result: userpost});
  });
  

});



router.post('/api/search/change', function(req,res){
  Changejoin.find({ 
    type : Number(req.body.type),
    server : Number(req.body.server)
  }).sort({'_id': -1}).limit(50).exec(function(err,userpost) {
    if(err) throw res.json({result: err});;
    res.json({result: userpost});
  });
  

});

module.exports = router;

