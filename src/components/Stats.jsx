import { statsData } from '../data/portfolioData';

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats">
        {statsData.map((stat, index) => (
          <div key={index} className="stat">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

