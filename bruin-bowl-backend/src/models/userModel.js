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

///////////////////////////////////////////////////////////////
//SCHEMA METHODS
///////////////////////////////////////////////////////////////

userSchema.statics.signup = async function (username, password) {
  if (!username || !password) {
    throw Error("Missing Information");
  }
  const doesUserExist = await this.findOne({ username });
  if (doesUserExist) {
    return doesUserExist;
  }
  const user = await this.create({ username, password });
  return user;
};

userSchema.statics.getUserMetaData = async function (username) {
    if (!username) {
      throw Error("Missing Username...");
    }
    const user = await this.findOne({ username });
    if (!user) {
      return null;
    }
    return {
      password: user.password,
      score: user.score
    };
};

userSchema.statics.deleteUserByUsername = async function (username) 
{
  try {
    if (!username) {
      throw Error("Missing Username...");
    }
    const deleteResult = await this.deleteOne({ username });
    if (deleteResult.deletedCount === 0) {
      return false;
    }
    else {
      return true;
    }
  }
  //test
  catch (error) {
    throw error;
  }
}
module.exports = mongoose.model("User", userSchema);