/**
 * @description Auth Api Controller
 */

/** Dependencies */




const { User } = require("../database/models");

const register = async (req, res) => {
  try {
   console.log({req});
    return res
      .status(200)
      .json({ message: "All good!"});
  } catch (e) {
    return res.status(422).json({ message: e.message });
  }
};

module.exports = {
  register
};
