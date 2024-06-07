const express = require("express");

const { 
    signup, 
    signin, 
    deleteUser, 
    getUserScore, 
    updateScorebyUser, 
    getUser, 
    getLeaderBoard
} = require("../controllers/userController");

const router = express.Router(); //Route initialization (from express)

//Routes for user authentication:
router.post("/signup", signup);
router.post("/signin", signin);

//Routes to get/delete users:
router.get("/get", getUser);
router.delete("/delete", deleteUser);

//Score management routes:
router.get("/getscore", getUserScore)
router.post("/updateScore", updateScorebyUser);

//Leaderboard retrieval route:
router.get("/leaderboard", getLeaderBoard);

module.exports = router;