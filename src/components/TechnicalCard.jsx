import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Card from './common/Card';
import Tag from './common/Tag';
import { cardVariants, viewportConfigMore } from '../utils/animations';

const StyledCard = styled(Card)(({ theme }) => ({
  '& h3': {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  '& p': {
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
  },
}));

const StyledBadge = styled(Box)(({ theme }) => ({
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: theme.custom.palette.secondary.main,
  marginBottom: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '16px',
  background: theme.custom.palette.background.muted,
  display: 'grid',
  placeItems: 'center',
  fontSize: '1.5rem',
  color: theme.custom.palette.primary.main,
  marginBottom: '1rem',
}));

const StyledStack = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '1rem',
});

const StyledFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.75rem',
  marginTop: '1rem',
  '& .stat': {
    color: theme.custom.palette.accent.main,
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
  },
  '& a': {
    color: theme.custom.palette.primary.main,
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function TechnicalCard({ item, index }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfigMore}
      transition={{ delay: index * 0.1 }}
    >
      <StyledCard variant="ia">
        <StyledBadge>
          <i className="fa-solid fa-terminal"></i> {item.badge}
        </StyledBadge>

        <StyledIcon>
          <i className={item.icon}></i>
        </StyledIcon>

        <Typography variant="h3" component="h3">
          {item.title}
        </Typography>
        <Typography variant="body1" component="p">
          {item.description}
        </Typography>

        <StyledStack>
          {item.stack.map((tech) => (
            <Tag key={tech} variant="stack">
              {tech}
            </Tag>
          ))}
        </StyledStack>

        <StyledFooter>
          <span className="stat">
            <i className="fa-solid fa-bolt"></i> {item.stats}
          </span>

          <a href={item.link} target="_blank" rel="noreferrer">
            Ver detalhes <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </StyledFooter>
      </StyledCard>
    </motion.article>
  );
}

