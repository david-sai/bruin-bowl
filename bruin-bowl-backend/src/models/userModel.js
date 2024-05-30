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




/////////////////////////////////////////////////////////////////////////
//SCHEMA METHODS (USER MANIPULATION)
/////////////////////////////////////////////////////////////////////////

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

//Note: this is sort of redundant code. Do we really need getUserMetaData (maybe better for future planning)
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

/////////////////////////////////////////////////////////////////////////
//SCHEMA METHODS (SCORE MANIPULATION)
/////////////////////////////////////////////////////////////////////////
userSchema.statics.getUserScore = async function (username) {
  if (!username) {
    throw Error("Called Function getUserScore without a username!");
  }
  const user = await this.findOne({ username });
  if (!user) {
    return null;
  }
  return {
    score: user.score
  };
};

userSchema.statics.updateUserScore = async function (username, amount) {
  if (!username || amount === undefined)
    throw Error("Missing information for score update");
  const user = await this.findOne({ username: username});

  if (!user) {
    return false;
  }

  user.score += amount;
  await user.save();
  return true;

};

userSchema.statics.getAllUsernames = async function () {
  try {
    const usernames = await this.find({}).sort({score : -1});
    return usernames;
  }
  catch (error) {
    throw Error("Failed to fetch all usernames!");
  }

};
module.exports = mongoose.model("User", userSchema);