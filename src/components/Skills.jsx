import { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';
import Tag from './common/Tag';

const StyledSection = styled(Box)({
  padding: '5rem 0',
});

const StyledCategories = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  justifyContent: 'center',
  marginBottom: '2rem',
});

const StyledTags = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.9rem',
  justifyContent: 'center',
});

const categoryIcons = {
  'IA & Automação': 'fa-solid fa-robot',
  'Back-end & APIs': 'fa-solid fa-code',
  'Data & Infra': 'fa-solid fa-database',
  'Ferramentas & UX': 'fa-solid fa-wand-magic-sparkles'
};

export default function Skills() {
  const categories = useMemo(() => Object.keys(skillsData), []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <StyledSection component="section" id="skills">
      <SectionHeading
        pill="Skills"
        title="Stack favorita para criar experiências inteligentes"
        description="Escolha uma categoria para ver as skills que uso diariamente para construir integrações inteligentes."
      />

      <StyledCategories>
        {categories.map((category) => (
          <Badge
            key={category}
            variant="category"
            icon={categoryIcons[category]}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </StyledCategories>

      <StyledTags>
        {skillsData[activeCategory].map((skill, index) => (
          <motion.div
            key={`${activeCategory}-${skill.text}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Tag icon={skill.icon}>{skill.text}</Tag>
          </motion.div>
        ))}
      </StyledTags>
    </StyledSection>
  );
}
