import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/QuestionBox.js';
import Timer from './components/Timer.js';
import { getQuestion } from './api/api.js';
import AnswerIndicator from './components/AnswerIndicator.js';

// For AnswerIndicator
export const Status = {
  NOT_ANSWERED: 0,
  CORRECT_ANSWER: 1,
  WRONG_ANSWER: 2,
  TIMEOUT: 3,
};

function App() {
  const [correct, setCorrect] = useState(false); // Player guessed correct answer
  const [questionBody, setQuestionBody] = useState('Initial Value');
  const [answer, setAnswer] = useState('Initial Answer');
  const [option1, setOption1] = useState('Initial Option1');
  const [option2, setOption2] = useState('Initial Option2');
  const [option3, setOption3] = useState('Initial Option3');
  const [error, setError] = useState(""); // Player guessed correct answer
  const [status, setStatus] = useState(Status.NOT_ANSWERED);
  const [questionNumber, setQuestionNumber] = useState(0);

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
    [questionNumber]
  );

  const handleQuestionChange = () => {
    setStatus(Status.NOT_ANSWERED);
    setQuestionNumber(questionNumber + 1);
  };


  return (
    <div>
      <>
        <PageTitle title="BruinBowl" />
        <QuestionBox questionBody={questionBody}/>
        <AnswerBar status={status} setStatus={setStatus} setVar={setCorrect} answer={answer} wrong1={option1} wrong2={option2} wrong3={option3} />
        <button onClick={handleQuestionChange}>Next Question</button>
        <AnswerIndicator status={status} answer={answer} />
        <Timer questionNumber={questionNumber} setStatus={setStatus} status={status} />

      </>
    </div>
  );
}

export default App;
