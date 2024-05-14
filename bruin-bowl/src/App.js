import logo from './logo.svg';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/QuestionBox.js';
import React, { useState } from 'react';
import Timer from './components/Timer.js';

function App() {
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
        <AnswerBar />
      </>
    </div>
  );
}

export default App;
