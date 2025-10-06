import { experienceData } from '../data/portfolioData';
import TimelineItem from './TimelineItem';

export default function Experience() {
  return (
    <section id="experience" className="timeline experience">
      <h2><i className="fa-solid fa-briefcase"></i>Experiências</h2>
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

