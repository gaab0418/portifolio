import { educationData } from '../data/portfolioData';
import TimelineItem from './TimelineItem';

export default function Education() {
  return (
    <section id="education" className="timeline education">
      <h2><i className="fa-solid fa-graduation-cap"></i> Educação</h2>
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

