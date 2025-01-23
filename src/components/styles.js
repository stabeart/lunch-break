export const styles = {
    georgia: {
      fontFamily: 'Perpetua',
      fontWeight: 400
    },
    mainHeading: {
      fontFamily: 'Perpetua Titling MT',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#676210'
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
    }
  };