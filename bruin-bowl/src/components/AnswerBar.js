import React, { useState, useEffect } from 'react'
import { STATUS } from '../pages/Questions'

function AnswerBar({ status, setStatus, answer, wrong1, wrong2, wrong3 }) {
    const [answers, setAnswers] = useState([String]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    function handleSubmit() {
        if (status === STATUS.NOT_ANSWERED) {
            if (answers[selectedIndex] === answer) {
                setStatus(STATUS.CORRECT_ANSWER);
            } else {
                setStatus(STATUS.WRONG_ANSWER);
            }
        }
    }

    useEffect(() => {
        let answers = [answer, wrong1, wrong2, wrong3]
        const shuffledAnswers = shuffleArray(answers);
        setAnswers(shuffledAnswers);
        setSelectedIndex(null);
    }, [answer, wrong1, wrong2, wrong3]);


    function shuffleArray(array) { // Uses Fisher-Yates Algorithm
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Gets random index
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Shuffles i with that index
        }
        return shuffledArray;
    };

    function handleClick(index) {
        setSelectedIndex(index);
    }

    const selectedStyling = "bg-bruin-blue ";
    const unselectedStyling = "bg-transparent border-2 border-bruin-darkgold";

    return (
        <>
            {answers.map((answer, index) => {
                return (
                    <div key={index} onClick={() => handleClick(index)} className="mb-2 cursor-pointer">
                        <span className={`ml-2 w-4 h-4 inline-block rounded-full
                                ${index === selectedIndex ? selectedStyling : unselectedStyling}`} />
                        <p className="ml-2 bg-bruin-gold cursor-pointer bg-opacity-15 rounded-full py-1 px-3 inline-flex items-center">
                            {answer}
                        </p>
                    </div>
                )
            })}

            <button onClick={() => handleSubmit()} className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
            <br />
        </>
    );

}

export default AnswerBar;
