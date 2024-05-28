import React from "react";
import { Page } from "../App";

function NavigationBar({ page, setPage }) {
  return (
    <div className="flex justify-between">
      <button
        className={`py-2 text-5xl font-bold ${
          page === Page.HOME ? "text-bruin-blue" : "text-bruin-gold"
        }`}
        onClick={() => setPage(Page.HOME)}
      >
        Home
      </button>

      <div className="flex space-x-5 text-large">
          <button
            className={`py-2 ${
              page === Page.QUESTIONS ? "text-bruin-blue" : "text-bruin-gold"
            }`}
            onClick={() => setPage(Page.QUESTIONS)}
          >
            Questions
          </button>
          <button
            className={`py-2 ${
              page === Page.LEADERBOARD ? "text-bruin-blue" : "text-bruin-gold"
            }`}
            onClick={() => setPage(Page.LEADERBOARD)}
          >
            Leaderboard
          </button>
          <button
            className="bg-bruin-gold px-4 py-2 rounded-full text-white place-self-center" onClick={() => setPage(Page.QUESTIONS)}
          >
            Sign In
          </button>

      </div>
    </div>
  );
}

export default NavigationBar;
