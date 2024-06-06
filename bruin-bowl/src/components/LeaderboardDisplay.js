import React, { useEffect, useState, useContext } from "react";
import { getLeaderBoard } from "../api/api";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Contexts";

function LeaderboardDisplay() {
  const [leaderboard, setLeaderboard] = useState(null);
  const [error, setError] = useState("");
  const { user, setUser } = useContext(UserContext);

  // useEffect() used to call backend function 
  useEffect(() => {
    // Define a function named "response" that takes data as an argument
    const response = (data) => {
      // If the data exists...
      if (data) {
        // If the data contains an error, set an error message
        if (data["error"]) {
          setError(data["error"].message);
        } else { // Otherwise, update Leaderboard state with list of usernames from data
          setLeaderboard(data["usernames"]);
          setError(""); // Clear previous error messages
        }
      }
    };
    getLeaderBoard(response); // Call the function getLeaderBoard and pass response as callback
  }, []); // Empty dependency array, so only runs once after initial rendering
  // Render components using className to differentiate styling
  return (
    <div className="board">
      {/* Map by index for each value in the user objects */}
      {/* Access username, score, and profile picture using value.username, value.score, and value.avatar */}
      {/* Link component for user profile links, added styling based on #1-#3 ranking, and the current user's username */}
      {leaderboard &&
        leaderboard.map((value, index) => (
          <Link to={value.username === user?.username ? `/profile` : `/profiles/${value.username}`} key={index}>
            <div className={`flex items-center justify-between bg-amber-50 py-6 px-12 rounded-3xl mb-4 transition-shadow duration-100 ease-in-out hover:shadow-lg focus:shadow-lg ${value.username === user?.username ? 'border-2 border-bruin-gold' : ''}`}>

              <div className="flex items-center">
                <p
                  className={`font-bold text-3xl mr-8 ${
                    index === 0
                      ? "text-yellow-500"
                      : index === 1
                      ? "text-gray-400"
                      : index === 2
                      ? "text-yellow-700"
                      : ""
                  }`}
                >
                  #{index + 1}
                </p>

                <img
                  className="w-16 h-16 rounded-full object-cover mr-6 shadow-md"
                  src={value.avatar}
                  alt=""
                />
                <h3 className="font-bold">
                  <span className="underline underline-offset-2">{value.username}</span>{value.username === user?.username ? ' (You)' : ''}
                </h3>
              </div>
              <div>
                <span>{value.score}</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default LeaderboardDisplay;
