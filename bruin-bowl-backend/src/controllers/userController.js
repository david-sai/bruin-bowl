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

module.exports = { signup }
