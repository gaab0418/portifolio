import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPlaceholder = styled(Box)({
  minHeight: '240px',
  display: 'grid',
  placeItems: 'center',
  position: 'relative',
  isolation: 'isolate',
});

const StyledGlow = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.45), transparent 60%)',
  opacity: 0.35,
});

const StyledIcon = styled('i')({
  fontSize: '3rem',
  color: '#fff',
  zIndex: 1,
});

export default function PlaceholderImage({ icon, gradient }) {
  return (
    <StyledPlaceholder
      sx={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      <StyledGlow />
      <StyledIcon className={icon}></StyledIcon>
    </StyledPlaceholder>
  );
}
