import React from "react";
import HomeNavigator from "../components/HomeNavigator";

function Home() {
  return (
    <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
      <img
        src="assets/BruinHeader.png"
        alt="Bruin Bowl Header"
        className="mt-16 mb-20 w-1/2"
      />
      <br />

      <h1 className="font-bold text-3xl mb-1.5">Welcome to Bruin Bowl!</h1>

      <p className="text-2xl mb-8">
        Test your knowledge of trivia with our quiz game.
      </p>

      <HomeNavigator />
    </div>
  );
}

export default Home;
