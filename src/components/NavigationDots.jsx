import useNavigationDots from '../hooks/useNavigationDots';

const sections = ['hero', 'ia-automation', 'sobre', 'skills', 'recent-works', 'experience', 'education', 'contact'];

export default function NavigationDots() {
  const { activeSection, scrollToSection } = useNavigationDots(sections);

  return (
    <div className="nav-dots">
      {sections.map((section) => (
        <div
          key={section}
          className={`nav-dot ${activeSection === section ? 'active' : ''}`}
          data-section={section}
          onClick={() => scrollToSection(section)}
        />
      ))}
    </div>
  );
}

