const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0
  }
});

userSchema.statics.signup = async function (username, password) {
  if (!username || !password) {
    throw Error("Missing Information");
  }
  const doesUserExist = await this.findOne({ username });
  if (doesUserExist) {
    return "exists";
  }
  const user = await this.create({ username, password });
  return user;
};

module.exports = mongoose.model("User", userSchema);