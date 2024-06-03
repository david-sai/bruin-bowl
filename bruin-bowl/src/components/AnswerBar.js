import React, { useState, useEffect, useRef } from 'react'
import { STATUS } from '../pages/Questions'

function AnswerBar({ status, setStatus, answer, wrong1, wrong2, wrong3 }) {
    const [answers, setAnswers] = useState([String]);
    const formRef = useRef(null)

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        if (status === STATUS.NOT_ANSWERED) {

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
        formRef.current.reset();
    }, [answer, wrong1, wrong2, wrong3]);


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
            <form ref={formRef} method="post" onSubmit={handleSubmit}>
                {answers.map((answer, index) => {
                    return (
                        <div className="mb-1">
                            <input className="form-radio ml-2  bg-bruin-darkgold checked:text-bruin-gold focus:ring-0 focus:ring-offset-0"
                                type="radio" id={"answer" + index} name="answerNum" value={answer} />
                            <label htmlFor={"answer" + index}
                                className="ml-2 bg-bruin-gold bg-opacity-15 rounded-full py-1 px-3 inline-flex items-center">
                                {answer}
                            </label>
                        </div>
                    )
                })}

                <button type="submit" className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
            </form>
        </>
    );

}

export default AnswerBar;
