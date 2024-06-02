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
  }, 
  avatar: {
    type: String,
    required: true,
  }
});

userSchema.statics.signup = async function (username, password, score, avatar) {
  if (!username || !password || !avatar) {
    throw Error("Missing Information");
  }
  const doesUserExist = await this.findOne({ username });
  if (doesUserExist) {
    return "exists";
  }
  const user = await this.create({ username, password, score, avatar });
  return user;
};


//TODO: JONATHAN PAI
// userSchema.statics.getUserScore = async function (username) {
//   if (!username) {
//     throw Error("Called Function getUserScore without a username!");
//   }
//   const user = await this.findOne({ username });
//   if (!user) {
//     return null;
//   }
//   return {
//     score: user.score
//   };
// };


module.exports = mongoose.model("User", userSchema);