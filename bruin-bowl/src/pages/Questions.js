import React, { useContext } from "react";
import AnswerBar from "../components/AnswerBar.js";
import QuestionBox from "../components/QuestionBox.js";
import Timer from "../components/Timer.js";
import { getQuestion } from "../api/api.js";
import AnswerIndicator from "../components/AnswerIndicator.js";
import { useEffect, useState } from "react";
import { GameStateContext } from "../context/GameContext.js";
import QuestionContinueButton from "../components/QuestionContinueButton.js";
import { UserContext } from "../context/Contexts.js";

// For AnswerIndicator
export const STATUS = {
  NOT_ANSWERED: 0,
  CORRECT_ANSWER: 1,
  WRONG_ANSWER: 2,
  TIMEOUT: 3,
};

function Questions() {
  const [questionBody, setQuestionBody] = useState("\u00A0");
  const [answer, setAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [error, setError] = useState(""); // Player guessed correct answer
  const [status, setStatus] = useState(STATUS.NOT_ANSWERED);
  const [questionNumber, setQuestionNumber] = useState(0);

  // score in the current session
  const [score, setScore] = useState(0);
  const state = useContext(GameStateContext);
  const { user, setUser } = useContext(UserContext);

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
    getQuestion(state.category, response);
  }, [questionNumber]);

  const changeQuestion = () => {
    setStatus(STATUS.NOT_ANSWERED);
    setQuestionNumber(questionNumber + 1);
  };

  const restartQuiz = () => {
    setStatus(STATUS.NOT_ANSWERED);
    setQuestionNumber(0);
  };

  return (
    <div>
      <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
        <QuestionBox questionBody={questionBody} />

        <AnswerBar
          status={status}
          setStatus={setStatus}
          answer={answer}
          wrong1={option1}
          wrong2={option2}
          wrong3={option3}
        />

        <QuestionContinueButton
          status={status}
          handleQuestionChange={changeQuestion}
        />

        <AnswerIndicator
          status={status}
          answer={answer}
          score={score}
          setScore={setScore}
        />

        <Timer answer={answer} setStatus={setStatus} status={status} />
      </div>

      <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
        <p>Current Session Score: {score}</p>
        <p>Total Score: {user.score + score}</p>
      </div>
    </div>
  );
}

export default Questions;
