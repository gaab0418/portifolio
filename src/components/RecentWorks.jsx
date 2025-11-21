import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { worksData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import WorkCard from './WorkCard';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5rem clamp(1rem, 4vw, 3rem)',
  position: 'relative',
  marginTop: '4rem',
  borderRadius: '36px',
  border: `1px solid ${theme.custom.palette.border.main}`,
  background: `radial-gradient(120% 160% at 0% 0%, rgba(168, 85, 247, 0.25), transparent 55%),
    radial-gradient(120% 140% at 100% 0%, rgba(56, 189, 248, 0.2), transparent 45%),
    linear-gradient(135deg, rgba(10, 6, 18, 0.95), rgba(13, 5, 25, 0.9))`,
  boxShadow: theme.custom.palette.shadow,
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.12), transparent 60%)',
    opacity: 0.6,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  ...(theme.palette.mode === 'light' && {
    borderColor: 'rgba(149, 117, 205, 0.25)',
    background: `radial-gradient(130% 170% at 0% 0%, rgba(209, 178, 255, 0.55), transparent 60%),
      radial-gradient(120% 150% at 100% 0%, rgba(125, 211, 252, 0.4), transparent 45%),
      linear-gradient(135deg, #ffffff, #f5ebff)`,
    '&::after': {
      background: 'radial-gradient(circle at 40% 15%, rgba(255, 255, 255, 0.75), transparent 60%)',
    },
  }),
}));

const StyledShowcase = styled(Box)({
  display: 'grid',
  gap: '2rem',
});

export default function RecentWorks() {
  return (
    <StyledSection component="section" id="recent-works">
      <SectionHeading
        pill="Projetos"
        title="Integrações, APIs e produtos que construí"
        description="Selecionei os projetos mais completos do meu GitHub para mostrar como conecto Protheus, serviços externos e experiências web."
      />

      <StyledShowcase>
        {worksData.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </StyledShowcase>
    </StyledSection>
  );
}
