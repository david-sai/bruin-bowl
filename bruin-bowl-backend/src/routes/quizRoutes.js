const express = require("express");

const { createQuestion, getQuestion } = require("../controllers/quizController");

const router = express.Router();

router.post("/create", createQuestion);
router.get("", getQuestion);


module.exports = router;