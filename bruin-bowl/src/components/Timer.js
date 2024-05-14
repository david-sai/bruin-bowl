import React, { useState, useEffect } from 'react';

let MAX_SECONDS = 10;

const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [questionID, setQuestionID] = useState(-1);
    const [printText, setPrintText] = useState(seconds);

    useEffect(() => {
        setPrintText(formatTime);
        if (seconds > 0) {
            const timer = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => setTimeout(timer);
        }
        else {
            setPrintText("Ran out of time");
        }
    }, [seconds, questionID]);

    // Function to format seconds into HH:MM:SS format
    const formatTime = () => {
        const secs = seconds % 60;
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
