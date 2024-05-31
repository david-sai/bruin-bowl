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

// function between(data) {
//     // Potential feature: show scores up to a certain date
//     let filter = data.filter(val => {
//         return true;
//     })

//     // Sort scores by ascending order
//     return filter.sort((a, b) => {
//         if(a.score === b.score) {
//             return b.score - a.score;
//         } else {
//             return b.score - a.score;
//         }
//     })
// }

