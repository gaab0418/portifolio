import { statsData } from '../data/portfolioData';

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats">
        {statsData.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

