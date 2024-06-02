import React, { useState } from "react";
import AvatarDisplay from "./AvatarDisplay.js";

function AvatarSelector(props) {
  const handleAvatarClick = (url) => {
    props.setSelectedURL(url);
  };

  const avatarPath = "default_pfp";
  return (
    <div className="mt-4 p-4 text-bruin-darkgold">
      <button
        onClick={() => props.setShowingAvatarSelector(null)}
        className="absolute top-4 right-4 p-2"
      >
        <i className="fas fa-times fa-2x"></i>
      </button>

      <h1 className="text-3xl font-bold mb-6">Select Profile Picture</h1>

      <div className="grid grid-cols-5 gap-2">
        {props.availableAvatarURLs.map((url) => (
          <div key={url}>
            <AvatarDisplay
              id={url}
              path={url}
              onClick={handleAvatarClick}
              isSelected={props.selectedURL === url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarSelector;
