export default function TimelineItem({ date, title, subtitle, content }) {
  return (
    <div className="timeline-item animate-slide-up">
      <div className="timeline-date">{date}</div>
      <h3 className="timeline-title">{title}</h3>
      <h4 className="timeline-subtitle">{subtitle}</h4>
      <p className="timeline-content">{content}</p>
    </div>
  );
}

