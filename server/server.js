
/*-------server.js---------*/
/////////////////////////////////
// 服务器入口
var express = require('express');
var bodyParser = require('body-parser');///////////
var router = require('./router');
var app = express();

app.use(bodyParser.json());////////
app.use(bodyParser.urlencoded({ extended: false }));///////////////
app.use(router)

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(18080, function() {
  console.log("start at localhost:18080")
});

//path.join(__dirname, '../dist/')


