import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage';

export default function WorkItem({ visual, category, title, description, tags, link }) {
  return (
    <motion.article
      className="work-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <PlaceholderImage icon={visual.icon} gradient={visual.gradient} />

      <div className="work-content">
        <span className="work-category">{category}</span>
        <h3 className="work-title">{title}</h3>
        <p className="work-description">{description}</p>

        <div className="work-tags">
          {tags.map((tag) => (
            <span key={tag} className="work-tag">
              {tag}
            </span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noreferrer" className="work-link">
          Ver projeto <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </motion.article>
  );
}

