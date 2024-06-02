import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="flex justify-between">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-2 text-xl font-bold ${isActive ? "text-bruin-blue" : "text-bruin-gold"
          }`
        }
      >
        Bruin Bowl
      </NavLink>

      <div className="flex space-x-5 text-large">
        <NavLink
          to="/mode-select"
          className={({ isActive }) =>
            `py-0.5 place-self-center border-b-2 ${isActive
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
            `py-0.5 place-self-center border-b-2 ${isActive
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
            `py-0.5 place-self-center border-b-2 ${isActive
              ? "text-bruin-blue border-bruin-blue"
              : "text-bruin-gold border-transparent"
            }`
          }
        >
          Question Search
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
          to="/signup"
          className={({ isActive }) =>
            `flex items-center py-0.5 px-5 text-white rounded-full ${isActive
              ? "bg-bruin-blue"
              : "bg-bruin-gold"
            }`
          }
        >
          <span>Sign In</span>
          <i className="fas fa-arrow-right pl-3"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
