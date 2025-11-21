import { educationData } from '../data/portfolioData';
import TimelineItem from './TimelineItem';

export default function Education() {
  return (
    <section id="education" className="timeline education">
      <div className="section-heading">
        <span className="section-pill">Formação</span>
        <h2>Estudos que alimentam minha curiosidade infinita</h2>
        <p>Formação acadêmica e aprendizados contínuos para manter meus projetos alinhados com o estado da arte.</p>
      </div>
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

