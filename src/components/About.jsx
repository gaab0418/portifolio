import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { aboutData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import Card from './common/Card';
import AnimatedSection from './common/AnimatedSection';

const StyledSection = styled(Box)({
  padding: '6rem 0',
  width: '100%',
});

const StyledTexts = styled(Card)(({ theme }) => ({
  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
  borderRadius: '26px',
  border: `1px solid ${theme.custom.palette.border.main}`,
  background: `radial-gradient(120% 160% at 0% 0%, rgba(168, 85, 247, 0.2), transparent 60%),
    radial-gradient(110% 140% at 100% 0%, rgba(56, 189, 248, 0.18), transparent 50%),
    ${theme.custom.palette.background.paper}`,
  boxShadow: theme.custom.palette.shadow,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: '2rem',
  width: '100%',
}));

const StyledHighlight = styled(Box)(({ theme }) => ({
  padding: '1.5rem',
  borderRadius: '18px',
  border: `1px solid ${theme.custom.palette.border.main}`,
  background: theme.custom.palette.background.paper,
  boxShadow: theme.custom.palette.shadow,
  height: '100%',
  width: '100%',
  '& span': {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    marginBottom: '0.5rem',
  },
  '& strong': {
    display: 'block',
    fontSize: '1.05rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.6,
  },
}));

const StyledHighlightsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1rem',
  width: '100%',
});

export default function About() {
  return (
    <StyledSection component="section" id="sobre">
      <SectionHeading
        pill="Sobre"
        title={aboutData.title}
      />

      <Box sx={{ width: '100%' }}>
        {/* Card de texto principal - largura total */}
        <AnimatedSection>
          <StyledTexts>
            {aboutData.paragraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: index < aboutData.paragraphs.length - 1 ? 1.5 : 0,
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </StyledTexts>
        </AnimatedSection>

        {/* Grid com os highlights - layout 50/50 */}
        <StyledHighlightsGrid>
          {aboutData.highlights.map((highlight, index) => {
            const isLastOdd =
              aboutData.highlights.length % 2 !== 0 &&
              index === aboutData.highlights.length - 1;

            return (
              <Box
                key={highlight.label}
                sx={{ gridColumn: isLastOdd ? 'span 2' : 'span 1' }}
              >
                <AnimatedSection delay={0.1 + index * 0.05}>
                  <StyledHighlight>
                    <span>{highlight.label}</span>
                    <strong>{highlight.value}</strong>
                  </StyledHighlight>
                </AnimatedSection>
              </Box>
            );
          })}
        </StyledHighlightsGrid>
      </Box>
    </StyledSection>
  );
}
