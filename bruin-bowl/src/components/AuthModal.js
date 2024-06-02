import React from "react";
import Modal from "react-modal";

import { useState, useContext } from "react";
import { ModalIsOpenContext } from "../context/Contexts.js";
import { UserContext } from "../context/Contexts.js";

import { signup } from "../api/api.js";
import { signin } from "../api/api.js";

function AuthModal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [successfullySignedUp, setSuccessfullySignedUp] = useState(false);
  const [successfullySignedIn, setSuccessfullySignedIn] = useState(false);

  const handleSubmit = () => {
    if (isLoading) {
      console.log("is loagin!!");
      return;
    }

    if (username == "") {
      setError("Username is empty.");
      return;
    }

    if (password == "") {
      setError("Password is empty.");
      return;
    }

    if (!isSignIn) {
      // username must only contain letters, numbers, and underscores
      if (!/^[A-Za-z0-9_]*$/.test(username) || username.length < 4) {
        setError(
          "Username must be at least 4 characters long and can only contain letters, numbers, and underscores."
        );
        return;
      }

      // password must be at least 8 characters long and only contain letters and numbers
      if (!/^[A-Za-z0-9]*$/.test(password) || password.length < 4) {
        setError(
          "Password must be at least 4 characters long and only contain letters and numbers."
        );
        return;
      }

      // make sure passwords match
      if (password != password2) {
        setError("Passwords do not match.");
        return;
      }
    }

    // Call the function when the button is clicked
    const response = (data) => {
      setIsLoading(false);

      if (data) {
        if (data["error"]) {
          setError(data["error"]["response"]["data"]["error"]);
        } else {

          // success!
          console.log(data);
          
          setUser(data["user"]);

          if (isSignIn) {
            setSuccessfullySignedIn(true);
          } else {
            setSuccessfullySignedUp(true);
          }

          console.log(data);
          setError("");
        }
      }
    };

    setIsLoading(true);

    if (isSignIn) {
      signin(username, password, response);
    } else {
      signup(username, password, response);
    }
  };

  const customStyles = {
    content: {
      maxWidth: "400px",
      maxHeight: "500px",
      margin: "auto", // center horizontally
      backgroundColor: "#fffbeb",
      borderRadius: "24px",
      borderColor: "#f0e68c",
    },
  };

  function mainContent() {
    return (
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
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
          />

          {!isSignIn && (
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm password"
              className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
            />
          )}
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

        <p className="text-red-500 mt-6">{error}</p>
      </div>
    );
  }

  function successContent() {
    return (
      <div className="mt-4 p-4 text-bruin-darkgold">
        <h1 className="font-bold text-3xl mb-5">
          {successfullySignedUp ? "Signed Up!" : "Signed In!"}
        </h1>

        <button
          onClick={() => setModalIsOpen(false)}
          className="mt-4 px-4 py-3 bg-bruin-gold text-white rounded-md w-full"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      {successfullySignedUp || successfullySignedIn
        ? successContent()
        : mainContent()}
    </Modal>
  );
}

export default AuthModal;
