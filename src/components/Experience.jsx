import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { experienceData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import TimelineItem from './TimelineItem';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5rem clamp(1rem, 4vw, 3rem)',
  position: 'relative',
  marginTop: '4rem',
  borderRadius: '36px',
  border: `1px solid ${theme.custom.palette.border.main}`,
  background: `radial-gradient(120% 150% at 0% 0%, rgba(236, 72, 153, 0.18), transparent 55%),
    radial-gradient(120% 140% at 100% 0%, rgba(56, 189, 248, 0.18), transparent 50%),
    linear-gradient(135deg, rgba(8, 4, 18, 0.96), rgba(10, 3, 20, 0.92))`,
  boxShadow: theme.custom.palette.shadow,
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 80% 30%, rgba(147, 51, 234, 0.12), transparent 60%)',
    opacity: 0.7,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  ...(theme.palette.mode === 'light' && {
    borderColor: 'rgba(149, 117, 205, 0.25)',
    background: `radial-gradient(130% 170% at 0% 0%, rgba(236, 72, 153, 0.25), transparent 55%),
      radial-gradient(120% 150% at 100% 0%, rgba(59, 130, 246, 0.25), transparent 50%),
      linear-gradient(135deg, #fff8ff, #f0e9ff)`,
    '&::after': {
      background: 'radial-gradient(circle at 80% 30%, rgba(147, 51, 234, 0.2), transparent 60%)',
    },
  }),
}));

const StyledContainer = styled(Box)({
  position: 'relative',
  marginTop: '3rem',
});

export default function Experience() {
  return (
    <StyledSection component="section" id="experience" className="timeline experience">
      <SectionHeading
        pill="Experiência"
        title="Transformando operações com integrações reais"
        description="Experiências que moldaram minha visão sobre APIs, Protheus e como a tecnologia libera pessoas para focar no trabalho crítico."
      />
      <StyledContainer>
        {experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </StyledContainer>
    </StyledSection>
  );
}
