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

  // const { username } = useParams(); // Get the username from the URL
  // const [displayedUser, setDisplayedUser] = useState(null);

  function signOut() {
    let text = "Sign out?";
    if (window.confirm(text) === true) {
      setUser(null);
      navigate("/");
    } else {
      return;
    }
  }

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

// useEffect(() => {
//   // If the user in context is not the same as the username in the URL, you might want to fetch the correct user data.
//   if (username && user?.username !== username) {
//     // Placeholder: fetch the user data and update the context

//     getUser(username, (data) => {
//       if (data) {
//         if (data["error"]) {
//           console.log(data["error"].message);
//         } else {
//           setDisplayedUser(data["user"]);
//         }
//       }
//     });
//   } else {
//     setDisplayedUser(user);
//   }
// }, [username, user, setUser]);
