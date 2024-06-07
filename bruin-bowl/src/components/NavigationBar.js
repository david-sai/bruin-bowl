import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalIsOpenContext, UserContext } from "../context/Contexts";
import { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NavigationBar() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleSignIn() {
    setModalIsOpen("");
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
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

      <div className="hidden md: flex space-x-5 text-large">
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
          Start Game
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
            `py-0.5 place-self-center border-b-2 ${
              isActive
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
              `flex items-center py-0.5 pl-2 pr-5 font-bold rounded-full ${
                isActive
                  ? "text-white bg-bruin-blue bg-opacity-100"
                  : "text-bruin-gold bg-bruin-gold bg-opacity-10"
              }`
            }
          >
            <img
              src={user.avatar}
              className="w-8 h-8 rounded-full object-cover mr-2 shadow-md"
              alt="Profile Avatar"
            />

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

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <i className="fas fa-times h-6 w-6 text-bruin-blue"></i>
          ) : (
            <i className="fas fa-bars h-6 w-6 text-bruin-blue"></i>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-16 right-16 bg-amber-50 shadow-md z-10">
          <div className="flex flex-col space-y-4 p-4">
            <NavLink
              to="/mode-select"
              className={({ isActive }) =>
                `py-2 border-b-2 ${
                  isActive
                    ? "text-bruin-blue border-bruin-blue"
                    : "text-bruin-gold border-transparent"
                }`
              }
            >
              Start Game
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `py-2 border-b-2 ${
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
                `py-2 border-b-2 ${
                  isActive
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
                `py-2 border-b-2 ${
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
                  `flex items-center py-2 pl-2 pr-5 font-bold rounded-full ${
                    isActive
                      ? "text-white bg-bruin-blue bg-opacity-100"
                      : "text-bruin-gold bg-bruin-gold bg-opacity-10"
                  }`
                }
              >
                <img
                  src={user.avatar}
                  className="w-8 h-8 rounded-full object-cover mr-2 shadow-md"
                  alt="Profile Avatar"
                />

                {user.username}
              </NavLink>
            ) : (
              <button
                className="flex items-center py-2 px-5 text-white rounded-full bg-bruin-gold"
                onClick={handleSignIn}
              >
                <span>Sign Up</span>
                <i className="fas fa-arrow-right pl-3"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
