import React from "react";
import { Link } from "react-router-dom";

function HomeNavigator() {
    const isSignedIn = true; // Change once sign in page is done

    if (isSignedIn) {
        return (
            <div className="text-bruin-blue font-bold text-2xl">
                <Link to={"/mode-select"}>Start playing</Link>
            </div>
        )
    }
    else {
        return (
            <div className="text-bruin-blue font-bold text-2xl">
                <Link to='/sign-in'>Sign in</Link>
            </div>
        )
    }
}

export default HomeNavigator;