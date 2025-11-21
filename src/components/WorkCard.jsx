import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage';
import Tag from './common/Tag';
import { fadeInUp, viewportConfig } from '../utils/animations';

const StyledWorkItem = styled(motion.article)(({ theme }) => {
  const darkGradient =
    'linear-gradient(135deg, rgba(33, 17, 45, 0.95), rgba(53, 13, 70, 0.9))';
  const lightGradient =
    'linear-gradient(135deg, rgba(250, 245, 255, 0.95), rgba(235, 241, 255, 0.9))';

  return {
    display: 'grid',
    gridTemplateColumns: 'minmax(220px, 1fr) 2fr',
    borderRadius: '28px',
    border: `1px solid ${theme.custom.palette.border.main}`,
    background: theme.palette.mode === 'dark' ? darkGradient : lightGradient,
    overflow: 'hidden',
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 20px 35px rgba(15, 14, 36, 0.35)',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 25px 60px rgba(147, 51, 234, 0.3)',
      borderColor: 'rgba(168, 85, 247, 0.5)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  };
});

const StyledContent = styled(Box)(({ theme }) => ({
  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(8, 6, 18, 0.9), rgba(32, 22, 46, 0.85))'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(232, 242, 255, 0.92))',
  borderRadius: '0 28px 28px 0',
  backdropFilter: 'blur(8px)',
}));

const StyledCategory = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: theme.custom.palette.accent.main,
  fontSize: '0.85rem',
}));

const StyledTags = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
});

const StyledLink = styled('a')(({ theme }) => ({
  marginTop: 'auto',
  color: theme.custom.palette.primary.main,
  fontWeight: 600,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export default function WorkCard({ visual, category, title, description, tags, link }) {
  return (
    <StyledWorkItem
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={viewportConfig}
    >
      <PlaceholderImage icon={visual.icon} gradient={visual.gradient} />
      <StyledContent>
        <StyledCategory>{category}</StyledCategory>
        <Typography variant="h3" component="h3">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>

        <StyledTags>
          {tags.map((tag) => (
            <Tag key={tag} variant="work">
              {tag}
            </Tag>
          ))}
        </StyledTags>

        <StyledLink href={link} target="_blank" rel="noreferrer">
          Ver projeto <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </StyledLink>
      </StyledContent>
    </StyledWorkItem>
  );
}

