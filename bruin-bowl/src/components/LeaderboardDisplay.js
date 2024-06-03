import React, { useEffect, useState } from "react";
import { getLeaderBoard } from "../api/api";
import { Link } from "react-router-dom";

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
          <Link
            to={`/profiles/${value.username}`}
            key={index}
          >
            <div className="flex items-center justify-between bg-amber-50 py-6 px-12 rounded-3xl mb-4 transition-shadow duration-100 ease-in-out hover:shadow-lg focus:shadow-lg">
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
                <h3 className="font-bold underline underline-offset-2">
                  {value.username}
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
