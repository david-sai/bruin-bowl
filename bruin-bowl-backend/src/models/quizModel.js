const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  }
});

quizSchema.statics.createQuestion = async function (question, answer, option1, option2, option3) {
    if (!question || !answer || !option1 || !option2 || !option3) {
      throw Error("Missing Information");
    }

    const doesQuestionExist = await this.findOne({ question });
    if (doesQuestionExist) {
      return doesQuestionExist;
    }
  
    const quizQuestion = await this.create({ question, answer, option1, option2, option3 });
    return quizQuestion;
  };

module.exports = mongoose.model("Quiz", quizSchema);