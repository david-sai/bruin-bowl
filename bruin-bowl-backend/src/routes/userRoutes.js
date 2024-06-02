//USER ROUTES
//.catch essentially fowards any errors that occur during the processing of any request to our express error handling middleware.

const express = require("express");
const { signup, signin, deleteUser, getUserScore, updateScorebyUser, getUser, getLeaderBoard} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/get", getUser);

router.delete("/delete", deleteUser);

router.get("/getscore", getUserScore)

router.post("/updateScore", updateScorebyUser);

router.get("/leaderboard", getLeaderBoard);

module.exports = router;