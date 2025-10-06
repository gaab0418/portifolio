import { useState, useEffect } from 'react';
import { skillsData } from '../data/portfolioData';

function SkillTag({ icon, text, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className="skill-tag"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.3s ease'
      }}
    >
      <i className={icon}></i> {text}
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Linguagens');
  const categories = Object.keys(skillsData);

  const categoryIcons = {
    'Linguagens': 'fa-solid fa-code',
    'Bancos de Dados': 'fa-solid fa-database',
    'Ferramentas': 'fa-solid fa-tools',
    'IA/Automação': 'fa-solid fa-robot'
  };

  return (
    <section id="skills" className="skills">
      <h2><i className="fa-solid fa-code-branch"></i> Habilidades</h2>
      <div className="skill-categories">
        {categories.map((category) => (
          <div
            key={category}
            className={`skill-category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            <i className={categoryIcons[category]}></i> {category}
          </div>
        ))}
      </div>
      <div className="skill-tags">
        {skillsData[activeCategory].map((skill, index) => (
          <SkillTag 
            key={`${activeCategory}-${index}`}
            icon={skill.icon}
            text={skill.text}
            delay={index * 50}
          />
        ))}
      </div>
    </section>
  );
}

