import React from "react";
import ModeCategorySelector from '../components/ModeCategorySelector'

function Leaderboard() {
    return (
        <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
            <h1 className="font-bold text-3xl mb-1.5">Settings</h1>
            <p className="text-2xl">
                <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold relative">
                    <ModeCategorySelector />
                </div>
            </p>
        </div>
    );
}

export default Leaderboard;