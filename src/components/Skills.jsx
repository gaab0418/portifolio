import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const categories = useMemo(() => Object.keys(skillsData), []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const categoryIcons = {
    'IA & Automação': 'fa-solid fa-robot',
    'Back-end & APIs': 'fa-solid fa-code',
    'Data & Infra': 'fa-solid fa-database',
    'Ferramentas & UX': 'fa-solid fa-wand-magic-sparkles'
  };

  return (
    <section id="skills" className="skills">
      <div className="section-heading">
        <span className="section-pill">Skills</span>
        <h2>Stack favorita para criar experiências inteligentes</h2>
        <p>Escolha uma categoria para ver as skills que uso diariamente para construir integrações inteligentes.</p>
      </div>

      <div className="skill-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`skill-category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            <i className={categoryIcons[category]}></i> {category}
          </button>
        ))}
      </div>

      <div className="skill-tags">
        {skillsData[activeCategory].map((skill, index) => (
          <motion.div
            key={`${activeCategory}-${skill.text}`}
            className="skill-tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <i className={skill.icon}></i> {skill.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

