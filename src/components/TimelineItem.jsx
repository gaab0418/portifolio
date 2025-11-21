import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTimelineItem = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
  paddingLeft: '2rem',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '1rem',
    top: 0,
    bottom: 0,
    width: '2px',
    background: theme.custom.palette.gradient.accent,
    opacity: 0.4,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0.5rem',
    top: '0.5rem',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: theme.custom.palette.primary.main,
    border: `2px solid ${theme.custom.palette.background.default}`,
    zIndex: 1,
  },
}));

const StyledDate = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 600,
  color: theme.custom.palette.primary.main,
  marginBottom: '0.5rem',
}));

const StyledTitle = styled(Typography)({
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: '0.25rem',
});

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '0.75rem',
}));

const StyledContent = styled(Typography)(({ theme }) => ({
  fontSize: '1.05rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
}));

export default function TimelineItem({ date, title, subtitle, content }) {
  return (
    <StyledTimelineItem className="animate-slide-up">
      <StyledDate component="div">{date}</StyledDate>
      <StyledTitle variant="h3" component="h3">
        {title}
      </StyledTitle>
      <StyledSubtitle component="h4">
        {subtitle}
      </StyledSubtitle>
      <StyledContent variant="body1" component="p">
        {content}
      </StyledContent>
    </StyledTimelineItem>
  );
}
