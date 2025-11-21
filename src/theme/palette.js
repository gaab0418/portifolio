// Paleta de cores baseada nas CSS variables existentes
export const createPalette = (mode = 'dark') => {
  const isLight = mode === 'light';

  return {
    mode,
    primary: {
      main: isLight ? '#a855f7' : '#c084fc',
      light: isLight ? '#c084fc' : '#e9d5ff',
      dark: isLight ? '#9333ea' : '#a855f7',
    },
    secondary: {
      main: isLight ? '#ec4899' : '#f472b6',
      light: isLight ? '#f472b6' : '#fbcfe8',
      dark: isLight ? '#db2777' : '#ec4899',
    },
    accent: {
      main: isLight ? '#38bdf8' : '#67e8f9',
      light: isLight ? '#67e8f9' : '#a7f3d0',
      dark: isLight ? '#0ea5e9' : '#38bdf8',
    },
    background: {
      default: isLight ? '#fdf6ff' : '#05010d',
      paper: isLight ? '#ffffff' : 'rgba(14, 7, 24, 0.8)',
      muted: isLight ? '#f3ecff' : 'rgba(255, 255, 255, 0.05)',
      glass: isLight ? 'rgba(255, 255, 255, 0.65)' : 'rgba(10, 4, 20, 0.6)',
    },
    text: {
      primary: isLight ? '#120f1f' : '#f9f5ff',
      secondary: isLight ? '#4b4560' : '#c7b7ff',
    },
    border: {
      main: isLight ? 'rgba(65, 38, 120, 0.15)' : 'rgba(255, 255, 255, 0.08)',
      glass: isLight ? 'rgba(147, 51, 234, 0.18)' : 'rgba(255, 255, 255, 0.1)',
    },
    gradient: {
      accent: isLight
        ? 'linear-gradient(135deg, #9333ea, #ec4899, #38bdf8)'
        : 'linear-gradient(135deg, #c084fc, #f472b6, #67e8f9)',
      hover: isLight
        ? 'linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(147, 51, 234, 0.7) 30%, rgba(236, 72, 153, 0.75) 50%, rgba(251, 146, 60, 0.7) 70%, rgba(56, 189, 248, 0.65) 90%, rgba(52, 211, 153, 0.6) 100%)'
        : 'linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(192, 132, 252, 0.8) 30%, rgba(244, 114, 182, 0.85) 50%, rgba(251, 146, 60, 0.8) 70%, rgba(103, 232, 249, 0.75) 90%, rgba(52, 211, 153, 0.7) 100%)',
    },
    shadow: isLight
      ? '0 20px 60px rgba(17, 12, 46, 0.15)'
      : '0 30px 80px rgba(0, 0, 0, 0.55)',
  };
};

