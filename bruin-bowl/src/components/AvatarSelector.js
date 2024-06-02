import React, { useState } from "react";
import AvatarDisplay from "./AvatarDisplay.js";

function AvatarSelector(props) {
  const [selectedURL, setSelectedURL] = useState(null);
  const availableURLs = [
    "https://pbs.twimg.com/media/GPBZbEUWgAAwTjx?format=jpg&name=large",
    "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
    "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBJs8O8bT9rxdPm0UUvM7FUjfudubqU4a3A&s=",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/apple-varieties-types-1296x728-header.jpg?w=1155&h=1528",
    "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/06/05130314/25.jpg",
    "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22726_16560822540037952.jpg",
    "https://media.post.rvohealth.io/wp-content/uploads/2020/08/different-berries-birdview-thumb.jpg",
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

      <h1 className="text-3xl font-bold mb-6">Select Profile Picture</h1>

      <div className="grid grid-cols-5 gap-2">
        {availableURLs.map((url) => (
          <div key={url}>
            <AvatarDisplay
              id={url}
              path={url}
              onClick={handleAvatarClick}
              isSelected={selectedURL === url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarSelector;
