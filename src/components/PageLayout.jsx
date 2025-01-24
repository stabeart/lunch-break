import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TipJar from './TipJar';
import DecorativeImages from './DecorativeImages';
import plateImage from '../assets/images/plate.png';

const styles = {
  georgia: {
    fontFamily: 'Perpetua',
    fontWeight: 400
  },
  mainHeading: {
    fontFamily: 'Perpetua Titling MT',
    fontWeight: 700,
    fontSize: '2.75rem',
    color: '#000000'
  },
  subHeading: {
    fontFamily: 'Perpetua',
    fontWeight: 400,
    fontSize: '2.25rem',
    fontStyle: 'italic'
  },
  paperTexture: {
    backgroundColor: '#FEFCE8',
    backgroundImage: `
      repeating-linear-gradient(
        -45deg,
        #00000003 0px,
        #00000003 1px,
        transparent 1px,
        transparent 3px
      ),
      repeating-linear-gradient(
        45deg,
        #00000003 0px,
        #00000003 1px,
        transparent 1px,
        transparent 3px
      )
    `,
    backgroundSize: '4px 4px',
    position: 'relative',
    overflow: 'hidden'
  },
  noisyOverlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    pointerEvents: 'none',
    mixBlendMode: 'soft-light'
  },
  fixedTitle: {
    position: 'fixed',
    top: '1.5rem',
    right: '2rem',
    fontFamily: 'Perpetua Titling MT Bold, Perpetua, serif',
    fontSize: '4.5rem',
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: '0em',
    zIndex: 50,
    textShadow: '1px 1px 0px rgba(255, 255, 255, 0.5)',
    pointerEvents: 'none',
    lineHeight: '.55',
    textAlign: 'right'
  }
};

const PageLayout = ({ title, children, showMenuLink = true }) => {
  const location = useLocation();
  const showTipJar = location.pathname !== '/donate';
  
  // Determine if we're on a page that needs reduced spacing
  const isReducedSpacing = ['/submissions', '/about', '/donate'].includes(location.pathname);

  const processChildren = (child) => {
    if (!React.isValidElement(child)) return child;

    if (child.type === 'h2') {
      return React.cloneElement(child, {
        style: { ...child.props.style, ...styles.subHeading },
        className: `${child.props.className || ''} text-2xl mb-4`
      });
    }

    if (child.props.children) {
      const newChildren = React.Children.map(child.props.children, processChildren);
      return React.cloneElement(child, { children: newChildren });
    }

    return child;
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('src/assets/images/tablecloth6.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: .45
        }}
      />
      
      <div style={styles.fixedTitle}>
        LUNCHBREAK<br />
        <span style={{ fontWeight: 'normal', fontStyle: 'italic', fontSize: '6rem' }}>review</span>
      </div>
      
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src={plateImage}
          alt=""
          className="w-[700px] h-[700px] object-contain opacity-90"
          style={{
            filter: 'brightness(1.2)'
          }}
        />
      </div>

      <div className={`min-h-screen ${isReducedSpacing ? 'p-4' : 'p-8'} flex justify-center items-center relative`} style={{ zIndex: 2 }}>
        <div className="max-w-md w-full mx-auto">
          <div 
            className={`${isReducedSpacing ? 'p-8' : 'p-16'} shadow-lg rounded-sm ${
              location.pathname === '/' ? 'transform transition-transform duration-300 hover:scale-[1.02]' : ''
            }`}
            style={{ 
              ...styles.paperTexture,
              borderColor: '#4d598b',
              borderWidth: '4px',
              borderStyle: 'solid'
            }} 
          >
            <div style={styles.noisyOverlay} />

            <div className="relative" style={{ zIndex: 1 }}>
              {showMenuLink && (
                <Link 
                  to="/" 
                  className="text-2xl mb-4 block text-left hover:text-amber-800 transition-colors"
                  style={styles.georgia}
                >
                  ← Main Menu
                </Link>
              )}
              
              <div className="text-center">
                <h1 
                  className={`${isReducedSpacing ? 'mb-6' : 'mb-12'}`}
                  style={styles.mainHeading}
                >
                  {title}
                </h1>
                <div className="text-[000000] text-lg">
                  {React.Children.map(children, child => {
                    if (React.isValidElement(child) && child.type === 'p') {
                      return React.cloneElement(child, {
                        className: `${child.props.className || ''} text-lg`
                      });
                    }
                    return processChildren(child);
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTipJar && <TipJar />}
      
      <DecorativeImages visibleImages={['fork', 'knife', 'fish', 'orange', 'pepper', 'popTab', 'romaTomato', 'strawberry', 'tomato', 'bottleCap']} />
    </div>
  );
};

export default PageLayout;