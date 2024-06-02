import React from "react";
import { Link } from "react-router-dom";

function HomeNavigator() {
    const isSignedIn = true; // Change once sign in page is done

    if (isSignedIn) {
        return (
            <div >
                <button className="mt-1 px-4 py-2 bg-bruin-blue text-white text-xl font-bold rounded-full">
                    <Link to='/mode-select'>Start playing</Link>
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="text-bruin-blue font-bold text-2xl">
                <button className="mt-1 px-4 py-2 bg-bruin-blue text-white text-xl font-bold rounded-full">
                    <Link to='/sign-in'>Sign in</Link>
                </button>
            </div>
        )
    }
}

export default HomeNavigator;