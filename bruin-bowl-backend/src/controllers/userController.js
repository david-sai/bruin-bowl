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

const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ error: "Missing Fields"});
          }
        const user = await UserSchema.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Not Found"});
        }
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    const {username} = req.query; 
    try {
        if (!username) {
            throw Error("Missing Username...");
        }
        const user = await UserSchema.findOne({ username });
        if (!user) {
            return res.status(400).json({error: "User Not Found!"});
        }
        res.status(200).json({ user: user })
    } catch (error) {
        res.status(400).json({error: "Get User Error!"})
    }
}

const deleteUser = async(req, res) => {
    const {username} = req.body;
    try {
        if (!username) {
            throw Error("Missing Username...");
        }
        const deleteResult = await UserSchema.deleteOne({ username });
        if(deleteResult.deletedCount === 0){ //When you've deleted 0, then error
            return res.status(400).json({error: "User Not Found!"})
        }
        res.status(200).json({ message: "User successfully deleted!"})
    } catch (error) {
        res.status(400).json({error: "Deletion Failed!"})
    }
}


const updateScorebyUser = async (req, res) => {
    const { username, amount } = req.body;
    try {
        if (!username || !amount) throw Error("Missing information for score update");

        await UserSchema.updateOne(
            { username: username },
            { $inc: { score: amount } } //increment by amount
        );

        const user = await UserSchema.findOne(
            { username: username },
        );

        if (!user) {
            return res.status(400).json({ error: `Error occurred with replacing user (${username})\'s score!` });
        }
        await user.save();
        res.status(200).json({ message: `User score successfully updated to: ${user.score}` });
    } catch (error) {
        res.status(400).json({ error: "Update Score Error!" });
    }
}

const getLeaderBoard = async (req, res) => {
    try {
        const usernames = await UserSchema.find({}).sort({score : -1}); //sort in descending order
        res.status(200).json({ usernames });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = { signup, signin, getUser, deleteUser, updateScorebyUser, getLeaderBoard};


