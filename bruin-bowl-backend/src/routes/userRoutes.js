//USER ROUTES
//.catch essentially fowards any errors that occur during the processing of any request to our express error handling middleware.

const express = require("express");
const { signup, getUserMetaData, deleteUser, getUserScore, updateScorebyUser } = require("../controllers/userController");

const router = express.Router();
router.post("/signup", (req, res, next) => {
  signup(req, res).catch(next);
});

router.get("/retrieve", (req, res, next) => {
  getUserMetaData(req, res).catch(next);
});

router.delete("/delete", (req, res, next) => {
  deleteUser(req, res).catch(next);
});

router.get("/getscore", (req, res, next) => {
  getUserScore(req, res).catch(next);
});

router.put("/updatescore", (req, res, next) => {
  updateScorebyUser(req, res).catch(next);
});

router.get("/users/sorted-by-score", (req, res, next) => {
    returnAllUsers(req, res).catch(next);
});
module.exports = router;