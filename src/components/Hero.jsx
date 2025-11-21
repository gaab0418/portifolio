import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useTypewriter from '../hooks/useTypewriter';
import { heroData } from '../data/portfolioData';
import Badge from './common/Badge';
import Button from './common/Button';

const StyledHero = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '95vh',
  padding: '6rem 0 7rem',
  display: 'flex',
  alignItems: 'center',
}));

const StyledParticles = styled('div')({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
});

const StyledHeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: 'min(100%, 1200px)',
  margin: '0 auto',
  padding: 'clamp(2.5rem, 4vw, 3.5rem)',
  paddingRight: 'clamp(4rem, 22vw, 16rem)',
  borderRadius: '36px',
  border: `1px solid ${theme.custom.palette.border.glass}`,
  background: theme.custom.palette.background.glass,
  boxShadow: theme.custom.palette.shadow,
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 30% 20%, rgba(236, 72, 153, 0.22), transparent 45%)',
  },
  [theme.breakpoints.down('md')]: {
    paddingRight: 'clamp(2.5rem, 8vw, 4.5rem)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2rem',
    paddingRight: '2rem',
  },
}));

const StyledProfile = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: 'clamp(1.5rem, 4vw, 2.7rem)',
  right: 'clamp(1.5rem, 4vw, 2.7rem)',
  width: 'clamp(120px, 16vw, 220px)',
  aspectRatio: 1,
  borderRadius: '30px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  background: `radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.6), transparent 65%),
    radial-gradient(circle at 70% 80%, rgba(56, 189, 248, 0.4), transparent 60%),
    rgba(8, 5, 15, 0.8)`,
  boxShadow: '0 25px 60px rgba(10, 5, 20, 0.5)',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(6px)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 'auto',
    right: 'auto',
    margin: '0 auto 1.5rem',
    width: 'clamp(180px, 32vw, 240px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'clamp(160px, 45vw, 220px)',
  },
}));

const StyledEyebrow = styled(motion.div)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  alignItems: 'center',
  marginBottom: '1.2rem',
});

const StyledPill = styled('span')(({ theme }) => ({
  fontSize: '0.9rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: theme.custom.palette.primary.main,
}));

const StyledBadgeRow = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
});

const StyledSubtitle = styled(motion.p)(({ theme }) => ({
  fontSize: '1.35rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: '1.5rem',
}));

const StyledTypewriter = styled('span')(({ theme }) => ({
  display: 'block',
  fontFamily: "'Space Grotesk', monospace",
  color: theme.palette.text.primary,
  position: 'relative',
  paddingLeft: '0.5rem',
  '&::after': {
    content: '"|"',
    marginLeft: '0.35rem',
    animation: 'blink 1s step-start infinite',
  },
  '@keyframes blink': {
    '50%': {
      opacity: 0,
    },
  },
}));

const StyledMetrics = styled(motion.div)({
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  paddingTop: '1.5rem',
});

const StyledMetric = styled(Box)(({ theme }) => ({
  '& .metric-value': {
    fontSize: '2rem',
    fontWeight: 700,
    display: 'block',
  },
  '& .metric-label': {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
}));

const StyledAvailability = styled(motion.span)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1.5rem',
  color: theme.custom.palette.accent.main,
  fontWeight: 500,
}));

const StyledCTA = styled(motion.div)({
  margin: '2rem 0 2.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
});

export default function Hero() {
  const [isParticlesReady, setIsParticlesReady] = useState(false);
  const { displayText } = useTypewriter(heroData.typewriterPhrases, {
    typeSpeed: 80,
    deleteSpeed: 40,
    startDelay: 300,
    betweenWordsDelay: 1600
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsParticlesReady(true));
  }, []);

  const particleOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 120,
      fullScreen: { enable: true },
      particles: {
        number: { value: 60, density: { enable: false } },
        color: { value: ['#a855f7', '#ec4899', '#38bdf8'] },
        shape: { type: 'circle' },
        opacity: { value: 0.45 },
        size: { value: { min: 1, max: 3.2 } },
        move: {
          enable: true,
          speed: 0.65,
          direction: 'none',
          straight: false,
          outModes: { default: 'out' }
        },
        links: {
          enable: true,
          distance: 110,
          color: '#a855f7',
          opacity: 0.2,
          width: 1
        }
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false }
        }
      },
      detectRetina: true
    }),
    []
  );

  const particlesElement = useMemo(() => {
    if (!isParticlesReady) return null;
    return (
      <StyledParticles>
        <Particles id="hero-particles" options={particleOptions} />
      </StyledParticles>
    );
  }, [isParticlesReady, particleOptions]);

  return (
    <StyledHero component="section" id="hero">
      {particlesElement}

      <StyledHeroContent>
        {heroData.photoUrl && (
          <StyledProfile
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <img src={heroData.photoUrl} alt={heroData.photoAlt || `Foto de ${heroData.name}`} loading="lazy" />
          </StyledProfile>
        )}
        <StyledEyebrow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <StyledPill>{heroData.greeting}</StyledPill>
          <StyledBadgeRow>
            {heroData.badges.map((badge) => (
              <Badge key={badge.label} variant="hero" icon={badge.icon}>
                {badge.label}
              </Badge>
            ))}
          </StyledBadgeRow>
        </StyledEyebrow>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Typography variant="h1" component="h1" sx={{ mb: 0.6 }}>
            {heroData.name}
          </Typography>
        </motion.div>

        <StyledSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {heroData.highlightedRole}
          <StyledTypewriter>{displayText}</StyledTypewriter>
        </StyledSubtitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <Typography variant="body1" sx={{ maxWidth: '65ch', mb: 0 }}>
            {heroData.description}
          </Typography>
        </motion.div>

        <StyledCTA
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {heroData.ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant} href={cta.href} icon="fa-solid fa-arrow-trend-up">
              {cta.label}
            </Button>
          ))}
        </StyledCTA>

        <StyledMetrics
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          {heroData.metrics.map((metric) => (
            <StyledMetric key={metric.label}>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </StyledMetric>
          ))}
        </StyledMetrics>

        <StyledAvailability
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <i className="fa-solid fa-signal"></i> {heroData.availability}
        </StyledAvailability>
      </StyledHeroContent>
    </StyledHero>
  );
}
