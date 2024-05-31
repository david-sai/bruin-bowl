import React, { useState, useEffect } from 'react'
import { STATUS } from '../pages/Questions'

function AnswerBar({status, setStatus, answer, wrong1, wrong2, wrong3}) {
    const [answers, setAnswers] = useState([String]);

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        if (status == STATUS.NOT_ANSWERED) {

            // Read the form data
            const form = e.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());

            if (formJson.answerNum === answer) {
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
    }, [answer]);


    const shuffleArray = (array) => { // Uses Fisher-Yates Algorithm
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Gets random index
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Shuffles i with that index
        }
        return shuffledArray;
    };

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <input type="radio" id="answer1" name="answerNum" value={answers[0]} />
                    <label htmlFor="answer1" className="ml-2">{answers[0]}</label>
                </div>
                <div className="mb-1">
                    <input type="radio" id="answer2" name="answerNum" value={answers[1]} />
                    <label htmlFor="answer2" className="ml-2">{answers[1]}</label>
                </div>
                <div className="mb-1">
                    <input type="radio" id="answer3" name="answerNum" value={answers[2]} />
                    <label htmlFor="answer3" className="ml-2">{answers[2]}</label>
                </div>
                <div className="mb-1">
                    <input type="radio" id="answer4" name="answerNum" value={answers[3]} />
                    <label htmlFor="answer4" className="ml-2">{answers[3]}</label>
                </div>
                <button type="submit" className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
            </form>
        </>
    );
    
}

export default AnswerBar;
