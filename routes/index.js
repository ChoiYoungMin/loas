var express = require('express');
var router = express.Router();
var Loasjoin = require('../model/loasjoin');

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
  

  console.log(loasjoins);
  

  loasjoins.save(function(err){
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
    server : Number(req.body.server),
    level : Number(req.body.level),
    done : Number(req.body.done),
  }).sort({'_id': -1}).limit(100).exec(function(err,userpost) {
    if(err) throw res.json({result: err});;
    res.json({result: userpost});
  });
  

});

module.exports = router;

