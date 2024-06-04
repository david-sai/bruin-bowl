import React, { useState } from 'react';
import { createQuestion } from '../api/api.js';
import { CATEGORIES } from '../context/GameContext'

function AddQuestions() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [wrong1, setWrong1] = useState('');
  const [wrong2, setWrong2] = useState('');
  const [wrong3, setWrong3] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoryStrings = Object.values(CATEGORIES);


  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };
  const handleChangeAnswer = (event) => {
    setAnswer(event.target.value);
  };
  const handleChangeWrong1 = (event) => {
    setWrong1(event.target.value);
  };
  const handleChangeWrong2 = (event) => {
    setWrong2(event.target.value);
  };
  const handleChangeWrong3 = (event) => {
    setWrong3(event.target.value);
  };
  const handleChangeCategory = (index) => {
    setCategoryIndex(index);
  }

  const handleSubmit = (e) => {
    const jsonData = {
      question,
      answer,
      option1: wrong1,
      option2: wrong2,
      option3: wrong3,
      category: categoryStrings[categoryIndex]
    }

    const response = (data) => {
      if (data) {
        if (data["error"]) {
          setError(data["error"].message);
        } else {
          console.log(data);
          setResults(data["results"])
          setError("");
        }
      }
    };

    createQuestion(jsonData, response);
  }

  const selectedStyling = "bg-bruin-gold ";
  const unselectedStyling = "bg-transparent border-2 border-bruin-darkgold";

  return (
    <div>
      <h1 className="font-bold text-3xl mb-1.5">Add Question</h1>
      <h2 className="text-xl mb-1.5">Question Prompt</h2>
      <input
        type="text"
        value={question}
        onChange={handleChangeQuestion}
        placeholder="Question Prompt"
        className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
      />
      <br></br>
      <br></br>
      <h2 className="text-xl mb-1.5">Correct Answer</h2>
      <input
        type="text"
        value={answer}
        onChange={handleChangeAnswer}
        placeholder="Correct Answer"
        className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
      />
      <br></br>
      <br></br>
      <h2 className="text-xl mb-1.5">Wrong Answers</h2>
      <input
        type="text"
        value={wrong1}
        onChange={handleChangeWrong1}
        placeholder="Wrong Answer"
        className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        value={wrong2}
        onChange={handleChangeWrong2}
        placeholder="Wrong Answer"
        className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        value={wrong3}
        onChange={handleChangeWrong3}
        placeholder="Wrong Answer"
        className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
      />
      <br></br>
      <br></br>
      <h2 className="text-xl mb-1.5">Category</h2>
      {categoryStrings.map((category, index) => { // Creates a button for each category
        return (
          <div onClick={() => handleChangeCategory(index)} className="mb-2 cursor-pointer">
            <span className={`ml-2 w-4 h-4 inline-block rounded-full
                ${index === categoryIndex ? selectedStyling : unselectedStyling}`} />
            <p className="ml-2 bg-bruin-gold cursor-pointer bg-opacity-15 rounded-full py-1 px-3 inline-flex items-center">
              {category}
            </p>
          </div>
        );
      })}
      <button onClick={() => handleSubmit()} className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
    </div>
  );
}

export default AddQuestions;