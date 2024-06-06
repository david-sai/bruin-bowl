// GlobalStateContext.js
import React, { useReducer, createContext } from 'react';

export const ACTIONS = { // Using enums to reduce errors from misspelling strings
    SET_CATEGORY: "set-category",
    SET_GAME_MODE: "set-game-mode",
    SET_TIME_REMAINING: "set-time-remaining"
}

export const CATEGORIES = {
    UCLA: "UCLA",
    COMPUTER_SCIENCE: "Computer Science",
    STAR_WARS: "Star Wars",
    OTHER: "Other"
}

export const GAME_MODES = {
    CLASSIC: "Classic",
    RAPID: "Rapid",
    BLITZ: "Blitz"
}


const GameStateContext = createContext();
const GameDispatchContext = createContext();

const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { category: CATEGORIES.UCLA, gameMode: GAME_MODES.CLASSIC });
    // Default state of reducer is UCLA category and Classic game mode

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    );
}

function reducer(state, action) { // Reducer function takes in an action and does some action on the state
    switch (action.type) {
        case ACTIONS.SET_CATEGORY: {
            return { ...state, category: action.category }; // ...state means all props of state, next part overrides category
        }
        case ACTIONS.SET_GAME_MODE: {
            return { ...state, gameMode: action.gameMode };
        }
        case ACTIONS.SET_TIME_REMAINING: {
            return { ...state, timeRemaining: action.timeRemaining };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

export { GameProvider, GameStateContext, GameDispatchContext };
// GameProvider used as HTML element, GameStateContext has state variables, and GameDispatchContext has dispatch function