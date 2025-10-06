import { useState, useRef } from 'react';
import { brandsData } from '../data/portfolioData';

function BrandLogo({ src, alt, title }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span 
      className="brand-logo-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img 
        src={src} 
        alt={alt} 
        className="brand-logo"
      />
      <div className={`tooltip ${showTooltip ? 'show' : ''}`}>
        {title}
      </div>
    </span>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="brands">
      <h2><i className="fa-solid fa-tools"></i>Tecnologias</h2>
      <p>Stack tecnológico que utilizo no desenvolvimento</p>
      <div className="brand-logos">
        {brandsData.map((brand, index) => (
          <BrandLogo 
            key={index}
            src={brand.src}
            alt={brand.alt}
            title={brand.title}
          />
        ))}
      </div>
    </section>
  );
}

