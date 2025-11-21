import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { iaAutomationData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import IACard from './IACard';

const StyledSection = styled(Box)({
  padding: '6rem 0 4rem',
});

export default function IAAutomation() {
  return (
    <StyledSection component="section" id="ia-automation">
      <SectionHeading
        pill="IA + Automação"
        title="Workflows que pensam, decidem e executam"
        description="Misturo IA generativa, integrações profundas e automações N8N para entregar experiências digitais que não travam. Cada card abaixo representa um laboratório vivo em que aplico essas ideias."
      />

      <Grid container spacing={2}>
        {iaAutomationData.map((item, index) => (
          <Grid item xs={12} sm={6} lg={4} key={item.title}>
            <IACard item={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </StyledSection>
  );
}
