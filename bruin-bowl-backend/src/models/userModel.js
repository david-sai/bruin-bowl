const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const argon2 = require('argon2'); //Password hashing module that has improved brute-force defense

//Define schema for user model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, //converts usernames to all lowercase
    trim: true, //means that it removes whitespace from both ends of string
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0 //sets default score to 0
  }, 
  avatar: {
    type: String,
    required: true, //NOTE: avatar IS REQUIRED
  }
});

// Middleware to hash the passwords using argon2
userSchema.pre('save', async function(next) {
  // Hash password only if it has been modified or is new
  if (!this.isModified('password'))  return next(); //skips this if password hasn't been changed at all

  try {
    //config options for argon2 (details below)
    const argon2options = {
      type: argon2.argon2id, 
      memory: 131072, //128 MB memory for higher security
      timeCost: 6, //high timecost for more secure hashing (but slower)
      parallelism: 2 //Use 2 threads to compute hash
};

    // Hash the password using argon2 
    const hash = await argon2.hash(this.password, argon2options);
    // Replace the old string password with the hashed one
    this.password = hash;
    next();
  } catch (err) {
    console.log("Error occured within argon2 middleware hashing!");
    throw err;
  }
});

//Static method which signs up a user
userSchema.statics.signup = async function (username, password, score, avatar) {
  //Error handling, makes sure that all the fields are provided
  if (!username || !password || !avatar) {
    throw Error("Missing Information");
  }
  //If user exists return
  const doesUserExist = await this.findOne({ username });
  if (doesUserExist) {
    return "exists";
  }
  //Create & return new user otherwise
  const user = await this.create({ username, password, score, avatar});
  return user;
};

module.exports = mongoose.model("User", userSchema);