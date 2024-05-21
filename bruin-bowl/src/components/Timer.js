import React, { useState, useEffect } from 'react';
import { Status } from '../App.js';

let MAX_SECONDS = 10;

const Timer = (props) => {
    const [deciseconds, setDeciseconds] = useState(100);
    const [printText, setPrintText] = useState(deciseconds);

    useEffect(() => {
        setPrintText(formatTime);
        if (deciseconds > 0) {
            const timer = setTimeout(() => {
                setDeciseconds(deciseconds - 1);
            }, 100);
            return () => clearTimeout(timer);
        }
        else {
            props.setStatus(Status.TIMEOUT);
        }
    }, [deciseconds]);

    useEffect(() => {
        setDeciseconds(MAX_SECONDS * 10);
        setPrintText(formatTime);
    }, [props.questionNumber]);



    // Function to format seconds into HH:MM:SS format
    const formatTime = () => {
        let secs = Number(deciseconds);
        secs /= 10;
        return secs;
    };

    return (
        <div>
            <h2>Timer</h2>
            <div>{printText}</div>
        </div>
    );
};

export default Timer;
