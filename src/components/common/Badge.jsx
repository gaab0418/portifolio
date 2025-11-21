import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Box)(({ theme, variant = 'default' }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    padding: variant === 'small' ? '0.4rem 0.9rem' : '0.7rem 1.4rem',
    borderRadius: '999px',
    fontSize: variant === 'small' ? '0.85rem' : '0.9rem',
    fontWeight: 600,
    transition: 'all 0.25s ease',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: theme.custom.palette.gradient.hover,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300% 100%',
    backgroundPosition: '-200% 0',
    cursor: 'pointer',
  };

  if (variant === 'hero') {
    return {
      ...baseStyles,
      background: 'rgba(168, 85, 247, 0.1)',
      border: `1px solid rgba(168, 85, 247, 0.2)`,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundPosition: '0 0',
        transform: 'translateY(-2px) scale(1.05)',
        borderColor: 'transparent',
        color: '#fff',
        boxShadow: '0 12px 30px rgba(147, 51, 234, 0.35)',
      },
    };
  }

  if (variant === 'category') {
    return {
      ...baseStyles,
      border: `1px solid ${theme.custom.palette.border.main}`,
      backgroundColor: theme.custom.palette.background.paper,
      color: theme.palette.text.secondary,
      '&.active': {
        background: theme.custom.palette.gradient.accent,
        color: '#fff',
        borderColor: 'transparent',
        boxShadow: theme.custom.palette.shadow,
        transform: 'scale(1.08)',
      },
      '&:not(.active):hover': {
        backgroundPosition: '0 0',
        borderColor: theme.custom.palette.primary.main,
        color: theme.palette.text.primary,
        boxShadow: theme.custom.palette.shadow,
        transform: 'translateY(-2px) scale(1.05)',
      },
    };
  }

  return {
    ...baseStyles,
    border: `1px solid ${theme.custom.palette.border.main}`,
    backgroundColor: theme.custom.palette.background.paper,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundPosition: '0 0',
      transform: 'scale(1.05)',
    },
  };
});

export default function Badge({ children, variant = 'default', icon, active, onClick, className, ...props }) {
  return (
    <StyledBadge
      variant={variant}
      className={`${active ? 'active' : ''} ${className || ''}`}
      onClick={onClick}
      component={onClick ? 'button' : 'span'}
      sx={onClick ? { 
        outline: 'none',
        '&:focus-visible': {
          outline: `2px solid currentColor`,
          outlineOffset: '2px',
        }
      } : {}}
      {...props}
    >
      {icon && <i className={icon}></i>}
      {children}
    </StyledBadge>
  );
}
