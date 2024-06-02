import React from "react";

function AvatarDisplay({ id, path, onClick, isSelected }) {
  return (
    <div className="w-full aspect-square">
      <img
        src={path}
        alt="Default Profile"
        className={`w-full h-full object-cover rounded-lg cursor-pointer p-1 ${
          isSelected ? "ring-4 ring-blue-500" : ""
        }`}
        onClick={() => onClick(id)}
      />
    </div>
  );
}

export default AvatarDisplay;
