import React, { useState } from 'react'
import { Status } from '../App'

function AnswerBar({setStatus, setVar, answer, wrong1, wrong2, wrong3}) {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson.answerNum === answer) {
            console.log("Success!");
            setVar(true);
            setStatus(Status.CORRECT_ANSWER);
        }
        else {
            console.log("Fail!");
            setVar(false);
            setStatus(Status.WRONG_ANSWER);
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
                <input type="radio" id="answer1" name="answerNum" value={answer1} />
                <label for="answer1">{answer1}</label><br />
                <input type="radio" id="answer2" name="answerNum" value={answer2} />
                <label for="answer2">{answer2}</label><br />
                <input type="radio" id="answer3" name="answerNum" value={answer3} />
                <label for="answer3">{answer3}</label><br />
                <input type="radio" id="answer4" name="answerNum" value={answer4} />
                <label for="answer4">{answer4}</label><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AnswerBar;
