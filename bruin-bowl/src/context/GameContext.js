// GlobalStateContext.js
import React, { useReducer, createContext } from 'react';
import { gameModes } from '../App';

export const ACTIONS = {
    SET_CATEGORY: "set-category",
    SET_GAME_MODE: "set-game-mode"
}

export const CATEGORIES = {
    ALL: "All",
    UCLA: "UCLA",
    COMPUTER_SCIENCE: "Computer Science",
    STAR_WARS: "Star Wars"
}

export const GAMEMODES = {
    CLASSIC: "Classic",
    RAPID: "Rapid",
    BLITZ: "Blitz"
}


const GameStateContext = createContext();
const GameDispatchContext = createContext();

export default function GameContext(children) {
    const [state, dispatch] = useReducer(reducer, {category : CATEGORIES.ALL, gameMode : GAMEMODES.CLASSIC});

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext value={dispatch}>
                {children}
            </GameDispatchContext>
        </GameStateContext.Provider>
    );
}

function reducer(state, action) {
    switch (action.type) {

        case ACTIONS.SET_CATEGORY: {
            return {
                category: action.category,
                gameMode: state.gameMode
            };
        }

        case ACTIONS.SET_GAME_MODE: {
            return {
                category: state.category,
                gameMode: action.gameMode
            };
        }

        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

// function setCategory(category) {
//     dispatch({
//         type: ACTIONS.SET_CATEGORY,
//         category: category
//     });
// }

// function setGameMode(gameMode) {
//     dispatch({
//         type: ACTIONS.SET_GAME_MODE,
//         gameMode: gameMode
//     });
// }