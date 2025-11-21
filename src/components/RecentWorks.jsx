import { worksData } from '../data/portfolioData';
import WorkItem from './WorkItem';

export default function RecentWorks() {
  return (
    <section id="recent-works" className="recent-works">
      <div className="section-heading">
        <span className="section-pill">Projetos</span>
        <h2>Coisas que construí para provar que IA + automação é agora</h2>
        <p>Seleção de projetos que mostram minha forma de pensar integrações, APIs e automações inteligentes.</p>
      </div>

      <div className="work-showcase">
        {worksData.map((work) => (
          <WorkItem key={work.title} {...work} />
        ))}
      </div>
    </section>
  );
}

