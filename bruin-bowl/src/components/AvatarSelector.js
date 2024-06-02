import React, { useState } from "react";
import AvatarDisplay from "./AvatarDisplay.js";
import Grid from "@mui/material/Grid";

function AvatarSelector() {
  const [selectedURL, setSelectedURL] = useState("");

  const handleAvatarClick = (url) => {
    console.log(`Avatar URL clicked: ${url}`);
    setSelectedURL(url);
  };

  const avatarPath = "default_pfp";

  return (
    <div>
      <h1>Avatar Grid</h1>
      <Grid container spacing={2}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Grid item xs={6} sm={2.4} key={index}>
            <AvatarDisplay
              id={index + 1}
              path={avatarPath}
              onClick={handleAvatarClick}
              isSelected={selectedURL == avatarPath}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AvatarSelector;
