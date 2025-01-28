import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveLayout = ({ children }) => {
  // Use a more granular scale calculation based on viewport width
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
  
  const getScaleFactor = () => {
    if (viewportWidth >= 1440) return 1;
    if (viewportWidth <= 768) return 0.6;
    // Smooth linear interpolation between breakpoints
    return 0.6 + (viewportWidth - 768) * (0.4 / (1440 - 768));
  };

  const scale = getScaleFactor();

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
          minWidth: '100vw',
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ResponsiveLayout;