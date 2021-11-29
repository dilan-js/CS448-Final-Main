const { model, Schema } = require("mongoose");

/**
 * Answer Schema
 * @private
 */

const ObjectId = Schema.Types.ObjectId;

const answerSchema = new Schema(
  {
    user:{
        type: ObjectID, 
        ref: "User"
    },
    question:{
        type: ObjectID, 
        ref: "Question"
    },
    answerValue:{
        type: Number,
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
