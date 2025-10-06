import { contactData } from '../data/portfolioData';

function ContactItem({ icon, text, link, email }) {
  const handleEmailClick = (e) => {
    if (email) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        // Create tooltip notification
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Email copiado!';
        tooltip.style.cssText = `
          position: fixed;
          left: 50%;
          bottom: 30px;
          transform: translateX(-50%);
          background-color: #5c6bc0;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
          tooltip.style.opacity = '0';
          setTimeout(() => document.body.removeChild(tooltip), 300);
        }, 2000);
      }).catch(err => {
        console.error('Erro ao copiar email:', err);
        alert('Erro ao copiar email. Por favor, copie manualmente: ' + email);
      });
    }
  };

  return (
    <div className="contact-item">
      <i className={`${icon} contact-icon`}></i>
      {link || email ? (
        <a 
          href={email ? '#' : link}
          onClick={email ? handleEmailClick : undefined}
          className="contact-text contact-link"
          target={link && !email ? '_blank' : undefined}
          rel={link && !email ? 'noopener noreferrer' : undefined}
        >
          {text}
        </a>
      ) : (
        <span className="contact-text">{text}</span>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2><i className="fa-solid fa-address-book"></i>Contato</h2>
      <div className="contact-grid">
        {contactData.items.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>

      <div className="contact-support">
        <div className="support-title">
          <i className="fa-solid fa-circle-info"></i>
          <span>{contactData.about.title}</span>
        </div>
        {contactData.about.texts.map((text, index) => (
          <p key={index} className="support-text">{text}</p>
        ))}
      </div>
    </section>
  );
}

