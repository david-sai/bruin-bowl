import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/Contexts";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { getUser } from "../api/api.js";
import ProfileView from "../components/ProfileView.js";

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

  useEffect(() => {
    getUser(user.username, (data) => {
      if (data) {
        if (!data["error"]) {
          setUser(data["user"]);
        }
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <ProfileView
          displayedUser={user}
          showSignOut={true}
          signOut={signOut}
        />
      ) : (
        <h1 className="text-bruin-gold mt-4">You must be signed in first!</h1>
      )}
    </div>
  );
}

export default Profile;
