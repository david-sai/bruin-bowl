import React from "react";
import Modal from "react-modal";

import { useState, useContext } from "react";
import { ModalIsOpenContext } from "../context/Contexts.js";

import { signup } from "../api/api.js";

function AuthModal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Call the function when the button is clicked
    const response = (data) => {
      if (username == "") {
        setError("Username is empty.");
        return;
      }

      if (password == "") {
        setError("Password is empty.");
        return;
      }

      // username must only contain letters, numbers, and underscores
      if (!/^[A-Za-z0-9_]*$/.test(username)) {
        setError("Username can only contain letters, numbers, and underscores.");
        return;
      }

      // password must be at least 8 characters long and only contain letters and numbers
      if (!/^[A-Za-z0-9]*$/.test(password) || password.length < 8) {
        setError("Password must be at least 8 characters long and only contain letters and numbers.");
        return;
      }

      if (data) {
        if (data["error"]) {
        } else {
          console.log(data);
          setError("");
        }
      }
    };


    signup(username, password, response);
  };

  const customStyles = {
    content: {
      maxWidth: "400px",
      maxHeight: "450px",
      margin: "auto", // center horizontally
      backgroundColor: "#fffbeb",
      borderRadius: "24px",
      borderColor: "#f0e68c"
    },
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="mt-4 p-4 text-bruin-darkgold">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-4 right-4 p-2"
          >
            <i className="fas fa-times fa-2x"></i>
          </button>

          <h1 className="font-bold text-3xl mb-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <div className="flex flex-col space-y-4 ">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter username"
              className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
            />

            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-3 bg-bruin-gold text-white rounded-md w-full"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <br />
          <p className="mt-4 text-center text-sm">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-bruin-blue cursor-pointer"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </span>
          </p>

          <p className="text-red-500 mt-2">{error}</p>
        </div>
      </Modal>
    </div>
  );
}

export default AuthModal;
