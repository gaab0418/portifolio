import { worksData } from '../data/portfolioData';
import WorkItem from './WorkItem';

export default function RecentWorks() {
  return (
    <section id="recent-works" className="recent-works">
      <h2><i className="fa-solid fa-fire"></i> Trabalhos Recentes</h2>
      <div className="work-showcase">
        {worksData.map((work, index) => (
          <WorkItem key={index} {...work} />
        ))}
      </div>
    </section>
  );
}

