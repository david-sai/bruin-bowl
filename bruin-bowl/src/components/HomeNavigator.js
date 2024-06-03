import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModalIsOpenContext, UserContext } from "../context/Contexts";

function HomeNavigator() {
  const navigate = useNavigate();
  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user, setUser } = useContext(UserContext);

  const message = user === null ? "Log in to start" : "Start playing";

  function handleClick() {
    if (user === null) {
      setModalIsOpen("You need to be logged in first!");
      return;
    } else {
      navigate("/mode-select");
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="mt-1 px-8 py-4 bg-bruin-blue text-white text-2xl font-bold rounded-full"
        style={{
          animation: "pulsate 2s ease-in-out infinite",
        }}
      >
        {message}
      </button>
      <style jsx>{`
        @keyframes pulsate {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}

export default HomeNavigator;
