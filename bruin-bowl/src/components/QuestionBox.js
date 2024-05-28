import React from 'react';
function QuestionBox(props) {
    return (
        <div className="py-4">
            <h1 className="font-bold text-3xl mb-1.5">Title</h1>
            <p className="text-2xl">{props.questionBody}</p>
        </div>
    )
}

export default QuestionBox;