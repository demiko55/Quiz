const Source = require('../models/source.js');
const db = require('../../database/index.js');

const AddSource = async (formData) => {
  console.log('FormData', formData);

  return await Source.create(formData);
};
const Get = async (formData)=>{
  delete formData.name;
  console.log(formData)
  return await Source.find(formData);
}
module.exports = {AddSource, Get};
