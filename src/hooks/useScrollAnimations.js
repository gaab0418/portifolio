import { useEffect } from 'react';

export default function useScrollAnimations() {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    
    // Initially hide all animate elements
    animateElements.forEach(element => {
      element.style.visibility = 'hidden';
    });

    const animateOnScroll = () => {
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.visibility = 'visible';
          if (element.classList.contains('animate-fade-in')) {
            element.style.animation = 'fadeIn 0.8s ease forwards';
          } else if (element.classList.contains('animate-slide-up')) {
            element.style.animation = 'slideUp 0.8s ease forwards';
          }
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 500); // Initial trigger

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
}

