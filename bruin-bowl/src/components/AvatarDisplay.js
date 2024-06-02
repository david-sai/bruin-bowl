import React from "react";

function AvatarDisplay({ id, path, onClick, isSelected }) {
  return (
    <div className="bg-blue-400 w-full aspect-square rounded-md">
      <img
        src={path}
        alt="Default Profile"
        className={`w-full h-full aspect-square object-cover cursor-pointer p-1 ${
          isSelected ? "ring-4 ring-blue-500" : ""
        } hover:ring-2 hover:ring-blue-200 hover:bg-gray-200`}
        onClick={() => onClick(id)}
      />
    </div>
  );
}

export default AvatarDisplay;
