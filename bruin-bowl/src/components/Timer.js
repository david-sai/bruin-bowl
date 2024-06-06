import React, { useState, useEffect, useContext } from "react";
import { STATUS } from "../pages/Questions.js";
import { GameStateContext, GAME_MODES, GameDispatchContext, ACTIONS } from "../context/GameContext.js";

export const GAME_MODE_TIMES = {
  // Sets how many seconds are given in each game mode, might need to be accessed for score calculation
  [GAME_MODES.CLASSIC]: 15,
  [GAME_MODES.RAPID]: 10,
  [GAME_MODES.BLITZ]: 5,
};

export const GAME_MODE_RED_TIMES = {
  // Sets how many seconds are given in each game mode, might need to be accessed for score calculation
  [GAME_MODES.CLASSIC]: 10,
  [GAME_MODES.RAPID]: 5,
  [GAME_MODES.BLITZ]: 2,
};

const Timer = (props) => {
  const state = useContext(GameStateContext); // state is an object with gameMode and category variables
  const dispatch = useContext(GameDispatchContext);
  const initial_deciseconds = GAME_MODE_TIMES[state.gameMode] * 10; // Gets the matching time for current mode from GAME_MODE_TIMES

  const [deciseconds, setDeciseconds] = useState(initial_deciseconds);
  const [printText, setPrintText] = useState(deciseconds);

  const [pulsate, setPulsate] = useState(false);

  useEffect(() => {
    setPrintText(formatTime);

    dispatch({
      type: ACTIONS.SET_TIME_REMAINING,
      timeRemaining : deciseconds
    })

    const redTime = GAME_MODE_RED_TIMES[state.gameMode] * 10;
    if (deciseconds < redTime) {
      setPulsate(true);
    } else {
      setPulsate(false);
    }

    if (deciseconds > 0) {
      if (props.status === 0) {
        const timer = setTimeout(() => {
          setDeciseconds(deciseconds - 1);
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      props.setStatus(STATUS.TIMEOUT);
    }
  }, [deciseconds]);

  useEffect(() => {
    setDeciseconds(initial_deciseconds);
    setPrintText(formatTime);
  }, [props.answer]); // Using answer so that it doesn't start until the next question is loaded

  // Function to format deciseconds into seconds
  const formatTime = () => {
    let secs = Number(deciseconds);
    secs /= 10;
    return secs.toFixed(1);
  };

  const pulsateStyles = pulsate
    ? {
      animation: "pulsate 1s infinite",
    }
    : {};

  return (
    <div
      className={`p-4 ${pulsate ? "bg-red-500" : "bg-bruin-gold"
        } text-white rounded-lg text-center`}
      style={pulsateStyles}
    >
      <style jsx>{`
        @keyframes pulsate {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
        }
      `}</style>
      <h2 className="text-xl font-bold">Timer</h2>
      <p>{printText}</p>
    </div>
  );
};

export default Timer;
