// GlobalStateContext.js
import React, { useReducer, createContext } from 'react';

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

export const GAME_MODES = {
    CLASSIC: "Classic",
    RAPID: "Rapid",
    BLITZ: "Blitz"
}


const GameStateContext = createContext();
const GameDispatchContext = createContext();

const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {category : CATEGORIES.ALL, gameMode : GAME_MODES.CLASSIC});

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    );
}

function reducer(state, action) {
    switch (action.type) {

        case ACTIONS.SET_CATEGORY: {
            return { ...state, category: action.category };
        }

        case ACTIONS.SET_GAME_MODE: {
            return { ...state, gameMode: action.gameMode };
        }

        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

export {GameProvider, GameStateContext, GameDispatchContext};