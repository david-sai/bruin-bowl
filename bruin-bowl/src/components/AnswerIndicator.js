import React from 'react'
import { Status } from '../App'

function AnswerIndicator({ status, answer }) {
    let indicatorString = "";
    if (status === Status.NOT_ANSWERED) {
        indicatorString = "No answer has been selected.";
    }
    else if (status === Status.CORRECT_ANSWER) {
        indicatorString = "You got it correct!";
    }
    else if (status === Status.WRONG_ANSWER) {
        indicatorString = "You got it wrong. The correct answer is " + answer + ".";
    }
    else if (status === Status.TIMEOUT) {
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