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
import ModeSelect from "./pages/ModeSelect.js";
import { GameProvider } from "./context/GameContext.js";
import SignIn from "./pages/SignIn.js";

function App() {
  
  return (
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
              <Route path="/mode-select" element={<ModeSelect />}></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
            </Routes>
          </GameProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
