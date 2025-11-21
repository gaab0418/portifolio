import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSectionPill = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.35rem 1.1rem',
  borderRadius: '999px',
  border: `1px solid ${theme.custom.palette.border.glass}`,
  background: theme.custom.palette.background.glass,
  fontSize: '0.85rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  marginBottom: '1.25rem',
}));

const StyledHeading = styled(Box)(({ theme }) => ({
  maxWidth: '760px',
  margin: '0 auto 3rem auto',
  textAlign: 'center',
}));

export default function SectionHeading({ pill, title, description, children }) {
  return (
    <StyledHeading>
      {pill && <StyledSectionPill>{pill}</StyledSectionPill>}
      {title && (
        <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
          }}
        >
          {description}
        </Typography>
      )}
      {children}
    </StyledHeading>
  );
}

