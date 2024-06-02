import React from 'react'

function AvatarDisplay({ id, path, onClick, isSelected }) {

    return (
      <div>
      <img 
        src={path}
        alt="Default Profile" 
        style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '50%' }}
        className={`aspect-w-1 aspect-h-1 cursor-pointer p-1 rounded-full ${isSelected ? 'ring-4 ring-blue-500' : ''} hover:ring-2 hover:ring-blue-200 hover:bg-gray-200`}
      onClick={() => onClick(id)}
      />
    </div>
      );
    
}

export default AvatarDisplay;
