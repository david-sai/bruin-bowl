import React, { useState, useEffect } from "react";
import { STATUS } from "../pages/Questions";

function AnswerBar({ status, setStatus, answer, wrong1, wrong2, wrong3 }) {
  //Holds shuffed answers and index of selected answer
  const [answers, setAnswers] = useState([String]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleSubmit() {
    if (status === STATUS.NOT_ANSWERED) {
      if (answers[selectedIndex] === answer) {
        setStatus(STATUS.CORRECT_ANSWER);
      } else {
        setStatus(STATUS.WRONG_ANSWER);
      }
    }
  }

  //This useEffect shuffles the answers
  useEffect(() => {
    let answers = [answer, wrong1, wrong2, wrong3];
    const shuffledAnswers = shuffleArray(answers);
    setAnswers(shuffledAnswers);
    setSelectedIndex(null);
  }, [answer, wrong1, wrong2, wrong3]);

  //This fn uses the Fisher-Yates Algorithm to shuffle the answers array.
  function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Gets random index
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Shuffles i with that index
    }
    return shuffledArray;
  }

  //Handles the click which selects an answer
  function handleClick(index) {
    setSelectedIndex(index);
  }

  //For styling
  const selectedStyling = "bg-bruin-blue ";
  const unselectedStyling = "bg-transparent border-2 border-bruin-darkgold";
  
    return (
        <>
            {answers.map((answer, index) => {
                return (
                    <div key={index} onClick={() => handleClick(index)} className="mb-2 cursor-pointer">
                        <span className={`ml-2 w-4 h-4 inline-block rounded-full
                                ${index === selectedIndex ? selectedStyling : unselectedStyling}`} />
                        <p className={`ml-2 bg-opacity-15 text-bruin-gold rounded-full py-1 px-3 inline-flex items-center
                            ${index === selectedIndex ? "bg-bruin-blue" : "bg-bruin-gold"}`}>
                            {answer}
                        </p>
                    </div>
                )
            })}

      {status == STATUS.NOT_ANSWERED ? (
        <button
          onClick={() => handleSubmit()}
          className={`mt-4 px-4 py-2 rounded-full bg-bruin-gold text-white ${
            selectedIndex === null ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedIndex === null}
        >
          Submit
        </button>
      ) : null}
    </>
  );
}

export default AnswerBar;
