import React, { useState } from 'react';
import { searchQuestion } from '../api/api.js';
import QuestionBox from '../components/QuestionBox.js';

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
          console.log(data);
          setResults(data["results"])
          setError("");
        }
      }
    };
    searchQuestion(keyword, response);
  }

  return (
    <div>
      <h1 className="font-bold text-3xl mb-1.5">Question Search</h1>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search for question"
        className="p-2"
      />
      <br></br>
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Search</button>
      {results != null &&
        results.map((questionObj) => (
          <QuestionBox questionBody={questionObj.question} />
        ))
      }
    </div>
  );
}

export default SearchBar;