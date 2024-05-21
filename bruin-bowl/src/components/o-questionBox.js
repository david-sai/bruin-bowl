import React from 'react';
function QuestionBox(props) {
    return (
        <>
            <h1>Title</h1>
            <p>Body of question: {props.questionBody}</p>
        </>
    )
}

export default QuestionBox;