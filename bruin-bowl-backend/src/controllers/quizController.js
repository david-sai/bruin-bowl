const QuizSchema = require("../models/quizModel");

const createQuestion = async (req, res) => {
    const { question, answer, option1, option2, option3, category } = req.body;

    try {
        const quizQuestion = await QuizSchema.createQuestion(question, answer, option1, option2, option3, category);
        res.status(200).json({ quizQuestion: quizQuestion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const usedQuestions = new Map();
var lastQuestion = null;

const getQuestion = async (req, res) => {
    const { category } = req.query; 
    try {
        const totalQuestions = await QuizSchema.countDocuments({ category: category });

        if(totalQuestions === 0){
            return res.status(400).json({ error: "No Questions of this category in DB" });
        }
        if (!usedQuestions.has(category)) {
            usedQuestions.set(category, new Set());
        }

        const usedQuestionsSet = usedQuestions.get(category);

        while(totalQuestions > 0){
            if(usedQuestionsSet.size >= totalQuestions) usedQuestionsSet.clear(); //If i'm out of questions, clear out used questions
            const randomIndex = Math.floor(Math.random() * totalQuestions); //pick a random number
            if(usedQuestionsSet.has(randomIndex)) continue; 
            quizQuestion = await QuizSchema.findOne({ category: category }).skip(randomIndex); //select that random question
            if(lastQuestion !== null && lastQuestion === quizQuestion.question) continue;
            usedQuestionsSet.add(randomIndex);
            lastQuestion = quizQuestion.question
            break;
        }
        res.status(200).json({ quizQuestion: quizQuestion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const searchQuestion = async (req, res) => {
    const { keyword } = req.body;
    
    if (!keyword) {
      return res.status(400).json({ error: 'Keyword is required' });
    }
    try {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i'); //search for keyword (surrounded by word boundaries)
      const results = await QuizSchema.find({ question: { $regex: regex } });
      res.status(200).json({ results: results });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createQuestion, getQuestion, searchQuestion };