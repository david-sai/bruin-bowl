import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Component Imports:
import PageTitle from "./components/PageTitle.js";
import NavigationBar from "./components/NavigationBar.js";
import AvatarSelector from "./components/AvatarSelector.js";
import AuthModal from "./components/AuthModal";
//Styling imports:
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//Pages Imports:
import Home from "./pages/Home.js";
import Leaderboard from "./pages/Leaderboard.js";
import Questions from "./pages/Questions.js";
import ModeSelect from "./pages/ModeSelect.js";
import Profile from "./pages/Profile.js";
import QuestionAddition from "./pages/QuestionAddition.js";
import SearchQuestions from "./pages/SearchQuestions.js";
//Context Imports:
import { GameProvider } from "./context/GameContext.js";
import { ModalIsOpenContext } from "./context/Contexts.js";
import { UserContext } from "./context/Contexts.js";

function App() {
  /* modalIsOpen is a string. When it is null, no modal is open. 
  Used to display additional info undertneath signup area in a model. */
  const [modalIsOpen, setModalIsOpen] = useState(null);
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);

    return initialValue || null;
  });
  //Creates an effect that instantiates when the user state changes.
  useEffect(() => {
    if (user === null) {
      localStorage.setItem("user", "\"\"");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <BrowserRouter> {/* wraps application with a BrowserRouter (handles dynamic client side routing) */}
      <div className="flex justify-center items-start min-h-screen p-8 bg-amber-50"> {/* Applies CSS interfaces (separated by whitespace) */}
        <PageTitle title="BruinBowl" />

        <ModalIsOpenContext.Provider value={{ modalIsOpen, setModalIsOpen }}> {/* allows any child component to access the modalIsOpen state var */}
          <UserContext.Provider value={{ user, setUser }}> {/* Same as obove but with the user var */}
            <div className="max-w-screen-lg w-full"> {/* wrapper for the content area of the App */}
              <NavigationBar />

              <GameProvider>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/leaderboard" element={<Leaderboard />}></Route>
                  <Route path="/questions" element={<Questions />}></Route>
                  <Route path="/search" element={<SearchQuestions />}></Route>
                  <Route path="/mode-select" element={<ModeSelect />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/profiles/:username" element={<Profiles />} />
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
