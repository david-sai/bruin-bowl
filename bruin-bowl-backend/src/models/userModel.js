const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const argon2 = require('argon2'); //Password hashing module that has improved brute-force defense

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

// Middleware to hash the passwords using argon2
userSchema.pre('save', async function(next) {
  // Hash password only if it has been modified or is new
  if (!this.isModified('password')) 
    return next();

  try {
    // Hash the password using argon2 
    const hash = await argon2.hash(this.password);
    // Replace the old string password with the hashed one
    this.password = hash;
    next();
  } catch (err) {
    next(err);
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
  const user = await this.create({ username, password, score, avatar});
  return user;
};

module.exports = mongoose.model("User", userSchema);