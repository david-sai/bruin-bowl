import React from "react";
import AnswerBar from "../components/AnswerBar.js";
import QuestionBox from "../components/QuestionBox.js";
import SearchBar from "../components/SearchBar.js";
import Timer from "../components/Timer.js";
import { getQuestion } from "../api/api.js";
import AnswerIndicator from "../components/AnswerIndicator.js";
import { useEffect, useState } from "react";

// For AnswerIndicator
export const STATUS = {
  NOT_ANSWERED: 0,
  CORRECT_ANSWER: 1,
  WRONG_ANSWER: 2,
  TIMEOUT: 3,
};

function Questions() {
  const [correct, setCorrect] = useState(false); // Player guessed correct answer
  const [questionBody, setQuestionBody] = useState("Question Body");
  const [answer, setAnswer] = useState("Initial Answer");
  const [option1, setOption1] = useState("Initial Option1");
  const [option2, setOption2] = useState("Initial Option2");
  const [option3, setOption3] = useState("Initial Option3");
  const [error, setError] = useState(""); // Player guessed correct answer
  const [status, setStatus] = useState(STATUS.NOT_ANSWERED);
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    const response = (data) => {
      if (data) {
        if (data["error"]) {
          setError(data["error"].message);
        } else {
          const questionJSON = data["quizQuestion"];
          setQuestionBody(questionJSON["question"]);
          setAnswer(questionJSON["answer"]);
          setOption1(questionJSON["option1"]);
          setOption2(questionJSON["option2"]);
          setOption3(questionJSON["option3"]);
          setError("");
        }
      }
    };
    getQuestion(response);
  }, [questionNumber]);

  const handleQuestionChange = () => {
    setStatus(STATUS.NOT_ANSWERED);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
      <QuestionBox questionBody={questionBody} />

      <AnswerBar
        status={status}
        setStatus={setStatus}
        setVar={setCorrect}
        answer={answer}
        wrong1={option1}
        wrong2={option2}
        wrong3={option3}
      />
      <button onClick={handleQuestionChange}>Next Question</button>

      <AnswerIndicator status={status} answer={answer} />
      <Timer
        questionNumber={questionNumber}
        setStatus={setStatus}
        status={status}
      />
      <SearchBar />
    </div>
  );
}

export default Questions;
