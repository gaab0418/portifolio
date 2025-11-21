import { motion } from 'framer-motion';
import { iaAutomationData } from '../data/portfolioData';

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

export default function IAAutomation() {
  return (
    <section id="ia-automation" className="ia-section">
      <div className="section-heading">
        <span className="section-pill">IA + Automação</span>
        <h2>Workflows que pensam, decidem e executam</h2>
        <p>
          Misturo IA generativa, integrações profundas e automações N8N para entregar experiências
          digitais que não travam. Cada card abaixo representa um laboratório vivo em que aplico essas ideias.
        </p>
      </div>

      <div className="ia-grid">
        {iaAutomationData.map((item, index) => (
          <motion.article
            key={item.title}
            className="ia-card"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="ia-card__badge">
              <i className="fa-solid fa-sparkles"></i> {item.badge}
            </div>

            <div className="ia-card__icon">
              <i className={item.icon}></i>
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="ia-card__stack">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="ia-card__footer">
              <span className="ia-card__stat">
                <i className="fa-solid fa-bolt"></i> {item.stats}
              </span>

              <a href={item.link} target="_blank" rel="noreferrer">
                Ver detalhes <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

