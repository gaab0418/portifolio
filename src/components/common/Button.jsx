import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme, variant: buttonVariant = 'primary' }) => {
  const baseStyles = {
    padding: '0.95rem 1.6rem',
    borderRadius: '999px',
    fontWeight: 600,
    textTransform: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-2px) scale(1.05)',
      boxShadow: '0 20px 40px rgba(147, 51, 234, 0.35)',
    },
  };

  if (buttonVariant === 'primary') {
    return {
      ...baseStyles,
      background: theme.custom.palette.gradient.accent,
      color: '#fff',
      border: '1px solid transparent',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      '&:hover::before': {
        transform: 'translateX(100%)',
      },
    };
  }

  if (buttonVariant === 'ghost') {
    return {
      ...baseStyles,
      border: `1px solid rgba(255, 255, 255, 0.2)`,
      color: theme.palette.text.primary,
      background: 'transparent',
      backgroundImage: theme.custom.palette.gradient.hover,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300% 100%',
      backgroundPosition: '-200% 0',
      '&:hover': {
        ...baseStyles['&:hover'],
        borderColor: 'transparent',
        color: '#fff',
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(56, 189, 248, 0.35))',
        backgroundPosition: '0 0',
      },
    };
  }

  return baseStyles;
});

export default function Button({ children, variant = 'primary', icon, href, ...props }) {
  return (
    <StyledButton
      variant={variant}
      href={href}
      component={href ? 'a' : 'button'}
      {...props}
    >
      {children}
      {icon && <i className={icon}></i>}
    </StyledButton>
  );
}

