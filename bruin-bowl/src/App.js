import logo from "./logo.svg";
import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import PageTitle from "./components/PageTitle.js";
import NavigationBar from "./components/NavigationBar.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.js";
import Leaderboard from "./pages/Leaderboard.js";
import Questions from "./pages/Questions.js";
import Settings from "./pages/Settings.js";
import { GameProvider } from "./context/GameContext.js";

// For AnswerIndicator
//TODO: move to GameContext (Zach)
export const Status = {
  NOT_ANSWERED: 0,
  CORRECT_ANSWER: 1,
  WRONG_ANSWER: 2,
  TIMEOUT: 3,
};

function App() {
  return (
    // <p>Hello</p>
    <BrowserRouter>
      <div className="flex justify-center items-start min-h-screen p-8 bg-amber-50">
        <PageTitle title="BruinBowl" />

        <div className="max-w-screen-lg w-full">
          <NavigationBar />

          <GameProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/leaderboard" element={<Leaderboard />}></Route>
              <Route path="/questions" element={<Questions />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
            </Routes>
          </GameProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
