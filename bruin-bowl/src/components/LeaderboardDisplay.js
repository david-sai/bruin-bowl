import React, { useEffect, useState } from "react";
import { getLeaderBoard } from "../api/api";

function LeaderboardDisplay() {
  const [leaderboard, setLeaderboard] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = (data) => {
      if (data) {
        if (data["error"]) {
          setError(data["error"].message);
        } else {
          console.log(data);
          setLeaderboard(data["usernames"]);
          setError("");
        }
      }
    };
    getLeaderBoard(response);
  }, []);

  return (
    <div className="board">
      {leaderboard &&
        leaderboard.map((value, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-amber-50 py-6 px-12 rounded-3xl mb-4"
          >
            <div className="flex items-center ">
              <p className="font-bold text-3xl mr-8">#{index + 1}</p>

              <img
                className="w-16 h-16 rounded-full object-cover mr-6 shadow-md"
                src={value.avatar}
                alt=""
              />
              <h3 className="">{value.username}</h3>
            </div>
            <div>
              <span>{value.score}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default LeaderboardDisplay;
