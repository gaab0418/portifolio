import { useState, useEffect } from 'react';

export default function useTypewriter(text, speed = 100, delay = 500) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const startTyping = () => {
      setIsTyping(true);
      
      const type = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsTyping(false);
        }
      };

      timeout = setTimeout(type, delay);
    };

    startTyping();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return { displayText, isTyping };
}

