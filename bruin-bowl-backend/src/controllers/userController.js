//User Controller
const UserSchema = require("../models/userModel");

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserSchema.signup(username, password);
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    const {username} = req.query; //get user metadata from req
    try {
        if (!username) {
            throw Error("Missing Username...");
          }
          const user = await UserSchema.findOne({ username });
          if (!user) {
            return null;
          }
          const metadata =  {
            password: user.password,
            score: user.score
          };
        if (!metadata) {
            return res.status(404).json({error: "User not found! Please try again with a different username!"});
        }
        res.status(200).json(metadata)
    } catch (error) {
        res.status(400).json({error: "Server Error!"})
    }
}

const deleteUser = async(req, res) => {
    const {username} = req.body;
    try {
        if (!username) {
            throw Error("Missing Username...");
          }
          const deleteResult = await UserSchema.deleteOne({ username });
          if (deleteResult.deletedCount === 0) {
            throw Error("Function deleteUser did not delete any users!")
          }
        res.status(200).json({ message: "User successfully deleted!"})
    } catch (error) {
        res.status(400).json({error: "Server Error!"})
    }
}


const updateScorebyUser = async (req, res) => {
    const { username, newScore } = req.body;
    try {
        const result = false;
        if (!username || amount === undefined)
            throw Error("Missing information for score update");
          const user = await UserSchema.findOne({ username: username});
        
          if (!user) {
            result = false;
          }
        
          user.score += amount;
          await user.save();
          result = true;
        
        if (!result) {
            return res.status(400).json({ error: "Error occurred with replacing user (${username})\'s score!" });
        }
        res.status(200).json({ message: "User score successfully updated to: ${newScore}" });
    } catch (error) {
        res.status(400).json({ error: "Server Error!" });
    }
}
/*
use find and google how to sort based on a number key attribute, then this should have an array of users
*/
const getLeaderBoard = async (req, res) => {
    try {
        const usernames = await UserSchema.find({}).sort({score : -1});
        res.status(200).json({ usernames });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = { signup, getUser, deleteUser, updateScorebyUser, getLeaderBoard};


