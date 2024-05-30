import React, { useState } from 'react'
import { categories, gameModes } from '../App';

function GameModeSelector(props) {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        let gameMode = formJson.gameMode;
        let category = formJson.category;
        if (gameMode === undefined) // Defaults to Classic if none submitted
            gameMode = "Classic";
        if (category === undefined) // Defaults to All if none submitted
            category = "All"
        props.setGameMode(gameMode);
        props.setCategory(category);
    }

    return (
        <>
            <h1 className="font-bold text-3xl mb-1.5">Game Mode</h1>
            <form method="post" onSubmit={handleSubmit}>
                {gameModes.map((gameMode) => {
                    return (
                        <div className="mb-1">
                            <input type="radio" id={gameMode} name="gameMode" value={gameMode} />
                            <label htmlFor={gameMode} className="ml-2">{gameMode}</label>
                        </div>
                    )
                })}

                <br />
                <h1 className="font-bold text-3xl mb-1.5">Category</h1>

                {categories.map((category) => {
                    return (
                        <div className="mb-1">
                            <input type="radio" id={category} name="category" value={category} />
                            <label htmlFor={category} className="ml-2">{category}</label>
                        </div>
                    );
                })}

                <button type="submit" className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
            </form>
        </>
    );

}

export default GameModeSelector;
