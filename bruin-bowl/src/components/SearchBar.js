import React, { useState } from 'react';
import { searchQuestion } from '../api/api.js';
import QuestionBox from './QuestionBox.js';
import QuestionSearchDisplay from './QuestionSearchDisplay.js';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = () => {
    // Call the function when the button is clicked
    const response = (data) => {
      if (data) {
        if (data["error"]) {
          setError(data["error"].message);
        } else {
          setResults(data["results"])
          setError("");
        }
      }
    };
    searchQuestion(keyword, response);
  }

  return (
    <div>
      <h1 className="font-bold text-bruin-darkgold text-3xl mb-1.5">Question Search</h1>

      <p className="mb-4">Search by keywords such as 'UCLA'</p>

      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search for question"
        className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
      />
      <br></br>
      <button onClick={handleSubmit} className="mt-4 px-5 py-2 bg-bruin-gold text-white rounded-full text-xl">Search</button>


      {results !== null &&
        results.map((questionObj) => (
          <QuestionSearchDisplay question={questionObj} />
        ))
      }
    </div>
  );
}

export default SearchBar;