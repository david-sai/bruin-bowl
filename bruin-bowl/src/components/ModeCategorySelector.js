import React, { useContext, useState } from "react";
import {
  GameDispatchContext,
  CATEGORIES,
  GAME_MODES,
  ACTIONS,
} from "../context/GameContext";
import { useNavigate } from "react-router-dom";

import { ModalIsOpenContext, UserContext } from "../context/Contexts";

function ModeCategorySelector() {
  const dispatch = useContext(GameDispatchContext); // dispatch is a function in GameContext used to update category and game mode
  const navigate = useNavigate();

  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user, setUser } = useContext(UserContext);
  const [gameModeIndex, setGameModeIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  function handleSubmit() {
    if (user === null) {
      setModalIsOpen("You need to be logged in first!");
      return;
    }

    dispatch({
      // Setting context category
      type: ACTIONS.SET_CATEGORY,
      category: categoryStrings[categoryIndex],
    });

    dispatch({
      // Setting context game mode
      type: ACTIONS.SET_GAME_MODE,
      gameMode: gameModeStrings[gameModeIndex],
    });

    navigate("/questions");
  }

  function handleGameModeClick(index) {
    setGameModeIndex(index);
  }

  function handleCategoryClick(index) {
    setCategoryIndex(index);
  }

  const gameModeStrings = Object.values(GAME_MODES); // Used for mapping later
  const categoryStrings = Object.values(CATEGORIES);

  const selectedStyling = "bg-bruin-blue";
  const unselectedStyling = "bg-transparent border-2 border-bruin-darkgold";

  return (
    <>
      <h1 className="font-bold text-3xl mb-1.5">Game Mode</h1>
      {gameModeStrings.map((gameMode, index) => {
        // Creates a button for each game mode
        return (
          <div onClick={() => handleGameModeClick(index)} className="mb-2 cursor-pointer">
            <span className={`ml-2 w-4 h-4 inline-block rounded-full
                ${index === gameModeIndex ? selectedStyling : unselectedStyling}`} />
            <p className="ml-2 bg-bruin-gold cursor-pointer bg-opacity-15 rounded-full py-1 px-3 inline-flex items-center">
              {gameMode}
            </p>
          </div>
        );
      })}

      <br />
      <h1 className="font-bold text-3xl mb-1.5">Category</h1>

      {categoryStrings.map((category, index) => {
        // Creates a button for each category
        return (
          <div onClick={() => handleCategoryClick(index)} className="mb-2 cursor-pointer">
            <span className={`ml-2 w-4 h-4 inline-block rounded-full
                ${index === categoryIndex ? selectedStyling : unselectedStyling}`} />
            <p className="ml-2 bg-bruin-gold cursor-pointer bg-opacity-15 rounded-full py-1 px-3 inline-flex items-center">
              {category}
            </p>
          </div>
        );
      })}

      <button
        onClick={() => handleSubmit()}
        className="mt-4 px-6 py-3 bg-bruin-gold text-white rounded-full font-bold"
      >
        <span>Start Game</span>
        <i className="fa-solid fa-play pl-3"></i>
      </button>
    </>
  );
}

export default ModeCategorySelector;
