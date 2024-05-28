import React from "react";
import { Page } from "../App";

function NavigationBar({ page, setPage }) {
  return (
    <div className="flex justify-between">
      <button
        className={`py-2 text-xl font-bold ${
          page === Page.HOME ? "text-bruin-blue" : "text-bruin-gold"
        }`}
        onClick={() => setPage(Page.HOME)}
      >
        Bruin Bowl
      </button>

      <div className="flex space-x-5 text-large">
        <button
          className={`py-0.5 place-self-center border-b-2 ${
            page === Page.QUESTIONS ? "text-bruin-blue  border-bruin-blue" : "text-bruin-gold border-transparent"
          }`}
          onClick={() => setPage(Page.QUESTIONS)}
        >
          Questions
        </button>
        <button
          className={`py-0.5 place-self-center border-b-2 ${
            page === Page.LEADERBOARD ? "text-bruin-blue border-bruin-blue" : "text-bruin-gold border-transparent"
          }`}
          onClick={() => setPage(Page.LEADERBOARD)}
        >
          Leaderboard
        </button>
        <button
          className="bg-bruin-gold px-4 py-1.5 rounded-full text-white place-self-center"
          onClick={() => setPage(Page.QUESTIONS)}
        >
          <span>Sign In</span>
          <i className="fas fa-arrow-right pl-3"></i>
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
