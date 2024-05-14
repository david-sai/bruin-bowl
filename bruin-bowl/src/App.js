import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AnswerBar from './components/AnswerBar.js';
import PageTitle from './components/PageTitle.js';
import QuestionBox from './components/QuestionBox.js';

function App() {
  const [correct, setCorrect] = useState(false); // Player guessed correct answer

  return (
    <div>
      <>
        <PageTitle title="BruinBowl" />
        <QuestionBox />
        <AnswerBar setVar={setCorrect} />
      </>
    </div>
  );
}

export default App;
