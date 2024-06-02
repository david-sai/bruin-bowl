import React, { useContext } from 'react';
import { GameStateContext } from '../context/GameContext';
function QuestionBox(props) {
    const state = useContext(GameStateContext);
    return (
        <div className="py-4">
            <h1 className="font-bold text-3xl mb-1.5">{state.category}</h1>
            <p className="text-2xl">{props.questionBody}</p>
        </div>
    )
}

export default QuestionBox;