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
  const [failed, setFailed] = useState(false);
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

  useEffect(() => {
    if (status === STATUS.TIMEOUT || status === STATUS.WRONG_ANSWER) {
      setFailed(true);
    }
  }, [status]);

  useEffect(() => {
    if (failed) {
      const timeout = setTimeout(() => {
        setFailed(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [failed]);

  const changeQuestion = () => {
    setStatus(STATUS.NOT_ANSWERED);
    setQuestionNumber(questionNumber + 1);
  };

  const restartQuiz = () => {
    console.log("updating score to 0");
    setStatus(STATUS.NOT_ANSWERED);
    setQuestionNumber(0);
    setScore(0);
    changeQuestion();
  };

  function mainContent() {
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
            restartQuiz={restartQuiz}
          />

          <AnswerIndicator
            status={status}
            answer={answer}
            score={score}
            setScore={setScore}
          />
        </div>

        <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold text-xl">
          <div className="flex flex-row items-center">
            <div className="flex flex-col flex-grow">
              <p className="mb-2">
                Game Score: <span className="font-bold">{score}</span>
              </p>
              <p>
                Total Score:{" "}
                <span className="font-bold">{user.score + score}</span>
              </p>
            </div>

            <Timer answer={answer} setStatus={setStatus} status={status} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {failed && (
        <div
          className="absolute inset-0 flex justify-center items-center text-red-600 font-bold text-8xl z-50 font-mono"
          style={{
            animation: "fadeInOutRotate 3s ease-in-out forwards",
          }}
        >
          GAME OVER!!
        </div>
      )}
      {mainContent()}
      <style jsx>{`
        @keyframes fadeInOutRotate {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.9) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(-10deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Questions;
