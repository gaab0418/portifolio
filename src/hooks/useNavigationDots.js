import { useState, useEffect } from 'react';

export default function useNavigationDots(sections) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      // Check if at the top
      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      // Check each section
      const sectionElements = sections.map((id) => document.getElementById(id));
      
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (!section) continue;

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Special handling for contact (last section)
        if (sectionId === 'contact') {
          if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 300) {
            setActiveSection('contact');
            return;
          }
        } 
        // Normal logic for other sections
        else if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const offset = sectionId === 'hero' ? 0 : 80;
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return { activeSection, scrollToSection };
}

