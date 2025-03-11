import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import TipJar from './TipJar';
import DecorativeImages from './DecorativeImages';
import plateImage from '../assets/images/plate.webp';
import tableclothImage from '../assets/images/tablecloth6.jpg';

const MobileHeader = () => (
  <div className="fixed top-0 left-0 right-0 bg-white p-2 text-center z-50">
    <span>
      <span className="font-['Perpetua_Titling_MT'] font-bold text-3xl">LUNCHBREAK </span>
      <span className="font-['Perpetua'] font-normal italic text-3xl">review</span>
    </span>
  </div>
);

const PageLayout = ({ 
  title, 
  children, 
  showMenuLink = true, 
  contentSize = 'default', // Options: 'default', 'wide', 'full'
  showDecorativeImages = true
}) => {
  const location = useLocation();
  const showTipJar = location.pathname !== '/donate';
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isReducedSpacing = ['/submissions', '/about', '/donate'].includes(location.pathname);
  const isSmallScreen = useMediaQuery({ maxWidth: 1366 });
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  // Update viewport width on resize
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scale based on viewport width
  const getScale = () => {
    if (viewportWidth >= 1440) return 1;
    if (viewportWidth <= 768) return 0.6;
    return 0.6 + (viewportWidth - 768) * (0.4 / (1440 - 768));
  };

  const scale = getScale();

  const styles = {
    georgia: {
      fontFamily: 'Perpetua',
      fontWeight: 400
    },
    mainHeading: {
      fontFamily: 'Perpetua Titling MT',
      fontWeight: 700,
      fontSize: isMobile ? '2rem' : '2.75rem',
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
      top: isMobile ? '0.5rem' : isSmallScreen ? '.5rem' : `${1.5 * scale}rem`,
      right: isMobile ? '1rem' : isSmallScreen ? '1rem' : `${2 * scale}rem`,
      fontFamily: 'Perpetua Titling MT Bold, Perpetua, serif',
      fontSize: isMobile ? '2rem' : isSmallScreen ? '2rem' : contentSize === 'wide' ? '4rem' : contentSize === 'full' ? '3rem' : `${4.5 * scale}rem`,
      fontWeight: 'bold',
      color: '#000000',
      letterSpacing: '0em',
      zIndex: 50,
      textShadow: '1px 1px 0px rgba(255, 255, 255, 0.5)',
      pointerEvents: 'none',
      lineHeight: '.55',
      textAlign: 'right',
      transform: isSmallScreen ? 'scale(0.5)' : contentSize === 'full' ? 'scale(0.65)' : 'none',
      transformOrigin: 'top right',
    }
  };

  // Determine content width based on size prop
  const getContentWidth = () => {
    switch (contentSize) {
      case 'wide':
        return 'max-w-xl'; // Approximately 672px
      case 'full':
        return 'max-w-5xl'; // Increasing to approximately 1024px for full content
      default:
        return 'max-w-md'; // Default is approximately 448px
    }
  };

  // Determine padding based on content size
  const getContentPadding = () => {
    switch (contentSize) {
      case 'wide':
        return isReducedSpacing ? 'p-6' : 'p-10';
      case 'full':
        return isReducedSpacing ? 'p-6 px-8' : 'p-12 px-16'; // Increased horizontal padding for full
      default:
        return isReducedSpacing ? 'p-8' : 'p-16';
    }
  };

  // Custom paragraph spacing for full content
  const getContentStyle = () => {
    if (contentSize === 'full') {
      return {
        '& p': {
          marginBottom: '2rem', // Increased paragraph spacing for full content
          lineHeight: '2'       // Increased line height for readability
        }
      };
    }
    return {};
  };

  useEffect(() => {
    const images = [
      plateImage,
      tableclothImage
    ];
 
    images.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
    });
  }, []);

  // Determine which decorative images to show based on content size
  const getVisibleImages = () => {
    if (contentSize === 'default') {
      return ['fork', 'knife', 'fish', 'orange', 'pepper', 'popTab', 'romaTomato', 'strawberry', 'tomato', 'bottleCap'];
    } else if (contentSize === 'wide') {
      return ['fork', 'knife', 'fish', 'orange', 'pepper', 'popTab', 'romaTomato', 'strawberry', 'tomato', 'bottleCap']; // Selected images for wide layout
    } else {
      return []; // No images for full layout
    }
  };
  
  // Process children components, applying appropriate styles
  const processChildren = (child) => {
    if (!React.isValidElement(child)) return child;

    if (child.type === 'h2') {
      return React.cloneElement(child, {
        style: { ...child.props.style, ...styles.subHeading },
        className: `${child.props.className || ''} text-2xl mb-4`
      });
    }

    // Special handling for paragraphs in full content mode
    if (contentSize === 'full' && child.type === 'p') {
      return React.cloneElement(child, {
        className: `${child.props.className || ''} mb-6 leading-relaxed`
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
      {isMobile && <MobileHeader />}

      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${tableclothImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: .45
        }}
      />
      
      <div style={styles.fixedTitle} className={isMobile ? 'hidden' : ''}>
        LUNCHBREAK<br />
        <span style={{ 
          fontWeight: 'normal', 
          fontStyle: 'italic', 
          fontSize: isMobile ? '3rem' : isSmallScreen ? '4rem' : contentSize === 'wide' ? '5rem' : contentSize === 'full' ? '4rem' : `${6 * scale}rem`
        }}>review</span>
      </div>
      
      {/* Plate background - only show for default and wide content */}
      {contentSize !== 'full' && (
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
            className={`object-contain opacity-90 ${isMobile ? 'w-[400px] h-[400px]' : 'w-[700px] h-[700px]'}`}
            style={{
              filter: 'brightness(1.2)'
            }}
          />
        </div>
      )}

      <div className={`min-h-screen ${isReducedSpacing ? 'p-4' : 'p-8'} 
                      ${isMobile ? 'pt-20' : ''} 
                      flex justify-center items-center relative`} 
           style={{ zIndex: 2 }}>
        <div className={`w-full ${getContentWidth()} mx-auto`}>
          <div 
            className={`${getContentPadding()} shadow-lg rounded-sm ${
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
                  className={`block text-left hover:text-amber-800 transition-colors ${
                    isMobile ? 'text-xl mb-4' : 'text-2xl mb-4'
                  }`}
                  style={styles.georgia}
                >
                  ← Main Menu
                </Link>
              )}
              
              <div className="text-center">
                <h1 
                  className={`${isReducedSpacing ? 'mb-6' : contentSize === 'full' ? 'mb-8' : 'mb-12'}`}
                  style={styles.mainHeading}
                >
                  {title}
                </h1>
                <div 
                  className={`text-[000000] ${
                    isMobile 
                      ? 'text-base' 
                      : contentSize === 'full' 
                        ? 'text-base leading-relaxed' 
                        : 'text-lg'
                  }`}
                  style={getContentStyle()}
                >
                  {React.Children.map(children, child => {
                    // For direct paragraphs in full content mode
                    if (React.isValidElement(child) && child.type === 'p' && contentSize === 'full') {
                      return React.cloneElement(child, {
                        className: `${child.props.className || ''} mb-6 leading-relaxed`
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

      {/* Show tip jar for default and wide content, but not full width */}
      {showTipJar && !isMobile && contentSize !== 'full' && (
        <TipJar position={contentSize === 'wide' ? 'far-right' : 'default'} />
      )}
      
      {/* Only show decorative images if requested */}
      {showDecorativeImages && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <DecorativeImages visibleImages={getVisibleImages()} />
        </div>
      )}
    </div>
  );
};

export default PageLayout;