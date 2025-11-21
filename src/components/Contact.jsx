import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { contactData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import Card from './common/Card';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5rem clamp(1rem, 4vw, 3rem)',
  position: 'relative',
  marginTop: '4rem',
  borderRadius: '36px',
  border: `1px solid ${theme.custom.palette.border.main}`,
  background: `radial-gradient(120% 150% at 0% 0%, rgba(129, 140, 248, 0.22), transparent 55%),
    radial-gradient(120% 130% at 100% 0%, rgba(236, 72, 153, 0.18), transparent 45%),
    linear-gradient(135deg, rgba(6, 2, 15, 0.95), rgba(9, 4, 18, 0.92))`,
  boxShadow: theme.custom.palette.shadow,
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15), transparent 60%)',
    opacity: 0.6,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  ...(theme.palette.mode === 'light' && {
    borderColor: 'rgba(149, 117, 205, 0.25)',
    background: `radial-gradient(130% 170% at 0% 0%, rgba(79, 70, 229, 0.25), transparent 55%),
      radial-gradient(120% 150% at 100% 0%, rgba(236, 72, 153, 0.25), transparent 50%),
      linear-gradient(135deg, #ffffff, #f6edff)`,
    '&::after': {
      background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.7), transparent 60%)',
    },
  }),
}));

const StyledContactCard = styled(Card)(({ theme }) => ({
  padding: '3rem',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem',
  },
}));

const StyledInfo = styled(Box)({
  marginBottom: '2rem',
});

const StyledLocation = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontWeight: 600,
  color: theme.custom.palette.primary.main,
  marginBottom: '1rem',
}));

const StyledGrid = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
});

const StyledContactItem = styled('a')(({ theme }) => ({
  flex: '1 1 220px',
  minWidth: 'fit-content',
  padding: '1rem 1.4rem',
  borderRadius: '14px',
  border: `1px solid ${theme.custom.palette.border.main}`,
  backgroundColor: theme.palette.mode === 'light' 
    ? theme.custom.palette.background.paper 
    : 'rgba(255, 255, 255, 0.03)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  color: theme.palette.text.primary,
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'all 0.25s ease',
  position: 'relative',
  overflow: 'visible',
  backgroundImage: theme.custom.palette.gradient.hover,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300% 100%',
  backgroundPosition: '-200% 0',
  '&:hover': {
    backgroundPosition: '0 0',
    borderColor: 'transparent',
    color: '#fff',
    boxShadow: '0 18px 35px rgba(147, 51, 234, 0.35)',
    transform: 'translateY(-2px) scale(1.05)',
  },
  '& .icon': {
    flexShrink: 0,
    fontSize: '1.2rem',
  },
  '& .text': {
    flex: '0 1 auto',
    whiteSpace: 'nowrap',
    overflow: 'visible',
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'normal',
      wordBreak: 'break-all',
    },
  },
  '&[href^="mailto:"]': {
    minWidth: 'max-content',
    flex: '1 1 auto',
    justifyContent: 'center',
  },
}));

function ContactItem({ icon, text, link }) {
  return (
    <StyledContactItem href={link} target="_blank" rel="noreferrer">
      <i className={`${icon} icon`}></i>
      <span className="text">{text}</span>
    </StyledContactItem>
  );
}

export default function Contact() {
  return (
    <StyledSection component="section" id="contact">
      <SectionHeading
        pill="Contato"
        title="Vamos automatizar alguma coisa juntos?"
        description={contactData.availability}
      />

      <StyledContactCard variant="contact">
        <StyledInfo>
          <StyledLocation>
            <i className="fa-solid fa-location-dot"></i> {contactData.location}
          </StyledLocation>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Me chama nos canais abaixo ou envia um e-mail direto. Respondo rápido, especialmente se tiver IA no assunto 😄
          </Typography>
        </StyledInfo>

        <StyledGrid>
          {contactData.items.map((item) => (
            <ContactItem key={item.text} {...item} />
          ))}
        </StyledGrid>
      </StyledContactCard>
    </StyledSection>
  );
}
