const QuizSchema = require("../models/quizModel");

const createQuestion = async (req, res) => {
    const { question, answer, option1, option2, option3 } = req.body;

    try {
        const quizQuestion = await QuizSchema.createQuestion(question, answer, option1, option2, option3);
        res.status(200).json({ quizQuestion: quizQuestion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const usedQuestions = new Set();

const getQuestion = async (req, res) => {

    try {
        const totalQuestions = await QuizSchema.countDocuments();
        while(true){
            if(usedQuestions.size >= totalQuestions) usedQuestions.clear();
            const randomIndex = Math.floor(Math.random() * totalQuestions);
            if(usedQuestions.has(randomIndex)) continue;
            quizQuestion = await QuizSchema.findOne().skip(randomIndex);
            usedQuestions.add(randomIndex);
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
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      const results = await QuizSchema.find({ question: { $regex: regex } });
      res.status(200).json({ results: results });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createQuestion, getQuestion, searchQuestion };