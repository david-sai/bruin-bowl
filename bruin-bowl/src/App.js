import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/QuestionBox.js';
import Timer from './components/Timer.js';

function App() {
  const [correct, setCorrect] = useState(false); // Player guessed correct answer
  const [questionBody, setQuestionBody] = useState('Initial Value'); 
  
  const handleQuestionChange = () => {
    setQuestionBody('Updated Value');
  };

  return (
    <div>
      <>
        <PageTitle title="BruinBowl" />
        <QuestionBox questionBody={questionBody}/>
        <button onClick={handleQuestionChange}>Next Question</button>
        <Timer />
        <QuestionBox />
        <AnswerBar setVar={setCorrect} />
      </>
    </div>
  );
}

export default App;
