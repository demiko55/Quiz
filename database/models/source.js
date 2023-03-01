const mongoose = require('mongoose');

const sourceSchema = mongoose.Schema({
  language: Number, //english 0, chinese 1
  type: Number,  //music 0, physics 1， Geography 2
  src: String, //.mp3
  options: Array,
  answer: String
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;