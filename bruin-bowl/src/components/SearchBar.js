import React, { useState } from 'react';
import { searchQuestion } from '../api/api.js';
import QuestionBox from './QuestionBox.js';

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
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Enter something..."
      />
      <button onClick={handleSubmit}>Submit</button>
      {results != null && 
        results.map((questionObj) => (
        <QuestionBox questionBody={questionObj.question}/>
      ))
      }
    </div>
  );
}

export default SearchBar;