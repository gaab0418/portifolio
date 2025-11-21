import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTag = styled(Box)(({ theme, variant = 'default' }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: variant === 'small' ? '0.45rem 1rem' : '0.85rem 1.2rem',
    borderRadius: variant === 'small' ? '999px' : '12px',
    fontSize: variant === 'small' ? '0.85rem' : '0.9rem',
    fontWeight: 500,
    transition: 'all 0.25s ease',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: theme.custom.palette.gradient.hover,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300% 100%',
    backgroundPosition: '-200% 0',
  };

  if (variant === 'stack') {
    return {
      ...baseStyles,
      border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(149, 117, 205, 0.3)' : 'rgba(255, 255, 255, 0.2)'}`,
      backgroundColor: theme.palette.mode === 'light' 
        ? theme.custom.palette.background.paper 
        : 'rgba(255, 255, 255, 0.03)',
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundPosition: '0 0',
        borderColor: theme.custom.palette.primary.main,
        color: '#fff',
        boxShadow: '0 15px 35px rgba(147, 51, 234, 0.3)',
        transform: 'translateY(-2px) scale(1.05)',
      },
    };
  }

  if (variant === 'work') {
    return {
      ...baseStyles,
      border: `1px solid ${theme.custom.palette.border.main}`,
      backgroundColor: theme.custom.palette.background.paper,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundPosition: '0 0',
        borderColor: theme.custom.palette.primary.main,
        color: '#fff',
        boxShadow: '0 16px 32px rgba(147, 51, 234, 0.35)',
        transform: 'translateY(-2px) scale(1.05)',
      },
    };
  }

  // Default variant (skill)
  return {
    ...baseStyles,
    border: `1px solid ${theme.custom.palette.border.main}`,
    backgroundColor: theme.custom.palette.background.paper,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundPosition: '0 0',
      transform: 'translateY(-3px) scale(1.05)',
      boxShadow: theme.custom.palette.shadow,
      borderColor: theme.custom.palette.primary.main,
      color: '#fff',
    },
  };
});

export default function Tag({ children, variant = 'default', icon, ...props }) {
  return (
    <StyledTag variant={variant} {...props}>
      {icon && <i className={icon}></i>}
      {children}
    </StyledTag>
  );
}

