import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/questionBox.js';
import Timer from './components/Timer.js';
import { getQuestion } from './api/api.js';


function App() {
  const [correct, setCorrect] = useState(false); // Player guessed correct answer
  const [questionBody, setQuestionBody] = useState('Initial Value'); 
  const [answer, setAnswer] = useState('Initial Answer'); 
  const [option1, setOption1] = useState('Initial Option1'); 
  const [option2, setOption2] = useState('Initial Option2'); 
  const [option3, setOption3] = useState('Initial Option3'); 
  const [error, setError] = useState(""); // Player guessed correct answer
  

  useEffect(
    () => {
      const response = (data) => {
        if (data) {
          if (data["error"]) {
            setError(data["error"].message);
          } else {
            const questionJSON = data["quizQuestion"]
            setQuestionBody(questionJSON["question"])
            setAnswer(questionJSON["answer"])
            setOption1(questionJSON["option1"])
            setOption2(questionJSON["option2"])
            setOption3(questionJSON["option3"])
            setError("");
          }
        }
      };
      getQuestion(response);
    },
    []
  );

  const handleQuestionChange = () => {
    setQuestionBody('Updated Value');
  };

  return (
    <div>
      <>
        <PageTitle title="BruinBowl" />
        <QuestionBox questionBody={questionBody}/>
        <AnswerBar setVar={setCorrect} answer1={answer} answer2={option1} answer3={option2} answer4={option3} />
        <button onClick={handleQuestionChange}>Next Question</button>
        <Timer />
        
      </>
    </div>
  );
}

export default App;
