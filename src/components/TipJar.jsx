import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tipJarImage from '@/assets/images/mason-jar-tips.png';

const TipJar = () => {
  const [isWobbling, setIsWobbling] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsWobbling(true);
    setTimeout(() => {
      navigate('/donate');
    }, 500);
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        position: 'fixed',
        right: 'calc(46% - 800px)',
        top: '62.5%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.25)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
    >
      <div className={isWobbling ? 'animate-wobble' : ''}>
        <img 
          src={tipJarImage}
          alt="Tip Jar"
          style={{
            width: '375px',
            height: 'auto',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
    </div>
  );
};

export default TipJar;