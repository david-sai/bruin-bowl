import React from "react";
import { STATUS } from "../pages/Questions";

function QuestionContinueButton(props) {
    const {status, handleQuestionChange, restartQuiz} = props;

    if (status === STATUS.CORRECT_ANSWER) {
        return (
            <button onClick={handleQuestionChange} className="mt-4 px-4 py-2 bg-bruin-blue text-white rounded-full">
                Next Question
            </button>
        )
    } else if (status === STATUS.WRONG_ANSWER || status === STATUS.TIMEOUT) {
        return (
            <button onClick={restartQuiz} className="mt-4 px-4 py-2 bg-bruin-blue text-white rounded-full">
                Restart Quiz
            </button>
        )
    }
}

export default QuestionContinueButton;