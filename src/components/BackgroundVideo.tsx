
import React from 'react';

export const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-20 animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (Math.random() * 3 + 2) + 's'
            }}
          />
        ))}
      </div>
      
      {/* Matrix-like code rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono whitespace-nowrap animate-bounce"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 10 + 5) + 's'
            }}
          >
            {Array.from({ length: 20 }, () => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </div>
        ))}
      </div>
    </div>
  );
};
