import React, { useState } from 'react'
import { Status } from '../App'

function AnswerBar({status, setStatus, setVar, answer, wrong1, wrong2, wrong3}) {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        if (status == Status.NOT_ANSWERED) {

            // Read the form data
            const form = e.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());

            const answer = "2"; // Change to access database

            if (formJson.answerNum === answer) {
                console.log("Success!");
                setVar(true);
                setStatus(Status.CORRECT_ANSWER);
            } else {
                console.log("Fail!");
                setVar(false);
                setStatus(Status.WRONG_ANSWER);
            }
        }
    }

    const shuffleArray = (array) => { // Uses Fisher-Yates Algorithm
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Gets random index
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Shuffles i with that index
        }
        return shuffledArray;
    };

    const answers = [answer, wrong1, wrong2, wrong3]
    const shuffledAnswers = shuffleArray(answers);
    const answer1 = shuffledAnswers[0];
    const answer2 = shuffledAnswers[1];
    const answer3 = shuffledAnswers[2];
    const answer4 = shuffledAnswers[3];

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <input type="radio" id="answer1" name="answerNum" value={answer1} />
                    <label htmlFor="answer1" className="ml-2">{answer1}</label>
                </div>
                <div className="mb-1">
                    <input type="radio" id="answer2" name="answerNum" value={answer2} />
                    <label htmlFor="answer2" className="ml-2">{answer2}</label>
                </div>
                <div className="mb-1">
                    <input type="radio" id="answer3" name="answerNum" value={answer3} />
                    <label htmlFor="answer3" className="ml-2">{answer3}</label>
                </div>
                <div className="mb-1">
                    <input type="radio" id="answer4" name="answerNum" value={answer4} />
                    <label htmlFor="answer4" className="ml-2">{answer4}</label>
                </div>
                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
        </>
    );
    
}

export default AnswerBar;
