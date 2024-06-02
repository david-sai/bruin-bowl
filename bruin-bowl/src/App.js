import logo from "./logo.svg";
import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import PageTitle from "./components/PageTitle.js";
import NavigationBar from "./components/NavigationBar.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.js";
import Leaderboard from "./pages/Leaderboard.js";
import Questions from "./pages/Questions.js";
import ModeSelect from "./pages/ModeSelect.js";
import { GameProvider } from "./context/GameContext.js";
import SignIn from "./pages/SignIn.js";
import Signup from "./pages/Signup";
import SearchBar from "./pages/SearchBar.js";
import Profile from "./pages/Profile.js";

import { ModalIsOpenContext } from "./context/Contexts.js";
import { UserContext } from "./context/Contexts.js";
import AuthModal from "./components/AuthModal";
import QuestionAddition from "./pages/QuestionAddition.js";
import SearchQuestions from "./pages/SearchQuestions.js";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [user, setUser] = useState(null);

  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);

    return initialValue || null;
  });

  useEffect(() => {
    console.log(user);

    if (user == null) {
      localStorage.setItem("user", "\"\"");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <BrowserRouter>
      <div className="flex justify-center items-start min-h-screen p-8 bg-amber-50">
        <PageTitle title="BruinBowl" />

        <ModalIsOpenContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
          <UserContext.Provider value={{ user, setUser }}>
            <div className="max-w-screen-lg w-full">
              <NavigationBar />

              <GameProvider>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/leaderboard" element={<Leaderboard />}></Route>
                  <Route path="/questions" element={<Questions />}></Route>
                  <Route path="/search" element={<SearchBar />}></Route>
                  <Route path="/mode-select" element={<ModeSelect />}></Route>
                  <Route path="/sign-in" element={<SignIn />}></Route>
                  <Route path="/signup" element={<Signup />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/question-add" element={<QuestionAddition />}></Route>
                </Routes>
              </GameProvider>
            </div>

            <AuthModal />
          </UserContext.Provider>
        </ModalIsOpenContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
