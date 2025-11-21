import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { technicalHighlightsData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import TechnicalCard from './TechnicalCard';

const StyledSection = styled(Box)({
  padding: '6rem 0 4rem',
});

export default function TechnicalHighlights() {
  return (
    <StyledSection component="section" id="technical-highlights">
      <SectionHeading
        pill="Destaques técnicos"
        title="Integrações que sustentam o produto"
        description="Selecionei três frentes em que atuo diariamente: integrações Protheus, APIs REST e engenharia de dados. Tudo orientado a logs, rastreabilidade e performance."
      />

      <Grid container spacing={2}>
        {technicalHighlightsData.map((item, index) => (
          <Grid item xs={12} sm={6} lg={4} key={item.title}>
            <TechnicalCard item={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </StyledSection>
  );
}
