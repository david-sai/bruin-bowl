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
        const metadata = await UserSchema.getUserMetaData(username);
        if (!metadata) {
            return res.status(404).json({error: "User not found! Please try again with a different username!"});
        }
        res.status(200).json(metadata)
    } catch (error) {
        res.status(500).json({error: "Server Error!"})
    }
}

const deleteUser = async(req, res) => {
    const {username} = req.body;
    try {
        const result = await UserSchema.deleteUserByUsername(username)
        if (!result) {
            return res.status(404).json({error: "User not Found!"})
        }
        res.status(200).json({ message: "User successfully deleted!"})
    } catch (error) {
        res.status(500).json({error: "Server Error!"})
    }
}


const updateScorebyUser = async (req, res) => {
    const { username, newScore } = req.body;
    try {
        const result = await UserSchema.updateScorebyUser(username, newScore);
        if (!result) {
            return res.status(404).json({ error: "Error occurred with replacing user (${username})\'s score!" });
        }
        res.status(200).json({ message: "User score successfully updated to: ${newScore}" });
    } catch (error) {
        res.status(500).json({ error: "Server Error!" });
    }
}
/*
use find and google how to sort based on a number key attribute, then this should have an array of users
*/
const getAllUsernames = async (req, res) => {
    try {
        const usernames = await UserSchema.getAllUsernames();
        res.status(200).json({ usernames });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { signup, getUser, deleteUser, updateScorebyUser, getAllUsernames};


