import React from "react";
import Modal from "react-modal";

import { useState, useContext, useEffect } from "react";
import { ModalIsOpenContext } from "../context/Contexts.js";
import { UserContext } from "../context/Contexts.js";
import AvatarSelector from "./AvatarSelector.js";

import { signup } from "../api/api.js";
import { signin } from "../api/api.js";

function AuthModal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const availableAvatarURLs = [
    "https://github.com/david-sai/bruin-bowl/blob/images/anime_girl.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/big_fish.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/big_gamer.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/big_man.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/big_orb.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/cat_girl.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/fish.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/gamer.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/gpu.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/man.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/nerd.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/orb.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/panda.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/robot.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/soccer_player.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/ucla_bear.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/flowers.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/student.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/car.png?raw=true",
    "https://github.com/david-sai/bruin-bowl/blob/images/prince.png?raw=true",
  ];

  // start up with a random avatar
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * availableAvatarURLs.length);
    return availableAvatarURLs[randomIndex];
  };

  const [avatarURL, setAvatarURL] = useState(getRandomAvatar);

  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [successfullySignedUp, setSuccessfullySignedUp] = useState(false);
  const [successfullySignedIn, setSuccessfullySignedIn] = useState(false);

  const [showingAvatarSelector, setShowingAvatarSelector] = useState(false);

  // reset back to beginning
  useEffect(() => {
    if (user === null) {
      setSuccessfullySignedIn(false);
      setSuccessfullySignedUp(false);
    }
  }, [user]);

  const handleSubmit = () => {
    if (isLoading) {
      return;
    }

    if (username === "") {
      setError("Username is empty.");
      return;
    }

    if (password === "") {
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
      if (password !== password2) {
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
          setUser(data["user"]);

          if (isSignIn) {
            setSuccessfullySignedIn(true);
          } else {
            setSuccessfullySignedUp(true);
          }

          setError("");
        }
      }
    };

    setIsLoading(true);

    if (isSignIn) {
      signin(username, password, response);
    } else {
      signup(username, password, avatarURL, response);
    }
  };

  const customStyles = {
    content: {
      maxWidth: "400px",
      maxHeight: "600px",
      overflow: "none",
      margin: "auto", // center horizontally
      backgroundColor: "#fffbeb",
      borderRadius: "24px",
      borderColor: "#f0e68c",
    },
  };

  const customStylesAvatarSelector = {
    content: {
      maxWidth: "800px",
      maxHeight: "600px",
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
          onClick={() => setModalIsOpen(null)}
          className="absolute top-4 right-4 p-2"
        >
          <i className="fas fa-times fa-2x"></i>
        </button>

        <div className="mb-5">
          <h1 className="font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {modalIsOpen && modalIsOpen !== "" && (
            <div className="mt-2 text-lg">{modalIsOpen}</div>
          )}
        </div>

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
            <>
              <input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm password"
                className="p-3 w-full bg-transparent border rounded-md border-bruin-gold"
              />

              <button
                className="p-3 w-full bg-transparent border rounded-md border-bruin-gold text-left flex items-center"
                onClick={() => setShowingAvatarSelector(true)}
              >
                <img
                  src={avatarURL}
                  className="w-8 h-8 rounded-md object-cover mr-2 "
                  alt="Profile Avatar"
                />

                <span>Choose profile picture</span>
              </button>

              <Modal
                closeTimeoutMS={200}
                isOpen={showingAvatarSelector}
                onRequestClose={() => setShowingAvatarSelector(false)}
                style={customStylesAvatarSelector}
              >
                <AvatarSelector
                  setShowingAvatarSelector={setShowingAvatarSelector}
                  availableAvatarURLs={availableAvatarURLs}
                  selectedURL={avatarURL}
                  setSelectedURL={setAvatarURL}
                />
              </Modal>
            </>
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
          onClick={() => setModalIsOpen(null)}
          className="mt-4 px-4 py-3 bg-bruin-gold text-white rounded-md w-full"
        >
          Close
        </button>
      </div>
    );
  }

  const isOpen = modalIsOpen !== null;

  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(null)}
      style={customStyles}
    >
      {successfullySignedUp || successfullySignedIn
        ? successContent()
        : mainContent()}
    </Modal>
  );
}

export default AuthModal;
