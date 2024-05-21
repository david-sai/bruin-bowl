import React, { useState } from 'react'
import { Status } from '../App'

function AnswerBar({setStatus, setVar, answer1, answer2, answer3, answer4}) {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const answer = "2"; // Change to access database

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

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <input type="radio" id="answer1" name="answerNum" value="1" />
                <label for="answer1">{answer1}</label><br />
                <input type="radio" id="answer2" name="answerNum" value="2" />
                <label for="answer2">{answer2}</label><br />
                <input type="radio" id="answer3" name="answerNum" value="3" />
                <label for="answer3">{answer3}</label><br />
                <input type="radio" id="answer4" name="answerNum" value="4" />
                <label for="answer4">{answer4}</label><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AnswerBar;
