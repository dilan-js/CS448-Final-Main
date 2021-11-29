/**
 * @description Experiment Api Validator
 */

/** Dependencies */


const { User, Question } = require("../../database/models");


const submit = async (req, res, next) => {
  console.log({req});
  next();
};



module.exports = {
  submit
};
