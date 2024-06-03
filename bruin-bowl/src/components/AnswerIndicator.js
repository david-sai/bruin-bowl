import React from 'react'
import { STATUS } from '../pages/Questions'
import { UserContext } from "../context/Contexts";
import { useState, useContext, useEffect } from "react"
import { updateScore } from '../api/api';


function AnswerIndicator({ status, answer }) {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState("")
    const [score, setScore] = useState(0);

    useEffect(() => {
      const response = (data) => {
        if (data) {
          if (data["error"]) {
            setError(data["error"].message);
          } else {
            console.log(data)
            setError("");
          }
        }
      };
      if(status == STATUS.CORRECT_ANSWER){
        setScore(score + 10);
      }
      else if(status == STATUS.TIMEOUT || status == STATUS.WRONG_ANSWER) {
        updateScore(user.username, score, response);
      }
    }, [status]);

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