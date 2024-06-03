import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/Contexts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { getUser } from "../api/api.js";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { username } = useParams(); // Get the username from the URL
  const [ displayedUser, setDisplayedUser ] = useState(null);

  useEffect(() => {
    console.log("start");
    console.log(username);
    // You can use the username to fetch the user data if needed
    // For example:
    // fetchUser(username).then(fetchedUser => setUser(fetchedUser));

    // If the user in context is not the same as the username in the URL, you might want to fetch the correct user data.
    if (user?.username !== username) {
      // Placeholder: fetch the user data and update the context

      getUser(username, (data) => {
        if (data) {
          if (data["error"]) {
            console.log(data["error"].message);
          } else {
            console.log(data);

            setDisplayedUser(data["user"]);
          }
        }
      });
    } else {
      setDisplayedUser(user);
    }
  }, [username, user, setUser]);

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
      {displayedUser ? (
        userView(displayedUser)
      ) : (
        <h1 className="text-bruin-gold mt-4">Loading...</h1>
      )}
    </div>
  );
}

export default Profile;
