var express = require('express');
var router = express.Router();
var db = require('./db');

///////////////////////////////////////////////////////////////////////////////
//获取主页歌曲
router.get('/api/kugou/indexList', function(req, res){
  console.log("request index songs");
  db.index.find(function(err, docs){
    if (err) {
      console.log('出错'+ err);
      return
    }
    res.json(docs)
  })
/* 	  res.json([{
	  title: "shabi",
	  singer: "tommy",
	  img: "",
	  url: ""
	}]) */
});
router.get('/api/kugou/rankList/:pageId', function(req, res){
  console.log("request rank songs for " + req.params.pageId);
/*   db.index.find(function(err, docs){
    if (err) {
      console.log('出错'+ err);
      return
    }
    res.json(docs)
  }) */
});


module.exports = router
