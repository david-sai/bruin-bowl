import React from 'react'
import { STATUS } from '../pages/Questions'
import { UserContext } from "../context/Contexts";
import { useState, useContext, useEffect } from "react"
import { updateScore } from '../api/api';


function AnswerIndicator({ status, answer, score, setScore }) {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState("")

    useEffect(() => {
      const response = (data) => {
        if (data) {
          if (data["error"]) {
            setError(data["error"].message);
          } else {
            console.log(data)

            const newScore = data["score"];
            setUser({ ...user, score : newScore });

            setError("");
          }
        }
      };

      if(status == STATUS.CORRECT_ANSWER){
        setUser({ ...user, score: user.score + 10 });
        setScore(score + 10);
        updateScore(user.username, 10, response);
      }
    }, [status]);

    let indicatorString = "";
    if (status === STATUS.NOT_ANSWERED) {
        indicatorString = "\u00A0";
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
                <p className="mt-10 text-xl">{indicatorString}</p>
            </div>
        </>
    )
}

export default AnswerIndicator;