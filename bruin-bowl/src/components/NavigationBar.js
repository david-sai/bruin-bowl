import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ModalIsOpenContext } from "../context/Contexts";
import { useContext } from "react";

function NavigationBar() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);

  function handleSignIn() {
      setModalIsOpen(true); 
  }

  return (
    <div className="flex justify-between">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-2 text-xl font-bold ${
            isActive ? "text-bruin-blue" : "text-bruin-gold"
          }`
        }
      >
        Bruin Bowl
      </NavLink>

      <div className="flex space-x-5 text-large">
        <NavLink
          to="/mode-select"
          className={({ isActive }) =>
            `py-0.5 place-self-center border-b-2 ${
              isActive
                ? "text-bruin-blue border-bruin-blue"
                : "text-bruin-gold border-transparent"
            }`
          }
        >
          Select Mode
        </NavLink>

        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            `py-0.5 place-self-center border-b-2 ${
              isActive
                ? "text-bruin-blue border-bruin-blue"
                : "text-bruin-gold border-transparent"
            }`
          }
        >
          Leaderboard
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `py-0.5 place-self-center border-b-2 ${
              isActive
                ? "text-bruin-blue border-bruin-blue"
                : "text-bruin-gold border-transparent"
            }`
          }
        >
          Question Search
        </NavLink>

        <button
          className="flex items-center py-0.5 px-5 text-white rounded-full bg-bruin-gold"
          onClick={handleSignIn}
        >
          <span>Sign In</span>
          <i className="fas fa-arrow-right pl-3"></i>
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
