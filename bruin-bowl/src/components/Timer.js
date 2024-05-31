import React, { useState, useEffect, useContext } from 'react';
import { Status } from '../App.js';
import { GameStateContext, GAME_MODES } from '../context/GameContext.js';

const GAME_MODE_TIMES = {
    [GAME_MODES.CLASSIC]: 20,
    [GAME_MODES.RAPID]: 15,
    [GAME_MODES.BLITZ]: 10
}

const Timer = (props) => {
    const state = useContext(GameStateContext);

    const gameMode = state.gameMode;
    const initial_deciseconds = GAME_MODE_TIMES[gameMode] * 10;

    const [deciseconds, setDeciseconds] = useState(initial_deciseconds);
    const [printText, setPrintText] = useState(deciseconds);

    useEffect(() => {
        setPrintText(formatTime);
        if (deciseconds > 0) {
            if (props.status == 0) {
                const timer = setTimeout(() => {
                    setDeciseconds(deciseconds - 1);
                }, 100);
                return () => clearTimeout(timer);
            }
        }
        else {
            props.setStatus(Status.TIMEOUT);
        }
    }, [deciseconds]);

    useEffect(() => {
        setDeciseconds(initial_deciseconds);
        setPrintText(formatTime);
    }, [props.questionNumber]);



    // Function to format seconds into HH:MM:SS format
    const formatTime = () => {
        let secs = Number(deciseconds);
        secs /= 10;
        return secs.toFixed(1);
    };

    return (
        <div className="absolute top-0 right-0 m-4 p-4 bg-bruin-gold text-white rounded-md text-center">
            <h2 className="text-xl font-bold">Timer</h2>
            <p>{printText}</p>
        </div>
    );
};

export default Timer;
