import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";

import { getUser } from "../api/api.js";
import ProfileView from "../components/ProfileView.js";

function Profiles() {
  const { username } = useParams(); // Get the username from the URL
  const [displayedUser, setDisplayedUser] = useState(null);

  useEffect(() => {
    if (username) {
      getUser(username, (data) => {
        if (data) {
          if (!data["error"]) {
            setDisplayedUser(data["user"]);
          }
        }
      });
    }
  }, [username]);

  return (
    <div>
      {displayedUser ? (
        <ProfileView
          displayedUser={displayedUser}
          showSignOut={false}
          signOut={() => {}}
        />
      ) : (
        <h1 className="text-bruin-gold mt-4">Loading...</h1>
      )}
    </div>
  );
}

export default Profiles;
