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
    const {username, password, score} = req.body; //get user metadata from req
    try {
        const metadata = await UserSchema.getUserMetaData(username);
        if (!metadata) {
            return res.status(404).json({error: "User not found! Please try again with a different username!"});
        }
        res.status(200).json({ password: password, score: score})
    } catch (error) {
        res.status(500).json({error: "Server Error!"})
    }
}

const deleteUser = async(req, res) => {
    const {username} = req.params;
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

module.exports = { signup }
module.exports = { getUser }
module.exports = { deleteUser }

