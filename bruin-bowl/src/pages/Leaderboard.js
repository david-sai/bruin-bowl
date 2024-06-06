import React from "react";
import LeaderboardDisplay from "../components/LeaderboardDisplay.js";

function Leaderboard() {
    return (
        <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
        <h1 className="font-bold text-3xl mb-10">Leaderboard</h1>
        <div className="text-2xl">
            <LeaderboardDisplay />
        </div>
        </div>
    );
}

export default Leaderboard;