import React from 'react';

const Load = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-white/80 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-white/90 rounded-full animate-pulse delay-200"></div>
        <div className="w-4 h-4 bg-white/70 rounded-full animate-pulse delay-400"></div>
      </div>
    </div>
  );
};

export default Load;