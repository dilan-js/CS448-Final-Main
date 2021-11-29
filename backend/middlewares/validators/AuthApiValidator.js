/**
 * @description Auth Api Validator
 */

/** Dependencies */


const { User } = require("../../database/models");


const register = async (req, res, next) => {
  console.log({req});
  next();
};



module.exports = {
  register
};
