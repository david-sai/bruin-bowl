import React from 'react';
import Profiles from "./Profiles";
import { LeaderboardData } from "./database";

export default function Leaderboard () {
    
    return (
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>

            <Profiles LeaderboardData={LeaderboardData}></Profiles>
        </div>
    )

}

