import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/Contexts";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function signOut() {
    let text = "Sign out?";
    if (window.confirm(text) === true) {
      setUser(null);
      navigate("/");
    } else {
      return;
    }
  }

  function userView(user) {
    return (
      <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
        <h1 className="font-bold text-3xl mb-4">Profile</h1>

        <img
          src={user.avatar}
          className="w-24 h-24 rounded-full object-cover shadow-md mr-2  mb-5"
          alt="Profile Avatar"
        />

        <p className="text-2xl">
          Username: <span className="font-bold">{user.username}</span>
        </p>

        <p className="text-2xl">
          Score: <span className="font-bold">{user.score}</span>
        </p>

        <button
          onClick={signOut}
          className="py-2 px-5 mt-4 bg-bruin-gold text-white rounded-full"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        userView(user)
      ) : (
        <h1 className="text-bruin-gold mt-4">Sign in to view profile</h1>
      )}
    </div>
  );
}

export default Profile;
