import React, {useEffect, useState} from 'react';
import Profiles from "./Profiles";
import { getLeaderBoard } from '../api/api';

function LeaderboardDisplay () {
    const [leaderboard, setLeaderboard ] = useState(null)
    const [error, setError ] = useState("")

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
            {leaderboard && <Profiles LeaderboardData={leaderboard}></Profiles>}
        </div>
    )

}

export default LeaderboardDisplay;