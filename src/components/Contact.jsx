import { contactData } from '../data/portfolioData';

function ContactItem({ icon, text, link }) {
  return (
    <a
      className="contact-item"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`${icon} contact-icon`}></i>
      <span className="contact-text">{text}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <span className="section-pill">Contato</span>
        <h2>Vamos automatizar alguma coisa juntos?</h2>
        <p>{contactData.availability}</p>
      </div>

      <div className="contact-card">
        <div className="contact-card__info">
          <span className="contact-location">
            <i className="fa-solid fa-location-dot"></i> {contactData.location}
          </span>
          <p>Me chama nos canais abaixo ou envia um e-mail direto. Respondo rápido, especialmente se tiver IA no assunto 😄</p>
        </div>

        <div className="contact-grid">
          {contactData.items.map((item) => (
            <ContactItem key={item.text} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

