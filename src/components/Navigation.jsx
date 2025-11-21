import { useState } from 'react';
import { navigationLinks } from '../data/portfolioData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navigation">
      <a href="#hero" className="navigation__logo">
        <span>Gabriel</span>
        <span>Chiarelli</span>
      </a>

      <nav className={`navigation__links ${isOpen ? 'is-open' : ''}`}>
        {navigationLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className={`navigation__toggle ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Alternar menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

