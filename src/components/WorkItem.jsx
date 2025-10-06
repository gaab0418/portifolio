export default function WorkItem({ image, category, title, description, tags, link, isSpoiler }) {
  return (
    <div className="work-item animate-fade-in">
      <div className={`work-image ${isSpoiler ? 'spoiler-gradient' : ''}`}>
        {isSpoiler ? (
          <>
            <i className="fa-solid fa-eye-slash spoiler-icon"></i>
            <span className="spoiler-text">SPOILER</span>
          </>
        ) : (
          <img src={image} alt={title} />
        )}
      </div>
      <div className="work-content">
        <span className="work-category">{category}</span>
        <h3 className="work-title">{title}</h3>
        <p className="work-description">{description}</p>
        <div className="work-tags">
          {tags.map((tag, index) => (
            <span key={index} className="work-tag">{tag}</span>
          ))}
        </div>
        <a 
          href={link} 
          className="work-link"
          target={link === '#' ? '_self' : '_blank'}
          rel={link === '#' ? '' : 'noopener noreferrer'}
        >
          {isSpoiler ? '🚧 Em Breve' : 'Ver no GitHub'} <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

