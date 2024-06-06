import React from 'react'
import { STATUS } from '../pages/Questions'
import { UserContext } from "../context/Contexts";
import { useState, useContext, useEffect } from "react"
import { updateScore } from '../api/api';
import { GameStateContext } from '../context/GameContext';

function AnswerIndicator({ status, answer, score, setScore }) {
    const { user, setUser } = useContext(UserContext);
    const state = useContext(GameStateContext);
    const [error, setError] = useState("")

    useEffect(() => {
      const response = (data) => {
        if (data) {
          if (data["error"]) {
            setError(data["error"].message);
          } else {
            const newScore = data["score"];
            setUser({ ...user, score : newScore });

            setError("");
          }
        }
      };

      if(status == STATUS.CORRECT_ANSWER){
        let updatedScore = 0;
        if(state.gameMode == "Rapid"){
          updatedScore = (state.timeRemaining + 5) * 1.5;
        }
        else if(state.gameMode == "Blitz"){
          updatedScore = (state.timeRemaining + 10) * 3;
        }
        else{
          updatedScore = state.timeRemaining;
        }
        console.log(updatedScore)
        setUser({ ...user, score: user.score + updatedScore});
        setScore(score + updatedScore);
        updateScore(user.username, updatedScore, response);
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