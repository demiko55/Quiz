const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  name: String,
  language: Number,//english 0, chinese 1
  type: Number,//music 0, physics 1， Geography 2
  score: {type: Number, default: 0}
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;