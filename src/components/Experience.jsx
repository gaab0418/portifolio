import { experienceData } from '../data/portfolioData';
import TimelineItem from './TimelineItem';

export default function Experience() {
  return (
    <section id="experience" className="timeline experience">
      <div className="section-heading">
        <span className="section-pill">Experiência</span>
        <h2>Transformando operações com IA e automações reais</h2>
        <p>Experiências que moldaram minha visão sobre integrações e sobre como a tecnologia pode liberar pessoas para fazer trabalhos mais criativos.</p>
      </div>
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

