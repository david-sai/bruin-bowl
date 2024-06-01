//USER ROUTES
//.catch essentially fowards any errors that occur during the processing of any request to our express error handling middleware.

const express = require("express");
const { signup, getUserMetaData, deleteUser, getUserScore, updateScorebyUser, getUser, getLeaderBoard} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);

router.get("/retrieve", getUser);

router.delete("/delete", deleteUser);

// router.get("/getscore", getUserScore)

router.post("/updateScore", updateScorebyUser);

router.get("/leaderboard", getLeaderBoard);

module.exports = router;