import React from "react";

function ProfileView(props) {
  return (
    <div className="mt-4 bg-yellow-600 bg-opacity-5 rounded-3xl p-10 text-bruin-darkgold">
      <h1 className="font-bold text-3xl mb-4">Profile</h1>
      <img
        src={props.displayedUser.avatar}
        className="w-24 h-24 rounded-full object-cover shadow-md mr-2  mb-5"
        alt="Profile Avatar"
      />
      <p className="text-2xl">
        Username:{" "}
        <span className="font-bold">{props.displayedUser.username}</span>
      </p>
      <p className="text-2xl">
        Score: <span className="font-bold">{props.displayedUser.score}</span>
      </p>

      {props.showSignOut ? (
        <button
          onClick={props.signOut}
          className="py-2 px-5 mt-4 bg-bruin-gold text-white rounded-full"
        >
          Sign Out
        </button>
      ) : null}
    </div>
  );
}
export default ProfileView;
