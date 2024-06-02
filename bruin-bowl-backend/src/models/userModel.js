const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt') //for password hashing

const saltRounds = 10; //var that controls amnt of processing needed to compute hash (complexity)

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

//middleware to hash the passwords
userSchema.pre('save', function(next) {
  // hash password only if it's been modiified or new 
  if (!this.isModified('password')) 
    return next();
  // generate a salt and use it to hash the password
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      // replace the string password to the hashed one
      this.password = hash
      next();
    });
  });
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