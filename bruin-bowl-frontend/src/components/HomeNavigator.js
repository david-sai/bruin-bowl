import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalIsOpenContext, UserContext } from "../context/Contexts";

function HomeNavigator() {
  const navigate = useNavigate();
  const { setModalIsOpen } = useContext(ModalIsOpenContext);
  const { user } = useContext(UserContext);

  const message = user === null ? "Sign up to start" : "Start playing";

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
        className={`mt-1 px-8 py-4  text-white text-2xl font-bold rounded-full ${ user === null ?  "bg-bruin-blue" : "bg-green-500"}`}
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
