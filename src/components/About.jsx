import useTypewriter from '../hooks/useTypewriter';
import { aboutData } from '../data/portfolioData';

export default function About() {
  const { displayText } = useTypewriter(aboutData.name, 100, 500);

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-content">
        <h1>{displayText}</h1>
        <h3>{aboutData.role}</h3>
        {aboutData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <img
        src={aboutData.profileImage}
        alt={`Perfil de ${aboutData.name}`}
        className="profile-image"
      />
    </section>
  );
}

