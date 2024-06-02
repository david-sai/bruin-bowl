import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ModalIsOpenContext, UserContext } from "../context/Contexts";
import { useContext } from "react";

function NavigationBar() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user, setUser } = useContext(UserContext);

  function handleSignIn() {
    setModalIsOpen("");
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
          to="/search"
          className={({ isActive }) =>
            `py-0.5 place-self-center border-b-2 ${
              isActive
                ? "text-bruin-blue border-bruin-blue"
                : "text-bruin-gold border-transparent"
            }`
          }
        >
          Search Questions
        </NavLink>
        <NavLink
          to="/question-add"
          className={({ isActive }) =>
            `py-0.5 place-self-center border-b-2 ${isActive
              ? "text-bruin-blue border-bruin-blue"
              : "text-bruin-gold border-transparent"
            }`
          }
        >
          Add Questions
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

        {user ? (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center py-0.5 px-5  font-bold rounded-full bg-bruin-gold ${
                isActive
                  ? "text-white bg-opacity-100"
                  : "text-bruin-gold bg-opacity-10"
              }`
            }
          >
            {user.username}
          </NavLink>
        ) : (
          <button
            className="flex items-center py-0.5 px-5 text-white rounded-full bg-bruin-gold"
            onClick={handleSignIn}
          >
            <span>Sign Up</span>
            <i className="fas fa-arrow-right pl-3"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
