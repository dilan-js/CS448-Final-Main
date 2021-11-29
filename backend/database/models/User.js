const { model, Schema } = require("mongoose");


/**
 * User Schema
 * @private
 */

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email:{
        type: String, 
        required: true, 
        trim: true
    },
    age:{
      type: String, 
      required: false, 
    },
    hearingImpaired:{
      type: Boolean, 
      default: false
    },
    visuallyImpaired:{
      type: Boolean, 
      default: false
    },
    hearingImpairedExplanation:{
      type: String, 
      trim: true,
    },
    visuallyImpairedExplanation:{
      type: String, 
      trim: true
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

/**
 * @typedef User
 */
module.exports = User;
