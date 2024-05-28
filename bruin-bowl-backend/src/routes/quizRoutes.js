const express = require("express");

const { createQuestion, getQuestion, searchQuestion } = require("../controllers/quizController");

const router = express.Router();

router.post("/create", createQuestion);
router.post("/search", searchQuestion);
router.get("", getQuestion);


module.exports = router;