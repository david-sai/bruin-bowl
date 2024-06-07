import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalIsOpenContext, UserContext } from "../context/Contexts";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NavLinkItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-0.5 place-self-center border-b-2 ${
          isActive
            ? "text-bruin-blue border-bruin-blue"
            : "text-bruin-gold border-transparent"
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

function UserNav({ user, handleSignIn, onClick }) {
  return user ? (
    <NavLink
      to="/profile"
      className={({ isActive }) =>
        `flex items-center py-0.5 pl-2 pr-5 font-bold rounded-full ${
          isActive
            ? "text-white bg-bruin-blue bg-opacity-100"
            : "text-bruin-gold bg-bruin-gold bg-opacity-10"
        }`
      }
      onClick={onClick}
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
      className="flex items-center py-4 px-5 text-white rounded-full bg-bruin-gold"
      onClick={() => {
        handleSignIn();
        onClick();
      }}
    >
      <span>Sign Up</span>
      <i className="fas fa-arrow-right pl-3"></i>
    </button>
  );
}

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

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-between items-center">
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

      <div className="hidden md:flex space-x-5 text-large items-center">
        <NavLinkItem to="/mode-select" onClick={closeMenu}>
          Start Game
        </NavLinkItem>
        <NavLinkItem to="/search" onClick={closeMenu}>
          Search Questions
        </NavLinkItem>
        <NavLinkItem to="/question-add" onClick={closeMenu}>
          Add Questions
        </NavLinkItem>
        <NavLinkItem to="/leaderboard" onClick={closeMenu}>
          Leaderboard
        </NavLinkItem>
        <UserNav user={user} handleSignIn={handleSignIn} onClick={closeMenu} />
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
        <div className="md:hidden absolute top-20 right-0 bg-amber-50 px-16 shadow-md z-10">
          <div className="flex flex-col space-y-4 p-4">
            <NavLinkItem to="/mode-select" onClick={closeMenu}>
              Start Game
            </NavLinkItem>
            <NavLinkItem to="/search" onClick={closeMenu}>
              Search Questions
            </NavLinkItem>
            <NavLinkItem to="/question-add" onClick={closeMenu}>
              Add Questions
            </NavLinkItem>
            <NavLinkItem to="/leaderboard" onClick={closeMenu}>
              Leaderboard
            </NavLinkItem>
            <UserNav user={user} handleSignIn={handleSignIn} onClick={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
