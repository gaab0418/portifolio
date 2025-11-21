import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { statsData } from '../data/portfolioData';
import Card from './common/Card';
import Typography from '@mui/material/Typography';

const StyledSection = styled(Box)({
  padding: '2rem 0',
  width: '100%',
});

const StyledStatNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '2.25rem',
  background: theme.custom.palette.gradient.accent,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'block',
  lineHeight: 1,
  marginBottom: '0.4rem',
}));

const StyledStatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  letterSpacing: '0.02em',
}));

export default function Stats() {
  const totalCards = statsData.length;
  const isLastCardAlone = totalCards % 2 === 1; // Se número ímpar, último fica sozinho

  return (
    <StyledSection component="section" id="stats">
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1rem',
        width: '100%',
        justifyContent: { xs: 'center', sm: 'flex-start' }
      }}>
        {statsData.map((stat, index) => {
          const isLast = index === totalCards - 1;
          const shouldBeFullWidth = isLast && isLastCardAlone;
          
          return (
            <Box 
              key={stat.label} 
              sx={{ 
                flex: { 
                  xs: '1 1 100%', 
                  sm: shouldBeFullWidth ? '1 1 100%' : '1 1 calc(50% - 0.5rem)' 
                },
                minWidth: { 
                  xs: '100%', 
                  sm: shouldBeFullWidth ? '100%' : 'calc(50% - 0.5rem)' 
                },
                maxWidth: { 
                  xs: '100%', 
                  sm: shouldBeFullWidth ? '100%' : 'calc(50% - 0.5rem)' 
                }
              }}
            >
              <Card variant="stat" sx={{ width: '100%', height: '100%' }}>
                <StyledStatNumber component="span">{stat.number}</StyledStatNumber>
                <StyledStatLabel component="span">{stat.label}</StyledStatLabel>
              </Card>
            </Box>
          );
        })}
      </Box>
    </StyledSection>
  );
}
