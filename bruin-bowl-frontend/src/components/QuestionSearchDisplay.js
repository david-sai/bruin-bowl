import React, { useContext } from 'react';
function QuestionSearchDisplay(props) {
    // pass in question variable in props
    let question = props.question
    return (
        <div className="py-4">
            <h1 className="font-bold text-3xl mb-1.5">{question.category}</h1>
            <p className="text-2xl">{question.question}</p>
            <ul className="list-disc px-6">
                <li className="text-base text-bruin-blue"><b>{question.answer}</b></li>
                <li className="text-base">{question.option1}</li>
                <li className="text-base">{question.option2}</li>
                <li className="text-base">{question.option3}</li>
            </ul>
        </div>
    )
}

export default QuestionSearchDisplay;