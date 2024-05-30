import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import PageTitle from "./components/PageTitle.js";
import NavigationBar from "./components/NavigationBar.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Home from "./pages/Home.js";
import Leaderboard from "./pages/Leaderboard.js";
import Questions from "./pages/Questions.js";

// For AnswerIndicator
export const Status = {
  NOT_ANSWERED: 0,
  CORRECT_ANSWER: 1,
  WRONG_ANSWER: 2,
  TIMEOUT: 3,
};

export const Page = {
  HOME: 0,
  QUESTIONS: 1,
  LEADERBOARD: 2,
};

function App() {
  const [page, setPage] = useState(Page.QUESTIONS);

  return (
    <BrowserRouter>
      <div className="flex justify-center items-start min-h-screen p-8 bg-amber-50">
        <PageTitle title="BruinBowl" />

        
      </div>
    </BrowserRouter>
  );
}

export default App;
