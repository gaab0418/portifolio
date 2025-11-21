import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="sobre" className="sobre">
      <div className="section-heading">
        <span className="section-pill">Sobre</span>
        <h2>{aboutData.title}</h2>
      </div>

      <div className="sobre-grid">
        <motion.div
          className="sobre-texts"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          className="sobre-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1 }}
        >
          {aboutData.highlights.map((highlight) => (
            <div key={highlight.label} className="sobre-highlight">
              <span>{highlight.label}</span>
              <strong>{highlight.value}</strong>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

