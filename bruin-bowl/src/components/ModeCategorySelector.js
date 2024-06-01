import React, { useState, useContext } from 'react'
import { GameDispatchContext, CATEGORIES, GAME_MODES, ACTIONS } from '../context/GameContext'

function ModeCategorySelector() {

    const dispatch = useContext(GameDispatchContext); // dispatch is a function in GameContext used to update category and game mode

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data from radio buttons
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        dispatch({ // Setting context category
            type: ACTIONS.SET_CATEGORY,
            category: formJson.category
        });

        dispatch({ // Setting context game mode
            type: ACTIONS.SET_GAME_MODE,
            gameMode: formJson.gameMode
        });
    }

    const gameModeStrings = Object.values(GAME_MODES); // Used for mapping later
    const categoryStrings = Object.values(CATEGORIES);

    return (
        <>
            <h1 className="font-bold text-3xl mb-1.5">Game Mode</h1>
            <form method="post" onSubmit={handleSubmit}>
                {gameModeStrings.map((gameMode, index) => { // Creates a button for each game mode
                    return (
                        <div className="mb-1">
                            <input type="radio" id={gameMode} name="gameMode" value={gameMode} defaultChecked={index === 0} />
                            <label htmlFor={gameMode} className="ml-2">{gameMode}</label>
                        </div>
                    )
                })}

                <br />
                <h1 className="font-bold text-3xl mb-1.5">Category</h1>

                {categoryStrings.map((category, index) => { // Creates a button for each category
                    return (
                        <div className="mb-1">
                            <input type="radio" id={category} name="category" value={category} defaultChecked={index === 0}/>
                            <label htmlFor={category} className="ml-2">{category}</label>
                        </div>
                    );
                })}

                <button type="submit" className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
            </form>
        </>
    );
}

export default ModeCategorySelector;
