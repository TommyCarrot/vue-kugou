var mongoose = require('mongoose')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb connected!")
});
mongoose.connect('mongodb://localhost/kugou')
//mongoose.connect('mongodb://7ef3b8f743344b6ea5d0cbb187584dfb:ff78f910acb649a581e084df0209ef75@mongo.duapp.com:8908/ecrHGfddKFjOiAEEZpZU');

var indexSchema = mongoose.Schema({
  title: String,
  singer: String,
  img: String,
  url: String
})

var Models = {
  index: mongoose.model('index', indexSchema),
}

module.exports = Models
