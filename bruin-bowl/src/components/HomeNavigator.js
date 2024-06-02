import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModalIsOpenContext, UserContext } from "../context/Contexts";

function HomeNavigator() {
    const navigate = useNavigate();
    const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);
    const { user, setUser } = useContext(UserContext);

    const message = user === null ? "Sign in" : "Start playing"

    function handleClick() {
        if (user === null) {
            setModalIsOpen("You need to be logged in first!");
            return;
        }
        else {
            navigate("/mode-select");
        }
    }



    return (
        <div >
            <button onClick={handleClick} className="mt-1 px-4 py-2 bg-bruin-blue text-white text-xl font-bold rounded-full">
                {message}
            </button>
        </div>
    );
}

export default HomeNavigator;