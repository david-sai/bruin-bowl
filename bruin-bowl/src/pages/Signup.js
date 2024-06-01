import React, { useState } from "react";
import { signup } from '../api/api.js';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        // Call the function when the button is clicked
        const response = (data) => {
            if (username == '' || password == '') {
                setError("Username or password is empty.")
                return;
            }
            if (data) {
                if (data["error"]) {
                } else {
                    console.log(data);
                    setError("")
                }
            }
        };
        signup(username, password, response);
    }

    return (
        <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
            <h1 className="font-bold text-3xl mb-1.5">Sign Up</h1>
            <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                className="p-2 my-2"
            />
            <br />
            <input
                type="text"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                className="p-2 my-2"
            />
            <br />
            <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-bruin-gold text-white rounded-full">Submit</button>
            <br />
            <p>Error: {error}</p>
        </div>
    );
}

export default Signup;