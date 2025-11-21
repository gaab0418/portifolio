import { createTheme } from '@mui/material/styles';
import { createPalette } from './palette';

export const createCustomTheme = (mode = 'dark') => {
  const palette = createPalette(mode);

  return createTheme({
    palette: {
      mode,
      primary: palette.primary,
      secondary: palette.secondary,
      background: {
        default: palette.background.default,
        paper: palette.background.paper,
      },
      text: palette.text,
    },
    typography: {
      fontFamily: "'Inter', 'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      h1: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(3rem, 8vw, 5rem)',
        lineHeight: 1,
      },
      h2: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(2rem, 5vw, 3.25rem)',
        lineHeight: 1.15,
      },
      h3: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: '1.8rem',
      },
      body1: {
        fontSize: '1.05rem',
        lineHeight: 1.8,
      },
      body2: {
        fontSize: '0.95rem',
        lineHeight: 1.7,
      },
    },
    shape: {
      borderRadius: 24,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: `radial-gradient(circle at top, rgba(168, 85, 247, 0.15), transparent 45%),
              radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.15), transparent 35%),
              ${palette.background.default}`,
          },
        },
      },
    },
    custom: {
      palette,
    },
  });
};

