import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/Contexts";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function signOut() {
    let text = "Sign out?";
    if (window.confirm(text) == true) {
        setUser(null);
        navigate("/");
    } else {
      return;
    }
  }

  function userView(user) {
    return (
      <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
        <h1 className="font-bold text-3xl mb-1.5">Profile</h1>
        <p className="text-2xl">
          Welcome, <span className="font-bold">{user.username}</span>!
        </p>

        <p className="text-2xl">Your score: {user.score}</p>

        <button
          onClick={signOut}
          className="py-2 px-5 mt-4 bg-bruin-gold text-white rounded-full"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return <div>{user ? userView(user) : <h1 className="text-bruin-gold mt-4">Sign in to view profile</h1>}</div>;
}

export default Profile;
