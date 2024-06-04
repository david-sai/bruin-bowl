import React, { useState, useEffect, useContext } from 'react';
import { STATUS } from '../pages/Questions.js';
import { GameStateContext, GAME_MODES } from '../context/GameContext.js';

export const GAME_MODE_TIMES = { // Sets how many seconds are given in each game mode, might need to be accessed for score calculation
    [GAME_MODES.CLASSIC]: 15,
    [GAME_MODES.RAPID]: 10,
    [GAME_MODES.BLITZ]: 5
}

const Timer = (props) => {
    const state = useContext(GameStateContext); // state is an object with gameMode and category variables
    const initial_deciseconds = GAME_MODE_TIMES[state.gameMode] * 10; // Gets the matching time for current mode from GAME_MODE_TIMES

    const [deciseconds, setDeciseconds] = useState(initial_deciseconds);
    const [printText, setPrintText] = useState(deciseconds);

    useEffect(() => {
        setPrintText(formatTime);
        if (deciseconds > 0) {
            if (props.status === 0) {
                const timer = setTimeout(() => {
                    setDeciseconds(deciseconds - 1);
                }, 100);
                return () => clearTimeout(timer);
            }
        }
        else {
            props.setStatus(STATUS.TIMEOUT);
        }
    }, [deciseconds]);

    useEffect(() => {
        setDeciseconds(initial_deciseconds);
        setPrintText(formatTime);
    }, [props.answer]); // Using answer so that it doesn't start until the next question is loaded



    // Function to format seconds into HH:MM:SS format
    const formatTime = () => {
        let secs = Number(deciseconds);
        secs /= 10;
        return secs.toFixed(1);
    };

    return (
        <div className="p-4 bg-bruin-gold text-white rounded-md text-center">
            <h2 className="text-xl font-bold">Timer</h2>
            <p>{printText}</p>
        </div>
    );
};

export default Timer;
