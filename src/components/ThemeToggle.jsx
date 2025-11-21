import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  right: '1.5rem',
  bottom: '1.5rem',
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '999px',
  border: `1px solid ${theme.custom.palette.border.glass}`,
  background: theme.custom.palette.background.glass,
  backdropFilter: 'blur(12px)',
  color: theme.palette.text.primary,
  zIndex: 999,
  '&:hover': {
    background: theme.custom.palette.background.paper,
    transform: 'scale(1.1)',
  },
}));

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <StyledIconButton 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </StyledIconButton>
  );
}

