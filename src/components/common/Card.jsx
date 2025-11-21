import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Paper)(({ theme, variant = 'default' }) => {
  const baseStyles = {
    borderRadius: variant === 'small' ? '18px' : variant === 'large' ? '36px' : '24px',
    border: `1px solid ${theme.custom.palette.border.main}`,
    background: theme.custom.palette.background.paper,
    boxShadow: theme.custom.palette.shadow,
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  if (variant === 'glass') {
    return {
      ...baseStyles,
      background: theme.custom.palette.background.glass,
      border: `1px solid ${theme.custom.palette.border.glass}`,
      backdropFilter: 'blur(12px)',
    };
  }

  if (variant === 'ia') {
    return {
      ...baseStyles,
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(255, 255, 255, 0.04)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      '&:hover': {
        transform: 'translateY(-8px) scale(1.01)',
        boxShadow: '0 30px 60px rgba(147, 51, 234, 0.3)',
        borderColor: 'rgba(168, 85, 247, 0.4)',
      },
      ...(theme.palette.mode === 'light' && {
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.08))',
      }),
    };
  }

  if (variant === 'stat') {
    return {
      ...baseStyles,
      padding: '1.7rem',
      borderRadius: '20px',
      textAlign: 'center',
    };
  }

  if (variant === 'highlight') {
    return {
      ...baseStyles,
      padding: '1.5rem',
      borderRadius: '18px',
    };
  }

  if (variant === 'contact') {
    return {
      ...baseStyles,
      padding: '3rem',
      borderRadius: '28px',
      background: theme.custom.palette.background.glass,
      border: `1px solid ${theme.custom.palette.border.glass}`,
    };
  }

  return baseStyles;
});

export default function Card({ children, variant = 'default', sx, ...props }) {
  return (
    <StyledCard variant={variant} sx={sx} {...props}>
      {children}
    </StyledCard>
  );
}

