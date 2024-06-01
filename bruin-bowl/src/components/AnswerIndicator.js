import React from 'react'
import { STATUS } from '../pages/Questions'

function AnswerIndicator({ status, answer }) {
    let indicatorString = "";
    if (status === STATUS.NOT_ANSWERED) {
        indicatorString = "No answer has been selected.";
    }
    else if (status === STATUS.CORRECT_ANSWER) {
        indicatorString = "You got it correct!";
    }
    else if (status === STATUS.WRONG_ANSWER) {
        indicatorString = "You got it wrong. The correct answer is " + answer + ".";
    }
    else if (status === STATUS.TIMEOUT) {
        indicatorString = "You ran out of time!";
    }
    return (
        <>
            <div>
                <p>{indicatorString}</p>
            </div>
        </>
    )
}

export default AnswerIndicator;