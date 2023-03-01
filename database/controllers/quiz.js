const Quiz = require('../models/quiz.js');
const db = require('../index.js');

const Create = async (formData) => {
  console.log('formData', formData);
  let re = await Quiz.create(formData);
  return re;
};
const Update = async (id)=>{
  let re = await Quiz.findById(id);
  console.log('re', re);
  re.score = re.score + 1;
  return await re.save();
}
const getScore = async (id)=>{
  return await Quiz.findById(id);
}
module.exports = {Create, Update, getScore};
