import React, { useState } from "react";
import AvatarDisplay from "./AvatarDisplay.js";
import Grid from "@mui/material/Grid";

function AvatarSelector(props) {
  const [selectedURL, setSelectedURL] = useState(null);
  const availableURLs = [
    "https://pbs.twimg.com/media/GPBZbEUWgAAwTjx?format=jpg&name=large",
  ];

  const handleAvatarClick = (url) => {
    console.log(`Avatar ID clicked: ${url}`);
    setSelectedURL(url);
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

      <h1>Avatar Grid</h1>

      <Grid container spacing={2}>
        {availableURLs.map((url, _) => (
          <Grid item xs={6} sm={2.4} key={url}>
            <AvatarDisplay
              id={url}
              path={url}
              onClick={handleAvatarClick}
              isSelected={selectedURL === url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AvatarSelector;
