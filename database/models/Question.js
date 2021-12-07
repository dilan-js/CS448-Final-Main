const { model, Schema } = require("mongoose");

/**
 * Question Schema
 * @private
 */

const ObjectId = Schema.Types.ObjectId;

const questionSchema = new Schema(
  {
    questionTitle: {
      type: String,
      trim: true,
    },
    graphURL:{
      type: String, 
      required: true
    },
    soundURL:{
      type:String,
      trim: true
    },
    questionSortOrder:{
      type: Number, 
      unique: true
    }, 
    correctAnswer:{
      type: Number, 
      required: true
    }
  },
  {
    timestamps: true,
  },
);

const Question = model("Question", questionSchema);

/**
 * @typedef Question
 */
module.exports = Question;
