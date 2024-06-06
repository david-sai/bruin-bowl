const express = require("express"); //Creates router instances

const { createQuestion, getQuestion, searchQuestion } = require("../controllers/quizController"); //Quiz-related controller fns

const router = express.Router(); //Defines routes for quiz operations

router.post("/create", createQuestion);

router.post("/search", searchQuestion);

router.get("", getQuestion);

module.exports = router; //Export the quiz router to be mounted by the main app.