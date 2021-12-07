const { model, Schema } = require("mongoose");

/**
 * Answer Schema
 * @private
 */

const ObjectId = Schema.Types.ObjectId;

const answerSchema = new Schema(
  {
    user:{
        type: ObjectId, 
        ref: "User"
    },
    question:{
        type: ObjectId, 
        ref: "Question"
    },
    answerValue:{
        type: String,
        required: true
    },
    answerTimer:{
        type: Number, 
        required: true
    }
  },
  {
    timestamps: true,
  },
);

const Answer = model("Answer", answerSchema);

/**
 * @typedef Answer
 */
module.exports = Answer;
